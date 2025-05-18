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
function nexts(_0x54e4f4, _0x190891) {
    return _0x190891 ? cin['slice'](cid, cid += _0x54e4f4) : cin['slice'](cid, cid += _0x54e4f4)['map'](_0x3cf2a3 => +_0x3cf2a3);
}
function nextm(_0x421618, _0x4cc266, _0x40b9f1) {
    var _0x25ab5a = [], _0x2bf10e = 0x0;
    if (_0x40b9f1)
        for (; _0x2bf10e < _0x421618; _0x2bf10e++)
            _0x25ab5a['push'](cin['slice'](cid, cid += _0x4cc266));
    else
        for (; _0x2bf10e < _0x421618; _0x2bf10e++)
            _0x25ab5a['push'](cin['slice'](cid, cid += _0x4cc266)['map'](_0x2c2c44 => +_0x2c2c44));
    return _0x25ab5a;
}
function xArray(_0x20182b) {
    var _0x3d930a = arguments, _0x33a796 = _0x3d930a['length'], _0x26a56b = 'Array(a[' + --_0x33a796 + ']).fill().map(x=>{return\x20' + _0x20182b + ';})';
    while (--_0x33a796)
        _0x26a56b = 'Array(a[' + _0x33a796 + ']).fill().map(x=>' + _0x26a56b + ')';
    return eval(_0x26a56b);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x33f066 = next();
    var _0x1e383e = nexts(_0x33f066)['sort']((_0x5bf08c, _0x2a8a99) => _0x5bf08c - _0x2a8a99);
    var _0x3b2fa1 = 0x0;
    for (var _0x1a7554 = 0x0; _0x1a7554 < _0x33f066; _0x1a7554++)
        for (var _0x594b69 = _0x1a7554 + 0x1; _0x594b69 < _0x33f066; _0x594b69++)
            for (var _0x41577b = _0x594b69 + 0x1; _0x41577b < _0x33f066; _0x41577b++) {
                if (_0x1e383e[_0x1a7554] === _0x1e383e[_0x594b69] || _0x1e383e[_0x594b69] === _0x1e383e[_0x41577b])
                    continue;
                if (_0x1e383e[_0x1a7554] + _0x1e383e[_0x594b69] > _0x1e383e[_0x41577b])
                    _0x3b2fa1++;
            }
    return _0x3b2fa1;
}