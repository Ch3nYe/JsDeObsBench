function main(_0x9988c6) {
    const _0x53da82 = _0x9988c6;
    var _0x459b1e = 0x1;
    var _0x24821b = 0x0;
    var _0x45cb52 = 0x0;
    for (var _0x6e1306 = 0x1; _0x6e1306 <= _0x53da82; _0x6e1306++) {
        _0x24821b = 0x0;
        var _0x57e4f9 = _0x6e1306;
        while (!![]) {
            if (_0x57e4f9 % 0x2 === 0x0) {
                _0x24821b = _0x24821b + 0x1;
                _0x57e4f9 = _0x57e4f9 / 0x2;
            } else {
                break;
            }
        }
        if (_0x45cb52 < _0x24821b) {
            _0x45cb52 = _0x24821b;
            _0x459b1e = _0x6e1306;
        }
    }
    console['log'](_0x459b1e);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));