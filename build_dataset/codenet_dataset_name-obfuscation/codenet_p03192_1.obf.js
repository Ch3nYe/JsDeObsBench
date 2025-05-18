function Main(_0x5832b7) {
    _0x5832b7 = _0x5832b7['split']('\x0a');
    S = _0x5832b7[0x0]['split']('');
    var _0xc7379 = 0x0;
    for (i = 0x0; i < S['length']; i++) {
        if (S[i] == '2') {
            _0xc7379++;
        }
    }
    console['log']('%s', _0xc7379);
}
function debug() {
    var _0x22844e = document['getElementById']('input')['value'];
    Main(_0x22844e);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));