var lines = [];
var result = Infinity;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x1bb844) {
    lines['push'](_0x1bb844);
});
rl['on']('close', function () {
    var _0x264995 = Number(lines[0x0]['split']('\x20')[0x0]);
    var _0x499a9a = Number(lines[0x0]['split']('\x20')[0x1]);
    lines['shift']();
    var _0x90a716 = lines['map'](_0x50dc67 => _0x50dc67['split']('\x20')['map'](_0x10482b => Number(_0x10482b)));
    for (var _0x57103d of _0x90a716) {
        if (_0x57103d[0x1] <= _0x499a9a) {
            result = Math['min'](result, _0x57103d[0x0]);
        }
    }
    result !== Infinity ? console['log'](result) : console['log']('TLE');
});