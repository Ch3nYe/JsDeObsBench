function main(_0x5ecf06) {
    const _0x15ebe6 = _0x5ecf06['split']('\x0a');
    const _0x13f076 = parseInt(_0x15ebe6[0x0], 0xa);
    const _0x417825 = _0x15ebe6[0x1]['split']('\x20')['map'](_0x392421 => parseInt(_0x392421));
    dp = [];
    for (var _0x449b1f = 0x0; _0x449b1f < _0x13f076; _0x449b1f++) {
        var _0x516747 = [];
        if (_0x449b1f == 0x0) {
            _0x516747 = [
                _0x417825[_0x449b1f],
                _0x417825[_0x449b1f] * -0x1
            ];
        } else {
            var _0x5965c3 = Math['max'](dp[_0x449b1f - 0x1][0x0] + _0x417825[_0x449b1f], dp[_0x449b1f - 0x1][0x1] - _0x417825[_0x449b1f]);
            var _0x502738 = Math['max'](dp[_0x449b1f - 0x1][0x0] - _0x417825[_0x449b1f], dp[_0x449b1f - 0x1][0x1] + _0x417825[_0x449b1f]);
            _0x516747 = [
                _0x5965c3,
                _0x502738
            ];
        }
        dp['push'](_0x516747);
    }
    console['log'](dp[_0x13f076 - 0x1][0x0]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));