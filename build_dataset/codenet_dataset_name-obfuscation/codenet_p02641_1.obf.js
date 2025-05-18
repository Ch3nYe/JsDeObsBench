function Main(_0x2c7a5a) {
    _0x2c7a5a = _0x2c7a5a['split']('\x0a');
    let _0x1ff4bc = parseInt(_0x2c7a5a[0x0]['split']('\x20')[0x0]);
    let _0x3380ec = parseInt(_0x2c7a5a[0x0]['split']('\x20')[0x1]);
    if (_0x3380ec == 0x0) {
        console['log'](_0x1ff4bc);
    } else {
        let _0x321bd6 = _0x2c7a5a[0x1]['split']('\x20');
        for (let _0x25dea7 = 0x0; _0x25dea7 < _0x321bd6['length']; _0x25dea7++) {
            let _0x16f851 = parseInt(_0x321bd6[_0x25dea7]);
            _0x321bd6[_0x25dea7] = _0x1ff4bc - _0x16f851;
        }
        for (let _0x250f98 = 0x1; _0x250f98 <= 0x64; _0x250f98++) {
            const _0x4bf571 = _0x321bd6['indexOf'](_0x250f98);
            const _0x365d4c = _0x321bd6['indexOf'](-_0x250f98);
            if (_0x4bf571 == -0x1) {
                console['log'](_0x1ff4bc - _0x250f98);
                break;
            }
            if (_0x365d4c == -0x1) {
                console['log'](_0x1ff4bc + _0x250f98);
                break;
            }
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));