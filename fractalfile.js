'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'スタイルガイド');

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('label', 'コンポーネント');

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs');
fractal.docs.set('label', 'スタイルガイドについて');

/* 共通ファイルディレクトリの指定 */
fractal.web.set('static.path', path.join(__dirname, '/src/public'));

/* カスタムオプションの適用 */
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
  "skin": "white",
  styles: ['default', '/settings/fix.css'],
  "nav": ["docs", "components"],
  "panels": ["html", "notes"], // "resources"
  "lang": "ja"
});
fractal.web.theme(myCustomisedTheme);

/* リソースパネルの設定 */
fractal.components.set('resources', {
  scss: {
    label: 'SCSS',
    match: ['**/*.scss']
  },
  css: {
    label: 'JS',
    match: ['**/*.js']
  }
});

/* 静的ファイルの書き出し場所 */
fractal.web.set('builder.dest', __dirname + '/dist');
