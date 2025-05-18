var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x4900a2) {
    lines['push'](_0x4900a2);
});
rl['on']('close', function () {
    var _0x183ceb = Number(lines[0x0]);
    var _0x20bb32 = lines[0x1]['split']('');
    var _0x11570c = Number(lines[0x2]);
    for (var _0x66cd83 = 0x0; _0x66cd83 < _0x183ceb; _0x66cd83++) {
        if (_0x20bb32[_0x11570c - 0x1] !== _0x20bb32[_0x66cd83]) {
            _0x20bb32[_0x66cd83] = '*';
        }
    }
    var _0x179427 = '';
    for (var _0x66cd83 = 0x0; _0x66cd83 < _0x183ceb; _0x66cd83++) {
        _0x179427 = _0x179427 + _0x20bb32[_0x66cd83];
    }
    console['log'](_0x179427);
});