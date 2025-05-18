var lines = [];
var result = 0x0;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x46cd65) {
    lines['push'](_0x46cd65);
});
rl['on']('close', function () {
    var _0x2c672a = Number(lines[0x0]);
    var _0x554a4d = lines[0x1]['split']('\x20')['map'](_0x1dd04e => Number(_0x1dd04e));
    _0x554a4d['sort']((_0x49445c, _0x1a3a9d) => _0x49445c - _0x1a3a9d);
    var _0x12f065 = Array(_0x2c672a)['fill'](0x0);
    var _0x54d5fd = 0x0;
    _0x12f065[0x0] = [
        _0x554a4d[0x0],
        0x1
    ];
    for (var _0xa2dd43 = 0x1; _0xa2dd43 < _0x2c672a; _0xa2dd43++) {
        if (_0x554a4d[_0xa2dd43] !== _0x554a4d[_0xa2dd43 - 0x1]) {
            _0x54d5fd++;
            _0x12f065[_0x54d5fd] = [
                _0x554a4d[_0xa2dd43],
                0x1
            ];
        } else {
            var _0x38bcbe = _0x12f065[_0x54d5fd][0x1] + 0x1;
            _0x12f065[_0x54d5fd] = [
                _0x554a4d[_0xa2dd43],
                _0x38bcbe
            ];
        }
    }
    for (var _0xa2dd43 = 0x0; _0xa2dd43 < _0x12f065['length']; _0xa2dd43++) {
        if (_0x12f065[_0xa2dd43][0x0] === _0x12f065[_0xa2dd43][0x1]) {
            continue;
        } else {
            if (_0x12f065[_0xa2dd43] === 0x0) {
                continue;
            } else {
                result += Math['min'](_0x12f065[_0xa2dd43][0x1], Math['abs'](_0x12f065[_0xa2dd43][0x0] - _0x12f065[_0xa2dd43][0x1]));
            }
        }
    }
    console['log'](result);
});