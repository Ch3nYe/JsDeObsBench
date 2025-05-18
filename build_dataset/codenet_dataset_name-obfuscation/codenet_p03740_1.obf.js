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
function nexts(_0x508996, _0xf3f73c) {
    return _0xf3f73c ? cin['slice'](cid, cid += _0x508996) : cin['slice'](cid, cid += _0x508996)['map'](_0x119453 => +_0x119453);
}
function nextm(_0x7953f, _0x21dcf7, _0x3fdfe0) {
    var _0xac686d = [], _0x1423d1 = 0x0;
    if (_0x3fdfe0)
        for (; _0x1423d1 < _0x7953f; _0x1423d1++)
            _0xac686d['push'](cin['slice'](cid, cid += _0x21dcf7));
    else
        for (; _0x1423d1 < _0x7953f; _0x1423d1++)
            _0xac686d['push'](cin['slice'](cid, cid += _0x21dcf7)['map'](_0x510d9a => +_0x510d9a));
    return _0xac686d;
}
function xArray(_0xdef19c) {
    var _0x5d1f1d = arguments, _0x2043d2 = _0x5d1f1d['length'], _0x5b14b8 = 'Array(a[' + --_0x2043d2 + ']).fill().map(x=>{return\x20' + _0xdef19c + ';})';
    while (--_0x2043d2)
        _0x5b14b8 = 'Array(a[' + _0x2043d2 + ']).fill().map(x=>' + _0x5b14b8 + ')';
    return eval(_0x5b14b8);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x3ccd5d = nextbig(), _0x56d211 = nextbig();
    if (_0x3ccd5d - _0x56d211 < 0x2 && _0x56d211 - _0x3ccd5d < 0x2)
        return 'Brown';
    return 'Alice';
}