function main(_0xc578e2) {
    var _0x553c46 = _0xc578e2['split']('\x0a')['map'](_0x4a3be1 => parseInt(_0x4a3be1, 0xa));
    while (_0x553c46[0x0] > 0x1f4) {
        _0x553c46[0x0] -= 0x1f4;
    }
    _0x553c46[0x0] <= _0x553c46[0x1] ? console['log']('Yes') : console['log']('No');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));