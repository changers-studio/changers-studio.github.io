const fs = require("fs");
const path = require("path");

const spritePath = path.resolve(__dirname, "../src/img/sprite.svg");
const outputPath = path.resolve(
	__dirname,
	"../src/partials/sprite-preview.html",
);

function parseSprite(content) {
	const symbolRegex = /<symbol[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;
	const symbols = [];
	let match;

	while ((match = symbolRegex.exec(content))) {
		symbols.push(match[1]);
	}

	return {
		symbols,
		inlineSprite: content.replace(/<\/?svg[^>]*>/g, "").trim(),
	};
}

function buildMarkup({ symbols, inlineSprite }) {
	return `
<section class="sprite-preview">
  <style>
    .sprite-preview {
      padding: 20px 40px;
      margin: 20px auto;
      max-width: 1280px;
      border: 1px solid #eaeaea;
      background: #fff;
      border-radius: 8px;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: #1f2933;
    }
    .sprite-preview h2 {
      margin: 0 0 24px;
      font-size: 24px;
      font-weight: 600;
    }
    .sprite-preview__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 20px;
    }
    .sprite-preview__item {
      background: #fff;
      border-radius: 12px;
      padding: 18px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      border: 1px solid #eaeaea;
    }
    .sprite-preview__icon {
      width: 48px;
      height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #0f172a;
    }
    .sprite-preview__icon svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0;
    }
    .sprite-preview__id {
      font-size: 12px;
      font-family: 'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      background: #f1f5f9;
      color: #475569;
      border-radius: 6px;
      padding: 4px 8px;
      word-break: break-all;
    }
    @media (max-width: 640px) {
      .sprite-preview {
        padding: 24px 16px;
      }
      .sprite-preview__grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }
    }
  </style>

  <svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
    ${inlineSprite}
  </svg>

  <h2 id="sprite-preview-title">SVG legend</h2>
  <div class="sprite-preview__grid">
    ${symbols
		.map(
			(id) => `
    <div class="sprite-preview__item">
      <span class="sprite-preview__icon">
        <svg role="img">
          <use href="#${id}" />
        </svg>
      </span>
      <span class="sprite-preview__id"><code>#${id}</code></span>
    </div>
    `,
		)
		.join("")}
  </div>
</section>
`.trim();
}

function generateSpritePreview({ silent = false } = {}) {
	if (!fs.existsSync(spritePath)) {
		throw new Error(`Sprite file not found at ${spritePath}`);
	}

	const spriteContent = fs.readFileSync(spritePath, "utf8");
	const parsed = parseSprite(spriteContent);
	const emptyMarkup = `
<section class="sprite-preview">
  <p>Sprite is empty. Add symbols to <code>src/img/sprite.svg</code> to preview icons.</p>
</section>
`.trim();

	if (!parsed.symbols.length) {
		const hasExisting = fs.existsSync(outputPath);
		const existingMarkup = hasExisting
			? fs.readFileSync(outputPath, "utf8")
			: null;
		const changed = !hasExisting || existingMarkup !== emptyMarkup;

		if (changed) {
			fs.writeFileSync(outputPath, emptyMarkup, "utf8");
		}

		return { count: 0, changed };
	}

	const markup = buildMarkup(parsed);
	const hasExisting = fs.existsSync(outputPath);
	const existingMarkup = hasExisting
		? fs.readFileSync(outputPath, "utf8")
		: null;
	const changed = !hasExisting || existingMarkup !== markup;

	if (changed) {
		fs.writeFileSync(outputPath, markup, "utf8");
		if (!silent) {
			console.log(
				`Sprite preview partial updated at ${path.relative(process.cwd(), outputPath)} (${parsed.symbols.length} icons)`,
			);
		}
	} else if (!silent) {
		console.log("Sprite preview partial is already up to date.");
	}

	return { count: parsed.symbols.length, changed };
}

module.exports = {
	spritePath,
	outputPath,
	generateSpritePreview,
};
