const main = _0x5c0052 => {
    var _0x112ae2 = _0x5c0052[0x0]['split']('\x20');
    var _0x382e6a = Number(_0x112ae2);
    var _0x14ad7f = 0x64;
    var _0x524233 = 0x0;
    while (0x1) {
        var _0x41b2a7 = Math['floor'](_0x14ad7f * 0.01);
        _0x14ad7f = _0x14ad7f + _0x41b2a7;
        _0x524233++;
        if (_0x382e6a <= _0x14ad7f)
            break;
    }
    console['log'](_0x524233);
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));