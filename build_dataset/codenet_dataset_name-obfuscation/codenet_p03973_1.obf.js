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
function nexts(_0x54fbbe, _0x28cf09) {
    return _0x28cf09 ? cin['slice'](cid, cid += _0x54fbbe) : cin['slice'](cid, cid += _0x54fbbe)['map'](_0x3cec79 => +_0x3cec79);
}
function nextm(_0x4dacef, _0x571136, _0x208891) {
    var _0x5be1ba = [], _0xfd2fb = 0x0;
    if (_0x208891)
        for (; _0xfd2fb < _0x4dacef; _0xfd2fb++)
            _0x5be1ba['push'](cin['slice'](cid, cid += _0x571136));
    else
        for (; _0xfd2fb < _0x4dacef; _0xfd2fb++)
            _0x5be1ba['push'](cin['slice'](cid, cid += _0x571136)['map'](_0x3ca197 => +_0x3ca197));
    return _0x5be1ba;
}
function xArray(_0x51359e) {
    var _0x10f6d5 = arguments, _0x722c97 = _0x10f6d5['length'], _0x411d68 = 'Array(a[' + --_0x722c97 + ']).fill().map(x=>{return\x20' + _0x51359e + ';})';
    while (--_0x722c97)
        _0x411d68 = 'Array(a[' + _0x722c97 + ']).fill().map(x=>' + _0x411d68 + ')';
    return eval(_0x411d68);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x2a2697 = next();
    var _0x512749 = 0x0, _0x28c522 = 0x1;
    for (var _0xeff951 = 0x0; _0xeff951 < _0x2a2697; _0xeff951++) {
        var _0x335e58 = next() - 0x1;
        if (_0x335e58 < _0x28c522) {
            _0x28c522 = Math['max'](_0x28c522, _0x335e58 + 0x2);
        } else {
            _0x512749 += _0x335e58 / _0x28c522 | 0x0;
            _0x28c522 = Math['max'](0x2, _0x28c522);
        }
    }
    return _0x512749;
}