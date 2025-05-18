function main(_0x2daea2) {
    var _0x25c702 = _0x2daea2['split']('\x0a')[0x1]['split'](/\s/g);
    var _0xfacfe8 = [];
    for (i = 0x0; i < _0x2daea2['split']('\x0a')[0x0]; i++) {
        if (!_0xfacfe8[_0x25c702[i]]) {
            _0xfacfe8[_0x25c702[i]] = 0x0;
        }
        _0xfacfe8[_0x25c702[i]] += 0x1;
    }
    var _0x396675 = 0x1;
    for (j = 0x0; j < _0xfacfe8['length']; j++) {
        if (j > 0x1) {
            _0x396675 = _0x396675 * Math['pow'](_0xfacfe8[j - 0x1], _0xfacfe8[j]);
        }
        if (!_0xfacfe8[j]) {
            _0x396675 = 0x0;
            break;
        }
    }
    console['log'](_0x396675 % 0x3b800001);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));