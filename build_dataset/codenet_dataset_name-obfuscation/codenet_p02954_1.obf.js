function Main(_0x4615aa) {
    var _0x53785c = _0x4615aa['split']('');
    var _0x250bb6 = [];
    var _0x543dd0 = [];
    for (let _0x17dd1f = 0x0; _0x17dd1f < _0x53785c['length']; _0x17dd1f++) {
        _0x250bb6['push'](0x1);
        _0x543dd0['push'](0x0);
    }
    var _0x5a1d65 = _0x543dd0['slice']();
    for (let _0x4b72e3 = 0x0; _0x4b72e3 < _0x250bb6['length'] + _0x250bb6['length'] % 0x2; _0x4b72e3++) {
        for (let _0x5b7fa9 = 0x0; _0x5b7fa9 < _0x250bb6['length']; _0x5b7fa9++) {
            if (_0x53785c[_0x5b7fa9] == 'R') {
                _0x5a1d65[_0x5b7fa9 + 0x1] += _0x250bb6[_0x5b7fa9];
            } else if (_0x53785c[_0x5b7fa9] == 'L') {
                _0x5a1d65[_0x5b7fa9 - 0x1] += _0x250bb6[_0x5b7fa9];
            }
        }
        _0x250bb6 = _0x5a1d65['slice']();
        _0x5a1d65 = _0x543dd0['slice']();
    }
    console['log'](_0x250bb6['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));