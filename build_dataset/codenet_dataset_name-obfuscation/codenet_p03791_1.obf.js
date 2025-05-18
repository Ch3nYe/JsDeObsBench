'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
function next(_0x9a4c0c) {
    return _0x9a4c0c ? cin[cid++] : +cin[cid++];
}
function nexts(_0x3d60a1, _0x1f6a90) {
    return _0x1f6a90 ? cin['slice'](cid, cid += _0x3d60a1) : cin['slice'](cid, cid += _0x3d60a1)['map'](_0x33bd85 => +_0x33bd85);
}
function nextm(_0x8b473f, _0x4a6317, _0x1188f5) {
    var _0x329306 = [], _0x553377 = 0x0;
    if (_0x1188f5)
        for (; _0x553377 < _0x8b473f; _0x553377++)
            _0x329306['push'](cin['slice'](cid, cid += _0x4a6317));
    else
        for (; _0x553377 < _0x8b473f; _0x553377++)
            _0x329306['push'](cin['slice'](cid, cid += _0x4a6317)['map'](_0xc3813 => +_0xc3813));
    return _0x329306;
}
function xArray(_0x3450c2) {
    var _0x28cdac = arguments, _0x5649bf = _0x28cdac['length'], _0x1f046b = 'Array(a[' + --_0x5649bf + ']).fill().map(x=>{return\x20' + _0x3450c2 + ';})';
    while (--_0x5649bf)
        _0x1f046b = 'Array(a[' + _0x5649bf + ']).fill().map(x=>' + _0x1f046b + ')';
    return eval(_0x1f046b);
}
var mod = 0x3b9aca00 + 0x7;
function mul() {
    for (var _0x4a3dab = arguments, _0x130fdf = _0x4a3dab[0x0], _0x132fa7 = _0x4a3dab['length']; --_0x132fa7;)
        _0x130fdf = ((_0x130fdf >> 0x10) * _0x4a3dab[_0x132fa7] % mod * 0x10000 + (_0x130fdf & 0xffff) * _0x4a3dab[_0x132fa7]) % mod;
    return _0x130fdf;
}
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    var _0x58b203 = next();
    var _0x103b5a = nexts(_0x58b203);
    var _0x63276a = 0x1, _0x119b20 = 0x1, _0x515c6c = 0x0;
    for (var _0x1fc185 = 0x0; _0x1fc185 < _0x58b203; _0x1fc185++) {
        _0x515c6c++;
        _0x63276a = mul(_0x63276a, _0x515c6c);
        if (_0x103b5a[_0x1fc185] < _0x119b20) {
            _0x515c6c--;
        } else {
            _0x119b20 += 0x2;
        }
    }
    return _0x63276a;
}