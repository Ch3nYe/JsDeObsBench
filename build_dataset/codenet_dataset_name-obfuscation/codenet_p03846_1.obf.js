function Main(_0x501b9a) {
    _0x501b9a = _0x501b9a['split']('\x0a');
    tmp = _0x501b9a[0x1]['split']('\x20');
    var _0x1e88c7 = Math['pow'](parseInt(tmp['length'] / 0x2), 0x2);
    var _0xa418b1 = 0x0;
    for (j = tmp['length'] - 0x1; j >= 0x0; j--) {
        for (i = 0x0; i < tmp['length']; i++) {
            if (tmp[i] == j) {
                _0xa418b1++;
            }
        }
        if (_0xa418b1 != 0x2 && j > 0x0) {
            _0x1e88c7 = 0x0;
            break;
        }
        if (_0xa418b1 != 0x1 && j == 0x0) {
            _0x1e88c7 = 0x0;
            break;
        }
        _0xa418b1 = 0x0;
        j--;
    }
    _0x1e88c7 = _0x1e88c7 % (Math['pow'](0xa, 0x9) + 0x7);
    console['log']('%s', _0x1e88c7);
}
function debug() {
    var _0x226635 = document['getElementById']('input')['value'];
    Main(_0x226635);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));