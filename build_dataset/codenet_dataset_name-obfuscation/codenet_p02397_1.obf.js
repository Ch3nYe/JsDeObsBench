function main(_0x3d6e9b) {
    var _0x235c1f = 0x0;
    while (_0x3d6e9b[_0x235c1f] != 0x0 && _0x3d6e9b[_0x235c1f + 0x1] != 0x0) {
        if (_0x3d6e9b[_0x235c1f] < _0x3d6e9b[_0x235c1f + 0x1])
            console['log'](_0x3d6e9b[_0x235c1f] + '\x20' + _0x3d6e9b[_0x235c1f + 0x1]);
        else
            console['log'](_0x3d6e9b[_0x235c1f + 0x1] + '\x20' + _0x3d6e9b[_0x235c1f]);
        _0x235c1f = _0x235c1f + 0x2;
    }
}
var lines = [];
var b = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x4d85e7) {
    var _0x51a1ad = _0x4d85e7['split']('\x20');
    var _0x99cc88 = parseInt(_0x51a1ad[0x0], 0xa);
    var _0x26eccb = parseInt(_0x51a1ad[0x1], 0xa);
    b['push'](_0x99cc88);
    b['push'](_0x26eccb);
    if (_0x99cc88 == 0x0 && _0x26eccb == 0x0)
        main(b);
});
process['stdin']['on']('end', function () {
});