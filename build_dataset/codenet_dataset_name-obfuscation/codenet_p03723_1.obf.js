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
function nexts(_0x535633, _0xded3a) {
    return _0xded3a ? cin['slice'](cid, cid += _0x535633) : cin['slice'](cid, cid += _0x535633)['map'](_0x1077bb => +_0x1077bb);
}
function nextm(_0x4c3b45, _0x14761d, _0x55150b) {
    var _0x47f4bd = [], _0x231bc3 = 0x0;
    if (_0x55150b)
        for (; _0x231bc3 < _0x4c3b45; _0x231bc3++)
            _0x47f4bd['push'](cin['slice'](cid, cid += _0x14761d));
    else
        for (; _0x231bc3 < _0x4c3b45; _0x231bc3++)
            _0x47f4bd['push'](cin['slice'](cid, cid += _0x14761d)['map'](_0x2048df => +_0x2048df));
    return _0x47f4bd;
}
function xArray(_0x31468a) {
    var _0x34d2a3 = arguments, _0x233d69 = _0x34d2a3['length'], _0x39f933 = 'Array(a[' + --_0x233d69 + ']).fill().map(x=>{return\x20' + _0x31468a + ';})';
    while (--_0x233d69)
        _0x39f933 = 'Array(a[' + _0x233d69 + ']).fill().map(x=>' + _0x39f933 + ')';
    return eval(_0x39f933);
}
var tm = +new Date() + 0x384;
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var [_0x5b15c6, _0x48676b, _0x1799c0] = nexts(0x3);
    var _0x283c17 = 0x0;
    while (new Date() < tm) {
        if (_0x5b15c6 % 0x2 || _0x48676b % 0x2 || _0x1799c0 % 0x2)
            return _0x283c17;
        var _0x48e841 = _0x48676b + _0x1799c0 >> 0x1, _0x2a9c2b = _0x5b15c6 + _0x1799c0 >> 0x1, _0x324682 = _0x5b15c6 + _0x48676b >> 0x1;
        _0x5b15c6 = _0x48e841, _0x48676b = _0x2a9c2b, _0x1799c0 = _0x324682;
        _0x283c17++;
    }
    return -0x1;
}