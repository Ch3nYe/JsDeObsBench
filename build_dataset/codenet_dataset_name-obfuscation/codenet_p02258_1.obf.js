function main(_0x2e8298) {
    _0x2e8298 = _0x2e8298['split']('\x0a');
    var _0x2da79e = _0x2e8298['map'](function (_0x4db6bf) {
        return parseInt(_0x4db6bf);
    });
    var _0x427287 = Number['MAX_VALUE'], _0x1166a1 = -Number['MAX_VALUE'];
    var _0x18e80b = _0x2da79e[0x0];
    for (var _0x4c21d4 = 0x1; _0x4c21d4 <= _0x18e80b - 0x1; _0x4c21d4++) {
        if (_0x427287 >= _0x2da79e[_0x4c21d4]) {
            _0x427287 = _0x2da79e[_0x4c21d4];
        }
        if (_0x2da79e[_0x4c21d4 + 0x1] - _0x427287 >= _0x1166a1) {
            _0x1166a1 = _0x2da79e[_0x4c21d4 + 0x1] - _0x427287;
        }
    }
    console['log'](_0x1166a1);
    return _0x1166a1;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));