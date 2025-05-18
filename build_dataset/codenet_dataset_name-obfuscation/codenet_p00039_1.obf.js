r = '.IVXLCDM', require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a')['map'](function (_0x1c4c4f) {
    _0x1c4c4f ? (n = s = p = 0x0, _0x1c4c4f['split']('')['map'](function (_0x1cb501) {
        n = Math['pow'](0xa, ~~((n = r['indexOf'](_0x1cb501)) / 0x2)) / (0x2 - n % 0x2), n > p ? s -= p * 0x2 : 0x0, s += n, p = n;
    }), console['log'](s)) : 0x0;
});