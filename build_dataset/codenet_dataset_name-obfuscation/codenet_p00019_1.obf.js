function main(_0x3b235c) {
    var _0x149c4e = 0x1;
    var _0x965f05 = toInt(_0x3b235c);
    for (var _0x188f9c = 0x1; _0x188f9c <= _0x3b235c; _0x188f9c++) {
        _0x149c4e = _0x149c4e * _0x188f9c;
    }
    console['log'](_0x149c4e);
}
function toInt(_0x56a3f1) {
    return parseInt(_0x56a3f1, 0xa);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));