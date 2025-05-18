function Main(_0x1fc790) {
    let [_0x534a3c, ..._0x1dd467] = _0x1fc790['split']('\x0a');
    _0x1dd467 = _0x1dd467['map'](_0x143515 => parseFloat(_0x143515));
    let _0x16ab74 = [];
    for (let _0x2c9a61 of _0x1dd467) {
        let _0x337cc1 = _0x1dd467['map'](_0x2444ba => {
            if (_0x2444ba !== _0x2c9a61 && _0x2444ba * _0x2c9a61 % 0x1 === 0x0 && _0x2c9a61 < _0x2444ba) {
                return [
                    _0x2c9a61,
                    _0x2444ba
                ];
            }
        });
        _0x337cc1 = _0x337cc1['filter'](_0x4bee4a => _0x4bee4a !== undefined);
        if (_0x337cc1['length']) {
            _0x16ab74 = [
                ..._0x16ab74,
                ..._0x337cc1
            ];
        }
    }
    console['log'](_0x16ab74['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));