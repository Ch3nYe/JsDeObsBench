function main(_0x3a9fee) {
    var _0x4e99aa = _0x3a9fee[0x0] - 0x0;
    var _0x1e3874 = [0x0]['concat'](_0x3a9fee[0x1]['split']('\x20')['map'](_0x3fc038 => _0x3fc038 - 0x0), [0x0]);
    var _0x2a5698 = [];
    _0x2a5698[0x0] = 0x0;
    var _0x2bb306 = [];
    _0x2bb306[_0x4e99aa] = 0x0;
    for (var _0x40d78d = 0x1; _0x40d78d <= _0x4e99aa; _0x40d78d++) {
        _0x2a5698[_0x40d78d] = _0x2a5698[_0x40d78d - 0x1] + Math['abs'](_0x1e3874[_0x40d78d] - _0x1e3874[_0x40d78d - 0x1]);
        _0x2bb306[_0x4e99aa - _0x40d78d] = _0x2bb306[_0x4e99aa - _0x40d78d + 0x1] + Math['abs'](_0x1e3874[_0x4e99aa - _0x40d78d + 0x1] - _0x1e3874[_0x4e99aa - _0x40d78d + 0x2]);
    }
    for (var _0x40d78d = 0x1; _0x40d78d <= _0x4e99aa; _0x40d78d++) {
        var _0x32ab9d = 0x0;
        _0x32ab9d += _0x2a5698[_0x40d78d - 0x1];
        _0x32ab9d += _0x2bb306[_0x40d78d] || 0x0;
        _0x32ab9d += Math['abs'](_0x1e3874[_0x40d78d - 0x1] - _0x1e3874[_0x40d78d + 0x1]);
        console['log'](_0x32ab9d);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));