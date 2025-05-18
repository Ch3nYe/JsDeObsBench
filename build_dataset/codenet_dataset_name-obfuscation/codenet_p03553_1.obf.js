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
function nexts(_0x2ec018, _0x4cadc7) {
    return _0x4cadc7 ? cin['slice'](cid, cid += _0x2ec018) : cin['slice'](cid, cid += _0x2ec018)['map'](_0x256e74 => +_0x256e74);
}
function nextm(_0x1695f7, _0x7af9f6, _0xbbcec) {
    var _0x322791 = [], _0x5d76f4 = 0x0;
    if (_0xbbcec)
        for (; _0x5d76f4 < _0x1695f7; _0x5d76f4++)
            _0x322791['push'](cin['slice'](cid, cid += _0x7af9f6));
    else
        for (; _0x5d76f4 < _0x1695f7; _0x5d76f4++)
            _0x322791['push'](cin['slice'](cid, cid += _0x7af9f6)['map'](_0x30dfa4 => +_0x30dfa4));
    return _0x322791;
}
function xArray(_0x171200) {
    var _0x60ce64 = arguments, _0x278e0c = _0x60ce64['length'], _0x1e4519 = 'Array(a[' + --_0x278e0c + ']).fill().map(x=>{return\x20' + _0x171200 + ';})';
    while (--_0x278e0c)
        _0x1e4519 = 'Array(a[' + _0x278e0c + ']).fill().map(x=>' + _0x1e4519 + ')';
    return eval(_0x1e4519);
}
var myOut = main();
if (myOut !== undefined)
    console['log'](String(myOut));
function main() {
    var _0x546525 = next();
    var _0x459e8c = [0x0]['concat'](nexts(_0x546525));
    for (var _0x340741 = _0x546525; _0x340741 >= 0x1; _0x340741--) {
        var _0x3058da = 0x0;
        for (var _0x3d4769 = _0x340741; _0x3d4769 <= _0x546525; _0x3d4769 += _0x340741)
            _0x3058da += _0x459e8c[_0x3d4769];
        if (_0x3058da < 0x0)
            for (var _0x3d4769 = _0x340741; _0x3d4769 <= _0x546525; _0x3d4769 += _0x340741)
                _0x459e8c[_0x3d4769] = 0x0;
    }
    return _0x459e8c['reduce']((_0xd3e03d, _0x45d32d) => _0xd3e03d + _0x45d32d);
}