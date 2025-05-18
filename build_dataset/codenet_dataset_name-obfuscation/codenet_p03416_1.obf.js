function Main(_0x51819c) {
    var _0x51819c = _0x51819c['split']('\x20');
    var _0x2761cf = _0x51819c[0x0];
    var _0xa4fc0f = _0x51819c[0x1];
    var _0x355950 = 0x0;
    function _0xcafd37() {
        var _0x3e44ba = _0x2761cf['toString']();
        if (_0x3e44ba[0x0] === _0x3e44ba[0x4] && _0x3e44ba[0x1] === _0x3e44ba[0x3]) {
            return !![];
        }
    }
    while (_0x2761cf <= _0xa4fc0f) {
        if (_0xcafd37()) {
            _0x355950++;
        }
        _0x2761cf++;
    }
    console['log'](_0x355950);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));