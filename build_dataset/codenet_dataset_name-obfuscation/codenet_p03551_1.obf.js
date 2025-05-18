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
function nexts(_0x24f4d3, _0x954ca5) {
    return _0x954ca5 ? cin['slice'](cid, cid += _0x24f4d3) : cin['slice'](cid, cid += _0x24f4d3)['map'](_0x11c896 => +_0x11c896);
}
function nextm(_0x543b1a, _0x13cd32, _0x36dd75) {
    var _0x2f357a = [], _0x3c3f34 = 0x0;
    if (_0x36dd75)
        for (; _0x3c3f34 < _0x543b1a; _0x3c3f34++)
            _0x2f357a['push'](cin['slice'](cid, cid += _0x13cd32));
    else
        for (; _0x3c3f34 < _0x543b1a; _0x3c3f34++)
            _0x2f357a['push'](cin['slice'](cid, cid += _0x13cd32)['map'](_0x44f493 => +_0x44f493));
    return _0x2f357a;
}
function xArray(_0x2bee58) {
    var _0x4d6c5b = arguments, _0x5e42ad = _0x4d6c5b['length'], _0x1acab6 = 'Array(a[' + --_0x5e42ad + ']).fill().map(x=>{return\x20' + _0x2bee58 + ';})';
    while (--_0x5e42ad)
        _0x1acab6 = 'Array(a[' + _0x5e42ad + ']).fill().map(x=>' + _0x1acab6 + ')';
    return eval(_0x1acab6);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x5039c1 = next();
    var _0x259556 = next();
    var _0x3336a8 = _0x259556 * 0x708 + _0x5039c1 * 0x64;
    return _0x3336a8 << _0x259556;
}