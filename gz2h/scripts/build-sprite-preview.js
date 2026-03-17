#!/usr/bin/env node

const fs = require('fs');
const { spritePath, generateSpritePreview } = require('./sprite-preview');

function run(silent = false) {
  try {
    const { count, changed } = generateSpritePreview({ silent });
    if (!silent) {
      console.log(
        changed
          ? `Sprite preview partial generated (${count} icons)`
          : `Sprite preview partial already up to date (${count} icons)`
      );
    } else if (changed) {
      console.log(`Sprite preview partial regenerated (${count} icons)`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

const shouldWatch = process.argv.includes('--watch') || process.env.WATCH_SPRITE === 'true';

run(false);

if (shouldWatch) {
  console.log('Watching sprite.svg for changes...');
  let timeout;

  fs.watch(spritePath, { persistent: true }, () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => run(true), 100);
  });
}
