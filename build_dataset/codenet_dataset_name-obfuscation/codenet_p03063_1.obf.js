'use strict';
function I(_0x2770ac, _0x34d318) {
    this['_s'] = _0x2770ac['split']('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = _0x34d318 || Number;
}
I['prototype']['a'] = function () {
    var _0x4e212e = this['_s'][this['_l']];
    if (!_0x4e212e)
        return;
    var _0x19a85c = _0x4e212e['trim']()['split']('\x20');
    var _0x49420a = _0x19a85c[this['_c']];
    this['_c']++;
    if (_0x19a85c['length'] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](_0x49420a);
};
I['prototype']['l'] = function () {
    var _0x3c5ebc = this['_s'][this['_l']];
    if (!_0x3c5ebc)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return _0x3c5ebc['split']('\x20')['map'](this['_f']);
};
function main(_0x10ec13) {
    var _0x7b3708 = new I(_0x10ec13, String);
    var _0xbf39a0 = Number(_0x7b3708['a']());
    var _0x5f3e95 = _0x7b3708['a']();
    var _0x268900 = 0x0;
    var _0x1f3fd7 = 0x0;
    for (var _0x3b4a00 = 0x0; _0x3b4a00 < _0x5f3e95['length']; _0x3b4a00++) {
        if (_0x5f3e95[_0x3b4a00] === '.')
            _0x268900 += 0x1;
    }
    let _0x6a512d = _0x268900;
    for (var _0x3b4a00 = 0x0; _0x3b4a00 < _0x5f3e95['length']; _0x3b4a00++) {
        if (_0x5f3e95[_0x3b4a00] === '#') {
            _0x1f3fd7 += 0x1;
        } else {
            _0x268900 -= 0x1;
        }
        if (_0x1f3fd7 + _0x268900 < _0x6a512d) {
            _0x6a512d = _0x1f3fd7 + _0x268900;
        }
    }
    console['log'](_0x6a512d);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));