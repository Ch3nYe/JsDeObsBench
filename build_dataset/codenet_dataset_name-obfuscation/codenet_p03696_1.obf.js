function myout(_0x5a5bc1) {
    console['log'](_0x5a5bc1);
}
function Main(_0x379669) {
    _0x379669 = _0x379669['trim']()['split']('\x0a');
    var _0x2d4777 = JSON['parse'](JSON['stringify'](_0x379669[0x1]));
    var _0x40aa50 = 0x0;
    var _0x1be3c8 = 0x0;
    while (_0x2d4777['indexOf']('()') != -0x1) {
        _0x2d4777 = _0x2d4777['replace']('()', '');
    }
    for (var _0x377103 = 0x0; _0x377103 < _0x2d4777['length']; _0x377103++) {
        var _0x4129cf = _0x2d4777['slice'](_0x377103, _0x377103 + 0x1);
        if (_0x4129cf == '(') {
            _0x40aa50++;
        } else if (_0x4129cf == ')') {
            _0x1be3c8++;
        }
    }
    for (var _0x377103 = 0x0; _0x377103 < _0x1be3c8; _0x377103++) {
        _0x379669[0x1] = '(' + _0x379669[0x1];
    }
    for (var _0x377103 = 0x0; _0x377103 < _0x40aa50; _0x377103++) {
        _0x379669[0x1] += ')';
    }
    myout(_0x379669[0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());