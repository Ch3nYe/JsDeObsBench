function Main(_0x430739) {
    _0x430739 = _0x430739['split']('\x0a');
    A = parseInt(_0x430739[0x0]['split']('\x20')[0x0]);
    B = parseInt(_0x430739[0x0]['split']('\x20')[0x1]);
    C = parseInt(_0x430739[0x0]['split']('\x20')[0x2]);
    X = parseInt(_0x430739[0x0]['split']('\x20')[0x3]);
    Y = parseInt(_0x430739[0x0]['split']('\x20')[0x4]);
    var _0x5b2eef = 0x0;
    if (C <= (A + B) / 0x2 && C >= Math['min'](A, B)) {
        if (X <= Y) {
            _0x5b2eef = C * X * 0x2 + B * (Y - X);
        } else {
            _0x5b2eef = C * Y * 0x2 + A * (X - Y);
        }
    } else if (C <= (A + B) / 0x2 && C < Math['min'](A, B)) {
        _0x5b2eef = C * Math['max'](X, Y) * 0x2;
    } else {
        _0x5b2eef = X * A + Y * B;
    }
    console['log']('%s', _0x5b2eef);
}
function debug() {
    var _0x1eba92 = document['getElementById']('input')['value'];
    Main(_0x1eba92);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));