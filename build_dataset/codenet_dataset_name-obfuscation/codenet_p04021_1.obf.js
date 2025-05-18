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
function nexts(_0x2ab122, _0x6f4783) {
    return _0x6f4783 ? cin['slice'](cid, cid += _0x2ab122) : cin['slice'](cid, cid += _0x2ab122)['map'](_0x4ce028 => +_0x4ce028);
}
function nextm(_0x283d6b, _0x2ed650, _0x4ed13f) {
    var _0x3708d5 = [], _0x115b2d = 0x0;
    if (_0x4ed13f)
        for (; _0x115b2d < _0x283d6b; _0x115b2d++)
            _0x3708d5['push'](cin['slice'](cid, cid += _0x2ed650));
    else
        for (; _0x115b2d < _0x283d6b; _0x115b2d++)
            _0x3708d5['push'](cin['slice'](cid, cid += _0x2ed650)['map'](_0x5d93f6 => +_0x5d93f6));
    return _0x3708d5;
}
function xArray(_0x5894e1) {
    var _0x1e9e89 = arguments, _0x40ef5f = _0x1e9e89['length'], _0x5238b6 = 'Array(a[' + --_0x40ef5f + ']).fill().map(x=>{return\x20' + _0x5894e1 + ';})';
    while (--_0x40ef5f)
        _0x5238b6 = 'Array(a[' + _0x40ef5f + ']).fill().map(x=>' + _0x5238b6 + ')';
    return eval(_0x5238b6);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x1a0276 = next();
    var _0x1406ff = [];
    for (var _0x565f23 = 0x0; _0x565f23 < _0x1a0276; _0x565f23++) {
        _0x1406ff['push']([
            next(),
            _0x565f23 & 0x1
        ]);
    }
    _0x1406ff['sort']((_0x318dea, _0x554bdc) => _0x318dea[0x0] - _0x554bdc[0x0]);
    var _0x5e8223 = 0x0;
    for (var _0x565f23 = 0x0; _0x565f23 < _0x1a0276; _0x565f23 += 0x2)
        if (_0x1406ff[_0x565f23][0x1] === 0x1)
            _0x5e8223++;
    return _0x5e8223;
}