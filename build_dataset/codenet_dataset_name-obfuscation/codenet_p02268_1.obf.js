var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
const binarySearch = (_0x1d9434, _0x5d5528, _0xf5f116) => {
    let _0x393c0e;
    let _0x3fadb6 = 0x0;
    let _0x3d62fa = _0xf5f116;
    while (_0x3fadb6 < _0x3d62fa) {
        _0x393c0e = Math['floor']((_0x3fadb6 + _0x3d62fa) / 0x2);
        if (_0x1d9434 < _0x5d5528[_0x393c0e])
            _0x3d62fa = _0x393c0e;
        else if (_0x1d9434 > _0x5d5528[_0x393c0e])
            _0x3fadb6 = _0x393c0e + 0x1;
        else
            return 0x1;
    }
    return 0x0;
};
(function () {
    const _0x57208f = Number(Arr[0x0]);
    const _0x4eab44 = Arr[0x1]['split']('\x20')['map'](Number);
    const _0x324148 = Arr[0x3]['split']('\x20')['map'](Number);
    console['log'](_0x324148['map'](_0x195cd6 => binarySearch(_0x195cd6, _0x4eab44, _0x57208f))['reduce']((_0x500e80, _0x206666) => _0x500e80 + _0x206666, 0x0));
}());