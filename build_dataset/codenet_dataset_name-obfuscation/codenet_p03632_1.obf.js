function Main(_0x30138c) {
    var _0x271126 = _0x30138c['split']('\x0a')[0x0]['split']('\x20')['map'](function (_0x5cf125) {
        return Number(_0x5cf125);
    });
    var _0x58a11a = Math['max'](_0x271126[0x0], _0x271126[0x2]);
    var _0x4d85e9 = Math['min'](_0x271126[0x1], _0x271126[0x3]);
    var _0x1ada1c = Math['max'](0x0, _0x4d85e9 - _0x58a11a);
    console['log'](_0x1ada1c);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));