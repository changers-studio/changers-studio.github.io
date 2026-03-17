const { generateSpritePreview } = require('../scripts/sprite-preview');

class SpritePreviewPlugin {
  constructor(options = {}) {
    this.options = {
      silent: true,
      ...options,
    };
  }

  apply(compiler) {
    const pluginName = 'SpritePreviewPlugin';
    const logger = compiler.getInfrastructureLogger(pluginName);

    const generate = () => {
      try {
        const { count, changed } = generateSpritePreview({ silent: this.options.silent });
        if (!this.options.silent && changed) {
          logger.info(`Sprite preview updated (${count} icons)`);
        }
      } catch (error) {
        logger.error(`Sprite preview generation failed: ${error.message}`);
      }
    };

    compiler.hooks.beforeRun.tap(pluginName, generate);
    compiler.hooks.watchRun.tap(pluginName, generate);
  }
}

module.exports = SpritePreviewPlugin;
