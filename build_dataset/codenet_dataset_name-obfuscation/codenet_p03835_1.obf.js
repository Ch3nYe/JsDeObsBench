function Main(_0x372947) {
    let _0x252aa6 = _0x372947['split']('\x20');
    let _0x47b360 = Number(_0x252aa6[0x0]);
    let _0x37b01a = Number(_0x252aa6[0x1]);
    let _0x38ef34 = 0x0;
    for (let _0x3a990b = 0x0; _0x3a990b <= _0x47b360; _0x3a990b++) {
        for (let _0x16dbc3 = 0x0; _0x16dbc3 <= _0x47b360; _0x16dbc3++) {
            for (let _0x474f6f = 0x0; _0x474f6f <= _0x47b360; _0x474f6f++) {
                if (_0x3a990b + _0x16dbc3 + _0x474f6f === _0x37b01a) {
                    _0x38ef34++;
                }
            }
        }
    }
    console['log'](_0x38ef34);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));