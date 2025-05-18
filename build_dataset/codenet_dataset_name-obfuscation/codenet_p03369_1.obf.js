function main(_0x2ce93d) {
    var _0x3ce264 = 0x0;
    for (var _0x3172bf = 0x0; _0x3172bf < 0x3; _0x3172bf++) {
        if (_0x2ce93d[_0x3172bf] == 'o') {
            _0x3ce264++;
        }
    }
    console['log'](0x2bc + _0x3ce264 * 0x64);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));