new Promise(function (_0x119ef2, _0x43e7c8) {
    let _0x533197 = '';
    process['stdin']['on']('data', _0x591f3a => {
        _0x533197 += _0x591f3a;
    })['on']('end', () => {
        _0x119ef2([
            _0x533197,
            process['stdout']
        ]);
    });
})['then'](function ([_0x2fac86, _0x2e215f]) {
    for (const _0x2bc473 of _0x2fac86['split'](/[ \n]/)['map'](_0x1884e4 => parseInt(_0x1884e4))) {
        if (_0x2bc473 === 0x0) {
            break;
        }
        let _0x3901e3 = '\x0a';
        for (let _0x1afd8 = 0x1; _0x1afd8 * (_0x1afd8 - 0x1) < 0x2 * _0x2bc473; ++_0x1afd8) {
            const _0x3388e0 = 0x2 * _0x2bc473 - _0x1afd8 * (_0x1afd8 - 0x1);
            if (_0x3388e0 % (0x2 * _0x1afd8) === 0x0) {
                _0x3901e3 = _0x3388e0 / (0x2 * _0x1afd8) + '\x20' + _0x1afd8 + '\x0a';
            }
        }
        _0x2e215f['write'](_0x3901e3);
    }
});