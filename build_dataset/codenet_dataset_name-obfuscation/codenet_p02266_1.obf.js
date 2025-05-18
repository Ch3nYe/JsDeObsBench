const calc = _0xa4e68e => {
    const _0x262bc6 = [];
    const _0x27cbae = [];
    let _0x2c30a3 = 0x0;
    for (let _0x3bfadf = 0x0; _0x3bfadf < _0xa4e68e['length']; _0x3bfadf++) {
        const _0x1d9db7 = _0xa4e68e[_0x3bfadf];
        if (_0x1d9db7 === '\x5c') {
            _0x27cbae['push'](_0x3bfadf);
            continue;
        }
        if (_0x1d9db7 === '/' && _0x27cbae['length'] > 0x0) {
            const _0x495319 = _0x27cbae['pop']();
            _0x2c30a3 += _0x3bfadf - _0x495319;
            let _0x439c8c = _0x3bfadf - _0x495319;
            while (_0x262bc6['length'] > 0x0 && _0x262bc6[_0x262bc6['length'] - 0x1]['depth'] > _0x495319) {
                _0x439c8c += _0x262bc6[_0x262bc6['length'] - 0x1]['area'];
                _0x262bc6['pop']();
            }
            _0x262bc6['push']({
                'depth': _0x495319,
                'area': _0x439c8c
            });
        }
    }
    console['log'](_0x2c30a3);
    if (_0x262bc6['length'] === 0x0) {
        console['log'](0x0);
        return;
    }
    console['log'](_0x262bc6['length'] + '\x20' + _0x262bc6['map'](_0x419f0f => _0x419f0f['area'])['join']('\x20'));
};
let inputStr = '';
process['stdin']['on']('data', _0x12f8d6 => {
    inputStr += String['raw']`${ _0x12f8d6 }`;
});
process['stdin']['on']('end', () => {
    calc(inputStr);
});