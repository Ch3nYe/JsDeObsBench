function pad(_0x4de205) {
    while (_0x4de205['length'] < 0x7) {
        _0x4de205 = '0' + _0x4de205;
    }
    return _0x4de205;
}
function divide(_0x48d957) {
    var _0x24535d = [], _0x17c2d1 = 0x0, _0x37ff10 = _0x48d957['length'], _0x10325d = 0x7;
    for (; (_0x24535d[_0x17c2d1] = _0x48d957['slice']((_0x17c2d1 + 0x1) * -_0x10325d, _0x37ff10 + _0x17c2d1 * -_0x10325d))['length'] > _0x10325d - 0x1; _0x17c2d1++);
    return _0x24535d;
}
function unite(_0x1b1940) {
    return _0x1b1940['concat']()['reverse']()['join']('')['replace'](/^0*/, '');
}
function largeSum(_0xd80ef2, _0x9bda35) {
    for (var _0x30f5cd = 0x0, _0xe3bc78 = [], _0x170857 = 0x0, _0xf1ed5 = Math['max'](_0xd80ef2['length'], _0x9bda35['length']); _0x170857 < _0xf1ed5 || _0x30f5cd != 0x0; _0x170857++) {
        var _0x442b0c = ((parseInt(_0xd80ef2[_0x170857], 0xa) || 0x0) + (parseInt(_0x9bda35[_0x170857], 0xa) || 0x0) + +_0x30f5cd)['toString'](0xa);
        _0xe3bc78[_0x170857] = _0x442b0c['length'] > 0x7 ? (_0x30f5cd = _0x442b0c['slice'](0x0, 0x1), _0x442b0c['slice'](0x1)) : (_0x30f5cd = 0x0, pad(_0x442b0c));
    }
    return _0xe3bc78;
}
process['stdin']['on']('data', function (_0x2a1bb1) {
    var _0x1c512c = (_0x2a1bb1 + '')['trim']()['split']('\x0a');
    for (var _0x516da1 = 0x0, _0x46ae5a = +_0x1c512c['shift']() * 0x2; _0x516da1 < _0x46ae5a; _0x516da1 += 0x2) {
        var _0x38979d = unite(largeSum(divide(_0x1c512c[_0x516da1]), divide(_0x1c512c[_0x516da1 + 0x1])));
        console['log'](_0x38979d == '' ? 0x0 : _0x38979d['length'] > 0x50 ? 'overflow' : _0x38979d);
    }
})['resume']();