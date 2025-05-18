const main = _0x5dd52a => {
    _0x5dd52a = _0x5dd52a['trim']()['split']('\x0a');
    const [_0x117e16, _0x3c8921] = _0x5dd52a[0x0]['split']('\x20')['map'](Number);
    const [, ..._0x143abd] = _0x5dd52a;
    let _0x3d52b2 = 0x0;
    for (let _0x1183a9 of _0x143abd) {
        const [_0x541392, _0x4f27e5] = _0x1183a9['split']('\x20')['map'](Number);
        if (Math['sqrt'](_0x541392 ** 0x2 + _0x4f27e5 ** 0x2) <= _0x3c8921)
            _0x3d52b2++;
    }
    return console['log'](_0x3d52b2);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));