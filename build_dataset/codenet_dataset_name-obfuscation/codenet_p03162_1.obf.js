function main(_0x274e0f) {
    let _0x32b588 = _0x274e0f['split']('\x0a');
    let _0x21d7f1 = [];
    for (let _0x2ebdce = 0x1; _0x2ebdce < _0x32b588['length']; _0x2ebdce++) {
        let _0x1f7adf = _0x32b588[_0x2ebdce]['split']('\x20')['map'](_0x263738 => parseInt(_0x263738, 0xa));
        _0x21d7f1['push'](_0x1f7adf);
    }
    let _0x3eea0a = [
        0x0,
        0x0,
        0x0
    ];
    for (let _0x2a5578 = 0x0; _0x2a5578 < _0x21d7f1['length']; _0x2a5578++) {
        let _0x497e3f = _0x21d7f1[_0x2a5578];
        let _0x2da44f = [
            0x0,
            0x0,
            0x0
        ];
        for (let _0x5c721e = 0x0; _0x5c721e < 0x3; _0x5c721e++) {
            for (let _0x13d6a3 = 0x0; _0x13d6a3 < 0x3; _0x13d6a3++) {
                if (_0x5c721e !== _0x13d6a3) {
                    _0x2da44f[_0x13d6a3] = Math['max'](_0x2da44f[_0x13d6a3], _0x3eea0a[_0x5c721e] + _0x497e3f[_0x13d6a3]);
                }
            }
        }
        _0x3eea0a = _0x2da44f;
    }
    console['log'](Math['max'](_0x3eea0a[0x0], _0x3eea0a[0x1], _0x3eea0a[0x2]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));