function Main(_0x247512) {
    _0x247512 = _0x247512['split']('\x0a');
    var _0x5873ae = parseInt(_0x247512[0x0]['split']('\x20')[0x0]);
    var _0x2ba7fb = parseInt(_0x247512[0x0]['split']('\x20')[0x1]);
    var _0x4d7243 = new Array();
    var _0x4da21e = Math['pow'](0xa, 0x9) + 0x7;
    for (var _0x21d04f = 0x1; _0x21d04f <= _0x2ba7fb; _0x21d04f++) {
        var _0x338b4e = combination(_0x5873ae - _0x2ba7fb + 0x1, _0x21d04f) % _0x4da21e;
        var _0x2c8104 = combination(_0x2ba7fb - 0x1, _0x21d04f - 0x1) % _0x4da21e;
        var _0x400f52 = _0x338b4e * _0x2c8104 % _0x4da21e;
        _0x4d7243['push'](_0x400f52);
    }
    var _0x9ee762 = _0x4d7243['join']('\x0a');
    console['log']('%s', _0x9ee762);
    return _0x9ee762;
}
function permutation(_0x3fe7ab, _0x377110) {
    for (var _0x1e7b42 = 0x0, _0x1c4dd0 = 0x1; _0x1e7b42 < _0x377110; _0x1e7b42++) {
        _0x1c4dd0 *= _0x3fe7ab - _0x1e7b42;
    }
    return _0x1c4dd0;
}
function combination(_0x12211a, _0x124769) {
    return permutation(_0x12211a, _0x124769) / permutation(_0x124769, _0x124769);
}
function debug(_0x3580d4) {
    var _0x1674b2 = document['getElementById']('input' + _0x3580d4)['value'];
    var _0x7023e8 = Main(_0x1674b2);
    var _0x47afb6 = 'WA';
    if (_0x7023e8 == document['getElementById']('output' + _0x3580d4)['value']['split']('\x0a')[0x0]) {
        _0x47afb6 = 'AC';
    }
    document['getElementById']('result' + _0x3580d4)['innerHTML'] = _0x47afb6;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));