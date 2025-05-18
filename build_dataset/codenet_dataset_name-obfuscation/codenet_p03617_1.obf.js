'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
function next() {
    return +cin[cid++];
}
function nextstr() {
    return cin[cid++];
}
function nextbig() {
    return BigInt(cin[cid++]);
}
function nexts(_0x529f16, _0x3d75a4) {
    return _0x3d75a4 ? cin['slice'](cid, cid += _0x529f16) : cin['slice'](cid, cid += _0x529f16)['map'](_0x28e446 => +_0x28e446);
}
function nextm(_0x11a6c3, _0x40bc9b, _0x3375b5) {
    var _0x479ef4 = [], _0x1646eb = 0x0;
    if (_0x3375b5)
        for (; _0x1646eb < _0x11a6c3; _0x1646eb++)
            _0x479ef4['push'](cin['slice'](cid, cid += _0x40bc9b));
    else
        for (; _0x1646eb < _0x11a6c3; _0x1646eb++)
            _0x479ef4['push'](cin['slice'](cid, cid += _0x40bc9b)['map'](_0x534085 => +_0x534085));
    return _0x479ef4;
}
function xArray(_0x3c000b) {
    var _0x5d8be8 = arguments, _0x4c58f8 = _0x5d8be8['length'], _0x5e7d81 = 'Array(a[' + --_0x4c58f8 + ']).fill().map(x=>{return\x20' + _0x3c000b + ';})';
    while (--_0x4c58f8)
        _0x5e7d81 = 'Array(a[' + _0x4c58f8 + ']).fill().map(x=>' + _0x5e7d81 + ')';
    return eval(_0x5e7d81);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var [_0x2f5104, _0x2ea3bf, _0x17b348, _0x5e2f31] = nexts(0x4);
    var _0x2e04ab = next();
    if (_0x2f5104 * 0x2 < _0x2ea3bf)
        _0x2ea3bf = _0x2f5104 * 0x2;
    if (_0x2ea3bf * 0x2 < _0x17b348)
        _0x17b348 = _0x2ea3bf * 0x2;
    if (_0x17b348 * 0x2 < _0x5e2f31)
        _0x5e2f31 = _0x17b348 * 0x2;
    return BigInt(_0x2e04ab / 0x2 | 0x0) * BigInt(_0x5e2f31) + BigInt((_0x2e04ab & 0x1) * _0x17b348);
}