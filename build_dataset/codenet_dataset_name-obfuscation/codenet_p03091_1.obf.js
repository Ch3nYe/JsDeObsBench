'use strict';
function I(_0x52c3ea, _0x3bf4f6) {
    this['_s'] = _0x52c3ea['split']('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = _0x3bf4f6 || Number;
}
I['prototype']['a'] = function () {
    var _0x43acdd = this['_s'][this['_l']];
    if (!_0x43acdd)
        return;
    var _0x413120 = _0x43acdd['trim']()['split']('\x20');
    var _0x309d8f = _0x413120[this['_c']];
    this['_c']++;
    if (_0x413120['length'] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](_0x309d8f);
};
I['prototype']['l'] = function () {
    var _0x34f3a8 = this['_s'][this['_l']];
    if (!_0x34f3a8)
        return;
    this['_c'] = 0x0;
    this['_l']++;
    return _0x34f3a8['split']('\x20')['map'](this['_f']);
};
module['exports'] = I;
function main(_0x76a317) {
    const _0x35a0e4 = new I(_0x76a317);
    const _0xbc24c5 = _0x35a0e4['a']();
    const _0x2bba3b = _0x35a0e4['a']();
    const _0x5348e6 = [];
    for (let _0x90169f = 0x1; _0x90169f <= _0xbc24c5; _0x90169f++) {
        _0x5348e6[_0x90169f] = [];
    }
    for (let _0x38f620 = 0x0; _0x38f620 < _0x2bba3b; _0x38f620++) {
        let _0x14db2b = _0x35a0e4['a']();
        let _0xdb23e2 = _0x35a0e4['a']();
        _0x5348e6[_0x14db2b]['push'](_0xdb23e2);
        _0x5348e6[_0xdb23e2]['push'](_0x14db2b);
    }
    let _0x2ca7d7 = ![];
    let _0x4d3786 = !![];
    for (let _0x3c3e3e = 0x1; _0x3c3e3e <= _0xbc24c5; _0x3c3e3e++) {
        if (_0x5348e6[_0x3c3e3e]['length'] === 0x6) {
            _0x2ca7d7 = !![];
        }
        if (_0x5348e6[_0x3c3e3e]['length'] % 0x2 !== 0x0) {
            _0x4d3786 = ![];
        }
    }
    console['log'](_0x2ca7d7 && _0x4d3786 ? 'Yes' : 'No');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));