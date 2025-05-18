const main = _0x21e5be => {
    const _0x18af52 = 0xa ** 0x9 + 0x7;
    const _0x217f4 = Number(_0x21e5be['trim']());
    const _0x57f9a6 = [
        0x1,
        ...new Array(_0x217f4)['fill'](0x0)
    ];
    for (let _0x32ab7b = 0x3; _0x32ab7b < _0x57f9a6['length']; _0x32ab7b++) {
        let _0x2775da = 0x0;
        for (let _0x2549ed = _0x32ab7b - 0x3; _0x2549ed >= 0x0; _0x2549ed--) {
            _0x2775da = (_0x2775da + _0x57f9a6[_0x2549ed]) % _0x18af52;
        }
        _0x57f9a6[_0x32ab7b] = _0x2775da;
    }
    return console['log']((_0x57f9a6[_0x217f4] % _0x18af52 + _0x18af52) % _0x18af52);
};
process['env']['MYTEST'] ? process['env']['MYTEST'] === 'test' ? test() : main(require('fs')['readFileSync']('dev/stdin', 'utf8')) : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));