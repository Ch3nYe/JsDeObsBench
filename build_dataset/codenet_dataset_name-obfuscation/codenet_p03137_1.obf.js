var readline = require('readline');
var lines = [];
var result = 0x0;
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x5a9ab2) {
    lines['push'](_0x5a9ab2);
});
rl['on']('close', function () {
    var _0x2ccdcb = Number(lines[0x0]['split']('\x20')[0x0]);
    var _0x355ba7 = Number(lines[0x0]['split']('\x20')[0x1]);
    var _0x4d4847 = lines[0x1]['split']('\x20')['map'](_0x43e9e4 => Number(_0x43e9e4));
    _0x4d4847['sort']((_0x4ed903, _0x262bbf) => _0x4ed903 - _0x262bbf);
    var _0x545562 = Array(_0x355ba7)['fill'](0x0);
    for (var _0x205ddd = 0x1; _0x205ddd < _0x355ba7; _0x205ddd++) {
        _0x545562[_0x205ddd] = _0x4d4847[_0x205ddd] - _0x4d4847[_0x205ddd - 0x1];
    }
    _0x545562['sort']((_0xa280bb, _0x91c108) => _0x91c108 - _0xa280bb);
    for (var _0x205ddd = _0x2ccdcb - 0x1; _0x205ddd < _0x355ba7; _0x205ddd++) {
        result += _0x545562[_0x205ddd];
    }
    console['log'](result);
});