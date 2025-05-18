function Main(_0x298dbf) {
    _0x298dbf = _0x298dbf['split']('\x0a');
    var _0x1ac778 = parseInt(_0x298dbf[0x0]);
    var _0x55ac7d = 0x0;
    var _0x1326de = new Set();
    var _0x295d48 = _0x1ac778;
    for (var _0x348985 = 0x2; _0x348985 < Math['sqrt'](_0x1ac778); _0x348985++) {
        var _0x305d0a = _0x348985;
        for (var _0x51b71c = 0x1; _0x305d0a < _0x1ac778; _0x51b71c++) {
            if (_0x295d48 % Math['pow'](_0x348985, _0x51b71c) == 0x0) {
                _0x55ac7d++;
                _0x295d48 = _0x295d48 / Math['pow'](_0x348985, _0x51b71c);
            } else {
                break;
            }
            _0x305d0a = Math['pow'](_0x348985, _0x51b71c + 0x1);
        }
    }
    if (_0x55ac7d == 0x0 && _0x1ac778 != 0x1) {
        _0x55ac7d = 0x1;
    }
    console['log']('%s', _0x55ac7d);
    return _0x55ac7d;
}
function debug(_0x3dfb20) {
    var _0x35eb7f = document['getElementById']('input' + _0x3dfb20)['value'];
    var _0x1828df = Main(_0x35eb7f);
    var _0x636250 = 'WA';
    if (_0x1828df == document['getElementById']('output' + _0x3dfb20)['value']['split']('\x0a')[0x0]) {
        _0x636250 = 'AC';
    }
    document['getElementById']('result' + _0x3dfb20)['innerHTML'] = _0x636250;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));