function Main(_0x512bce) {
    _0x512bce = _0x512bce['split']('\x0a');
    var _0x108191 = parseInt(_0x512bce[0x0]);
    var _0x2a015f = _0x512bce[0x1]['split']('\x20')['map'](_0x3bd10b => parseInt(_0x3bd10b));
    var _0x221926 = _0x512bce[0x2]['split']('\x20')['map'](_0x53ec1d => parseInt(_0x53ec1d));
    var _0x36c5c5 = new Array(_0x108191 + 0x1)['fill'](0x0);
    var _0x54ea1a = 0x0;
    for (var _0x108069 = 0x0; _0x108069 < _0x108191; _0x108069++) {
        var _0x5ccb86 = 0x0;
        tmp = _0x221926[_0x108069] + _0x36c5c5[_0x2a015f[_0x108069]];
        for (var _0x362f47 = _0x2a015f[_0x108069]; _0x362f47 < _0x108191 + 0x1; _0x362f47++) {
            if (tmp > _0x36c5c5[_0x362f47]) {
                _0x36c5c5[_0x362f47] = tmp;
            } else {
                break;
            }
        }
        _0x54ea1a = Math['max'](_0x54ea1a, _0x36c5c5[_0x2a015f[_0x108069]]);
    }
    console['log']('%s', _0x54ea1a);
    return _0x54ea1a;
}
function debug(_0x1878ef) {
    var _0x4f315b = document['getElementById']('input' + _0x1878ef)['value'];
    var _0x2299ce = Main(_0x4f315b);
    var _0x31578a = 'WA';
    if (_0x2299ce == document['getElementById']('output' + _0x1878ef)['value']['split']('\x0a')[0x0]) {
        _0x31578a = 'AC';
    }
    document['getElementById']('result' + _0x1878ef)['innerHTML'] = _0x31578a;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));