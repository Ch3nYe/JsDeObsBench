(function (_0x26fe58) {
    var _0x366684 = _0x26fe58['replace'](/\n$/, '')['split']('\x0a')['map'](Number);
    var _0x31c701 = _0x366684['length'];
    for (var _0x24d2ce = 0x0; _0x24d2ce < _0x31c701; _0x24d2ce++) {
        var _0x118aef = _0x366684['shift']();
        var _0x513296 = [];
        _0x118aef['toString'](0x2)['split']('')['reverse']()['map'](function (_0x3cc5af, _0x3d24e3) {
            if (_0x3cc5af == 0x1) {
                _0x513296['push'](Math['pow'](0x2, _0x3d24e3));
            }
        });
        console['log'](_0x513296['join']('\x20'));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));