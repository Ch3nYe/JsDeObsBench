'use strict';
function _(_0xc4e2b8) {
    let _0x5dfe8c = _0xc4e2b8['split']('\x0a');
    if (_0x5dfe8c[_0x5dfe8c['length'] - 0x1] == '')
        _0x5dfe8c['pop']();
    this['l'] = _0x5dfe8c;
    this['y'] = 0x0;
}
_['prototype']['ints'] = function () {
    return this['l'][this['y']++]['split']('\x20')['map'](_0x81e09f => +_0x81e09f);
};
_['prototype']['intv'] = function () {
    const _0x379be8 = this['y'];
    this['y'] = this['l']['length'];
    return this['l']['slice'](_0x379be8)['map'](_0x3698f7 => +_0x3698f7);
};
_['prototype']['strv'] = function () {
    const _0x1d9e85 = this['y'];
    this['y'] = this['l']['length'];
    return this['l']['slice'](_0x1d9e85);
};
_['prototype']['strn'] = function (_0x34d180) {
    const _0x198095 = this['y'];
    this['y'] += _0x34d180;
    return this['l']['slice'](_0x198095, _0x198095 + _0x34d180);
};
const $ = new _(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
((() => {
    const _0x1eedea = $['ints']();
    const _0x1926cb = _0x1eedea[0x0];
    const _0xb8387e = _0x1eedea[0x1];
    const _0x53802e = $['ints']();
    const _0x4bf6ba = [];
    for (let _0x4983e4 = 0x0; _0x4983e4 < _0x1926cb; _0x4983e4++) {
        let _0x5eab81 = 0x0;
        for (let _0x515398 = _0x4983e4; _0x515398 < _0x1926cb; _0x515398++) {
            _0x5eab81 += _0x53802e[_0x515398];
            _0x4bf6ba['push'](_0x5eab81);
        }
    }
    _0x4bf6ba['sort']((_0x483e6f, _0x4c3f57) => _0x4c3f57 - _0x483e6f);
    let _0xc23296 = 0x0;
    for (let _0x4b984b = 0x29; _0x4b984b >= 0x0; _0x4b984b--) {
        let _0x99b1a1 = 0x1 << _0x4b984b;
        let _0x45c793 = _0x4bf6ba['filter'](_0x20ea68 => (_0x20ea68 & _0xc23296 + _0x99b1a1) === _0xc23296 + _0x99b1a1)['length'];
        if (_0x45c793 >= _0xb8387e) {
            _0xc23296 += _0x99b1a1;
        }
    }
    console['log'](_0xc23296);
})());