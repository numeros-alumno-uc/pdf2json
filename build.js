'use strict';

const _pdfjsFiles = [
    'shared/util.js',
    'shared/colorspace.js',
    'shared/pattern.js',
    'shared/function.js',
    'shared/annotation.js',

    'core/core.js',
    'core/obj.js',
    'core/charsets.js',
    'core/crypto.js',
    'core/evaluator.js',
    'core/fonts.js',
    'core/font_renderer.js',
    'core/glyphlist.js',
    'core/image.js',
    'core/metrics.js',
    'core/parser.js',
    'core/stream.js',
    'core/worker.js',
    'core/jpx.js',
    'core/jbig2.js',
    'core/bidi.js',
    'core/jpg.js',
    'core/chunked_stream.js',
    'core/pdf_manager.js',
    'core/cmap.js',
    'core/cidmaps.js',

    'display/canvas.js',
    'display/font_loader.js',
    'display/metadata.js',
    'display/api.js'
];

const pkInfo = require('./package.json');
const fs = require('fs');

const _PARSER_SIG = `${pkInfo.name}@${pkInfo.version} [${pkInfo.homepage}]`;
const _basePath = __dirname + '/base/';

const args = [
  'PDFJS',
  'globalScope',
  'nodeUtil',
  'nodeEvents',
  'fs',
  '_',
  'DOMParser',
  'PDFCanvas',
  'PDFUnit',
  'PDFField',
  'PDFAnno',
  'Image',
  'pkInfo',
  'PDFFont'
];

let _fileContent = 'module.exports = function ({' + args.join(', ') + '}) {\n  (function () {\n';
_pdfjsFiles.forEach( (fieldName, idx, arr) => _fileContent += fs.readFileSync(_basePath + fieldName, 'utf8') );

_fileContent += '\n}.call(global));\n}';
fs.writeFileSync('./base.out.js', _fileContent, { encoding: 'utf8' });
