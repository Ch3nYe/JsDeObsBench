function main(_0x1d33af) {
    var _0x1d33af = _0x1d33af;
    var _0x12d3ba = 0x0;
    for (var _0x541866 = 0x0; _0x541866 < 0x4; _0x541866++) {
        if (_0x1d33af[_0x541866] == '+') {
            _0x12d3ba += 0x1;
        } else {
            _0x12d3ba -= 0x1;
        }
    }
    console['log'](_0x12d3ba);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));