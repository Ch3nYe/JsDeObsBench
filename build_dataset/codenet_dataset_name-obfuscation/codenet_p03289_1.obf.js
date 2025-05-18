function main(_0x361f61) {
    _0x361f61 = _0x361f61['trim']();
    var _0xf4d762 = _0x361f61['split']('')['map'](_0x2a6448 => _0x2a6448);
    var _0x2ab075 = 0x0;
    if (_0xf4d762[0x0] == 'A') {
        _0x2ab075++;
    }
    var _0x92b518 = 0x0;
    var _0xb29845 = 0x0;
    for (var _0x4614f1 = 0x2; _0x4614f1 < _0xf4d762['length'] - 0x1; _0x4614f1++) {
        if (_0xf4d762[_0x4614f1] == 'C') {
            _0x92b518++;
            _0xb29845 = _0x4614f1;
        }
    }
    if (_0x92b518 == 0x1) {
        _0x2ab075++;
    }
    if (_0x2ab075 == 0x2) {
        _0xf4d762['splice'](0x0, 0x1);
        _0xf4d762['splice'](_0xb29845 - 0x1, 0x1);
        if (/A-Z/['test'](_0xf4d762) == ![]) {
            _0x2ab075++;
        }
        if (_0x2ab075 == 0x3) {
            console['log']('AC');
        } else {
            console['log']('WA');
        }
    } else {
        console['log']('WA');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));