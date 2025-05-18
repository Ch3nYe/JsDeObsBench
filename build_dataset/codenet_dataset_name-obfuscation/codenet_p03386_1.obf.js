var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x42130e) {
    lines['push'](_0x42130e);
});
rl['on']('close', function () {
    var _0x397a22 = Number(lines[0x0]['split']('\x20')[0x0]);
    var _0x51b38c = Number(lines[0x0]['split']('\x20')[0x1]);
    var _0x5cebc2 = Number(lines[0x0]['split']('\x20')[0x2]);
    var _0x57c219 = '';
    for (var _0x3d8766 = _0x397a22; _0x3d8766 <= _0x51b38c; _0x3d8766++) {
        if (_0x3d8766 < _0x397a22 + _0x5cebc2) {
            _0x57c219 += _0x3d8766['toString']();
        } else if (_0x3d8766 > _0x51b38c - _0x5cebc2) {
            _0x57c219 += _0x3d8766['toString']();
        }
    }
    for (var _0x3d8766 = 0x0; _0x3d8766 < _0x57c219['length']; _0x3d8766++) {
        console['log'](_0x57c219[_0x3d8766]);
    }
});