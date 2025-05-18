process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x456d91 => {
    lines['push'](_0x456d91);
});
reader['on']('close', () => {
    var _0x49e4d2 = parseInt(lines[0x0]);
    var _0x1ce110 = 0x0;
    var _0x54b70e = 0x0;
    for (var _0x549a70 = 0x0; _0x549a70 < _0x49e4d2; _0x549a70++) {
        var _0x4a00fb = parseInt(lines[0x1]['split']('\x20')[_0x549a70]);
        _0x54b70e = Math['max'](_0x54b70e, _0x4a00fb);
        _0x1ce110 += _0x54b70e - _0x4a00fb;
    }
    console['log'](_0x1ce110);
});