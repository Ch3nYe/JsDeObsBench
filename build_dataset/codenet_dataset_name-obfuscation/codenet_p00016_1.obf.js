m = '+=+j[0]*Math.', n = '(s*Math.PI/180)', x = y = s = 0x0;
require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['some'](function (_0x30fc04) {
    j = _0x30fc04['split'](','), eval('x' + m + 'sin' + n + ',y' + m + 'cos' + n), s += +j[0x1];
});
console['log'](~~x), console['log'](~~y);