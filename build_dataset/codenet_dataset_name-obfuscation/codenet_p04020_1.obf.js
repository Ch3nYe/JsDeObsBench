function myout(_0x2da8ae) {
    console['log'](_0x2da8ae);
}
function Main(_0x49db64) {
    _0x49db64 = _0x49db64['trim']()['split']('\x0a')['map'](_0x184b7e => Number(_0x184b7e));
    var _0x3f3fbf = _0x49db64[0x0];
    var _0x53d31a = 0x0;
    _0x49db64['shift']();
    for (var _0x1ee63f = 0x0; _0x1ee63f < _0x3f3fbf; _0x1ee63f++) {
        if (_0x1ee63f == _0x3f3fbf - 0x1) {
            _0x53d31a += Math['floor'](_0x49db64[_0x1ee63f] / 0x2);
        } else {
            if (_0x49db64[_0x1ee63f] != 0x0) {
                if (_0x49db64[_0x1ee63f + 0x1] != 0x0) {
                    var _0x3f4bd2 = Math['min'](_0x49db64[_0x1ee63f], _0x49db64[_0x1ee63f + 0x1]);
                    _0x53d31a += _0x3f4bd2;
                    _0x49db64[_0x1ee63f] -= _0x3f4bd2;
                    _0x49db64[_0x1ee63f + 0x1] -= _0x3f4bd2;
                    if (_0x49db64[_0x1ee63f] >= 0x2) {
                        _0x53d31a += Math['floor'](_0x49db64[_0x1ee63f] / 0x2);
                    }
                } else {
                    _0x53d31a += Math['floor'](_0x49db64[_0x1ee63f] / 0x2);
                }
            }
        }
    }
    myout(_0x53d31a);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());