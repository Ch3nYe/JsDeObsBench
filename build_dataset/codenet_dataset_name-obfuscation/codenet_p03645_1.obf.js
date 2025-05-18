function Main(_0x52c907) {
    _0x52c907 = _0x52c907['split']('\x0a');
    var _0x22b854 = parseInt(_0x52c907[0x0]['split']('\x20')[0x0]);
    var _0x592081 = parseInt(_0x52c907[0x0]['split']('\x20')[0x1]);
    x = new Array();
    var _0x4f05b4 = 'IMPOSSIBLE';
    for (i = 0x0; i < _0x592081; i++) {
        tmp = _0x52c907[i + 0x1]['split']('\x20');
        if (tmp[0x0] == 0x1) {
            if (x['indexOf'](tmp[0x1]) != -0x1) {
                _0x4f05b4 = 'POSSIBLE';
                break;
            } else {
                x['push'](tmp[0x1]);
            }
        }
        if (tmp[0x1] == _0x22b854) {
            if (x['indexOf'](tmp[0x0]) != -0x1) {
                _0x4f05b4 = 'POSSIBLE';
                break;
            } else {
                x['push'](tmp[0x0]);
            }
        }
    }
    console['log']('%s', _0x4f05b4);
}
function debug() {
    var _0x492f94 = document['getElementById']('input')['value'];
    Main(_0x492f94);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));