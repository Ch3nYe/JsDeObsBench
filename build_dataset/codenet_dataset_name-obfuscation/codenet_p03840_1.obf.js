'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
function next(_0x1be2ef) {
    return _0x1be2ef ? cin[cid++] : +cin[cid++];
}
function nexts(_0x23ccf3, _0x16c65f) {
    return _0x16c65f ? cin['slice'](cid, cid += _0x23ccf3) : cin['slice'](cid, cid += _0x23ccf3)['map'](_0x57a204 => +_0x57a204);
}
function nextm(_0x2b2672, _0x399eca, _0x2df644) {
    var _0x2c6321 = [], _0x2d8ffd = 0x0;
    if (_0x2df644)
        for (; _0x2d8ffd < _0x2b2672; _0x2d8ffd++)
            _0x2c6321['push'](cin['slice'](cid, cid += _0x399eca));
    else
        for (; _0x2d8ffd < _0x2b2672; _0x2d8ffd++)
            _0x2c6321['push'](cin['slice'](cid, cid += _0x399eca)['map'](_0x503d88 => +_0x503d88));
    return _0x2c6321;
}
function xArray(_0x3f4c20) {
    var _0x53a1af = arguments, _0x268dbd = _0x53a1af['length'], _0x5287b9 = 'Array(a[' + --_0x268dbd + ']).fill().map(x=>{return\x20' + _0x3f4c20 + ';})';
    while (--_0x268dbd)
        _0x5287b9 = 'Array(a[' + _0x268dbd + ']).fill().map(x=>' + _0x5287b9 + ')';
    return eval(_0x5287b9);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var _0x12f639 = nexts(0x7);
    var _0x55c2e3 = _0x12f639[0x1] + ((_0x12f639[0x0] / 0x2 | 0x0) + (_0x12f639[0x3] / 0x2 | 0x0) + (_0x12f639[0x4] / 0x2 | 0x0)) * 0x2;
    switch (_0x12f639[0x0] % 0x2 + _0x12f639[0x3] % 0x2 + _0x12f639[0x4] % 0x2) {
    case 0x3:
        _0x55c2e3 += 0x3;
        break;
    case 0x2:
        if (_0x12f639[0x0] * _0x12f639[0x3] * _0x12f639[0x4])
            _0x55c2e3 += 0x1;
        break;
    }
    return _0x55c2e3;
}