function main(_0x3add26) {
    _0x3add26 = _0x3add26['split']('\x0a')[0x0]['split']('\x20');
    var _0x2ebe2f = Number(_0x3add26[0x0]);
    var _0x507c89 = Number(_0x3add26[0x1]);
    var _0x106a3c = 0x0;
    for (var _0x35229e = 0x1; _0x35229e <= _0x2ebe2f; _0x35229e += 0x2) {
        _0x106a3c++;
    }
    if (_0x507c89 > _0x106a3c) {
        console['log']('NO');
    } else {
        console['log']('YES');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));