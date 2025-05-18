function Main(_0x24e754) {
    var _0x2f6deb = 0x0;
    var _0x4d8aba = [];
    var _0x2f6deb = _0x24e754['length'];
    var _0x5c0dc2 = '';
    for (var _0x1bf396 = _0x24e754['length'] - 0x1; _0x1bf396 >= 0x0; _0x1bf396--) {
        var _0x4f70e2 = _0x24e754['slice'](_0x1bf396, _0x1bf396 + 0x1);
        if (_0x4d8aba['length'] == 0x0) {
            _0x4d8aba['push'](_0x4f70e2);
            continue;
        } else {
            var _0x574a04 = _0x4d8aba[_0x4d8aba['length'] - 0x1];
            if (_0x574a04 == _0x4f70e2) {
                _0x4d8aba['push'](_0x24e754['slice'](_0x1bf396 - 0x1, _0x1bf396) + _0x4f70e2);
                _0x1bf396--;
            } else {
                _0x4d8aba['push'](_0x4f70e2);
            }
        }
    }
    _0x2f6deb = _0x4d8aba['length'];
    var _0x1919a1 = _0x24e754['slice'](0x0, 0x1);
    var _0x17c3a3 = _0x24e754['slice'](0x1, 0x2);
    if (_0x1919a1 == _0x17c3a3) {
        _0x2f6deb--;
    }
    console['log'](_0x2f6deb['toString']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));