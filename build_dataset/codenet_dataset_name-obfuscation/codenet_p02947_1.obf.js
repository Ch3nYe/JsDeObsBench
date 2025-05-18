function main(_0xcc883e) {
    const _0x49ddcf = _0xcc883e['split']('\x0a')['slice'](0x1)['map'](_0x20124f => Array['from'](_0x20124f)['sort']()['join'](''));
    let _0x3894fc = 0x0;
    const _0xad1158 = new Map();
    for (let _0x216cde = 0x0; _0x216cde < _0x49ddcf['length']; _0x216cde++) {
        if (!_0xad1158['has'](_0x49ddcf[_0x216cde])) {
            _0xad1158['set'](_0x49ddcf[_0x216cde], 0x1);
            continue;
        }
        _0x3894fc += _0xad1158['get'](_0x49ddcf[_0x216cde]);
        _0xad1158['set'](_0x49ddcf[_0x216cde], _0xad1158['get'](_0x49ddcf[_0x216cde]) + 0x1);
    }
    console['log'](_0x3894fc);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));