const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(_0x8502b3 => {
    const _0x570c98 = _0x8502b3['split']('\x0a');
    const [_0x1b7aad, _0x2a11d4, _0x3d6cb8] = _0x570c98[0x0]['split']('\x20')['map'](Number);
    const _0x541809 = [];
    for (let _0x352c73 = 0x0; _0x352c73 < _0x3d6cb8; _0x352c73++) {
        _0x541809[_0x352c73] = _0x570c98[_0x352c73 + 0x1]['split']('\x20')['map'](Number);
    }
    const _0x121fef = [];
    const _0x175499 = [];
    let _0x5dd2be = 0x0;
    let _0x41f367 = 0x0;
    while (_0x41f367 !== undefined) {
        if (_0x5dd2be === _0x1b7aad) {
            _0x121fef['push']([..._0x175499]);
            _0x175499['pop']();
            _0x41f367++;
            _0x5dd2be--;
        } else if (_0x41f367 >= _0x2a11d4) {
            _0x41f367 = _0x175499['pop']();
            _0x5dd2be--;
        } else {
            _0x175499['push'](_0x41f367 + 0x1);
            _0x5dd2be++;
        }
    }
    let _0x1d80bc = 0x0;
    _0x121fef['forEach'](_0x446d6e => {
        let _0x37c858 = 0x0;
        _0x541809['forEach'](_0x2b840b => {
            if (_0x446d6e[_0x2b840b[0x1] - 0x1] - _0x446d6e[_0x2b840b[0x0] - 0x1] === _0x2b840b[0x2]) {
                _0x37c858 += _0x2b840b[0x3];
            }
        });
        _0x1d80bc = Math['max'](_0x1d80bc, _0x37c858);
    });
    console['log'](_0x1d80bc);
})(input);