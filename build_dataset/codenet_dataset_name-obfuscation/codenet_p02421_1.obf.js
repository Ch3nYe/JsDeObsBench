var input = '';
var readable = process['stdin'];
readable['resume']();
readable['setEncoding']('utf-8');
readable['on']('data', function (_0x48ca7d) {
    input += _0x48ca7d;
});
readable['on']('end', function () {
    var _0x4e9a98 = input['split']('\x0a');
    var _0x303bd8 = _0x4e9a98[0x0];
    var _0x188044 = 0x0;
    var _0x2ad86b = 0x0;
    for (var _0x11a541 = 0x1; _0x11a541 < _0x4e9a98['length']; _0x11a541++) {
        var _0x4f6238 = _0x4e9a98[_0x11a541]['split']('\x20');
        if (_0x4f6238[0x0] < _0x4f6238[0x1]) {
            _0x2ad86b += 0x3;
        } else if (_0x4f6238[0x1] < _0x4f6238[0x0]) {
            _0x188044 += 0x3;
        } else {
            _0x2ad86b += 0x1;
            _0x188044 += 0x1;
        }
    }
    console['log'](_0x188044 + '\x20' + _0x2ad86b);
});