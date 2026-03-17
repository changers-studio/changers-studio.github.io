const fs = require('fs');
const path = require('path');
const beautifyHtml = require('js-beautify').html;

const INCLUDE_RE = /@@include\(([^,)]*)(?:,\s*({[^@]*}\s*))?\)/g;

const defaultBeautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
};

function substituteArgs(content, args) {
  if (!args) return content;

  try {
    const parsed = JSON.parse(args);
    return content.replace(/@@(?!include)([\w.]+)/g, (_, key) =>
      key.split('.').reduce((acc, cur) => acc && acc[cur], parsed)
    );
  } catch (err) {
    throw new Error(`Failed to parse include arguments: ${err.message}`);
  }
}

function collectHtmlFiles(baseDir, relativeDir = '') {
  const resolvedDir = path.join(baseDir, relativeDir);
  const entries = fs.readdirSync(resolvedDir, { withFileTypes: true });
  let results = [];

  for (const entry of entries) {
    const entryPath = path.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(collectHtmlFiles(baseDir, entryPath));
    } else if (/\.html?$/.test(entry.name)) {
      results.push(entryPath);
    }
  }

  return results;
}

class FileIncludePlugin {
  constructor(options = {}) {
    this.options = {
      source: './src/pages',
      destination: './',
      replace: [],
      htmlBeautifyOptions: {},
      ...options,
    };
  }

  processFile(compilation, contextDir, filePath) {
    let content;

    try {
      content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      throw new Error(`${filePath} not found`);
    }

    compilation.fileDependencies.add(filePath);

    return content.replace(INCLUDE_RE, (_, includePath, args) => {
      const cleanedInclude = includePath.replace(/['"]/g, '');
      const absoluteInclude = path.resolve(contextDir, cleanedInclude);
      const includeContext = path.dirname(absoluteInclude);
      const includedContent = this.processFile(compilation, includeContext, absoluteInclude);

      return substituteArgs(includedContent, args);
    });
  }

  apply(compiler) {
    const pluginName = 'LocalFileIncludePlugin';
    const { Compilation, sources } = compiler.webpack;

    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      const logger = compilation.getLogger(pluginName);

      compilation.hooks.processAssets.tapPromise(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        async () => {
          const sourceRoot = path.resolve(compiler.options.context, this.options.source);
          const htmlFiles = collectHtmlFiles(sourceRoot);

          logger.info(`Working on ${htmlFiles.length} .html files`);

          for (const relativePath of htmlFiles) {
            const absolutePath = path.join(sourceRoot, relativePath);
            const destinationPath = this.options.destination
              ? path.join(this.options.destination, relativePath)
              : relativePath;

            let content = this.processFile(compilation, path.dirname(absolutePath), absolutePath);

            if (Array.isArray(this.options.replace)) {
              for (const replaceRule of this.options.replace) {
                content = content.replace(replaceRule.regex, replaceRule.to);
              }
            }

            const beautified = beautifyHtml(content, {
              ...defaultBeautifyOptions,
              ...this.options.htmlBeautifyOptions,
            });

            compilation.emitAsset(destinationPath.replace(/\\/g, '/'), new sources.RawSource(beautified));
          }
        }
      );
    });
  }
}

module.exports = FileIncludePlugin;
