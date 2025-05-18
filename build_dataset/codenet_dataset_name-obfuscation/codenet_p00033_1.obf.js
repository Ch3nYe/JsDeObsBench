(function (_0x328f19) {
    var _0x8e01e = _0x328f19['replace'](/\n$/, '')['split']('\x0a');
    var _0x4ca79a = Number(_0x8e01e['shift']());
    for (var _0x1cd07d = 0x0; _0x1cd07d < _0x4ca79a; _0x1cd07d++) {
        var _0x5f4d9e = _0x8e01e['shift']()['split']('\x20')['map'](Number);
        console['log'](order(_0x5f4d9e));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function order(_0x45acd9) {
    var _0x4a0274 = [];
    var _0x51513e;
    var _0x4f4db4 = _0x45acd9['shift']();
    while (_0x51513e = _0x45acd9['shift']()) {
        if (_0x51513e > _0x4f4db4) {
            _0x4f4db4 = _0x51513e;
            continue;
        }
        _0x4a0274['push'](_0x51513e);
    }
    var _0x28b3de = -Infinity;
    while (_0x51513e = _0x4a0274['shift']()) {
        if (_0x51513e > _0x28b3de) {
            _0x28b3de = _0x51513e;
            continue;
        }
        return 'NO';
    }
    return 'YES';
}