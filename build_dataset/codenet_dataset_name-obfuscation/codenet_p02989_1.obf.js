const main = _0x1e116f => {
    var _0xb82921 = _0x1e116f[0x1]['split']('\x20')['map'](_0x1335c7 => parseInt(_0x1335c7, 0xa))['sort']((_0x15de97, _0x5cb887) => _0x15de97 > _0x5cb887 ? 0x1 : -0x1);
    console['log'](_0xb82921[_0xb82921['length'] / 0x2] - _0xb82921[_0xb82921['length'] / 0x2 - 0x1]);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));