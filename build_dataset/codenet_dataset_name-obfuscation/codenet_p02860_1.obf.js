function Main(_0x21487e) {
    var _0x1921d7 = _0x21487e['split']('\x0a');
    var _0x4a8643 = parseInt(_0x1921d7[0x0]) / 0x2;
    var _0x31f777 = [];
    for (let _0x40218e = 0x0; _0x40218e < _0x1921d7[0x1]['length']; _0x40218e += _0x4a8643) {
        _0x31f777['push'](_0x1921d7[0x1]['slice'](_0x40218e, _0x40218e + _0x4a8643));
    }
    if (_0x31f777[0x0] == _0x31f777[0x1]) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));