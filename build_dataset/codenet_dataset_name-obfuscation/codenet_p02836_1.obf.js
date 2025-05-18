function Main(_0x40baf4) {
    _0x40baf4 = _0x40baf4['split']('\x0a');
    T = _0x40baf4[0x0];
    var _0x14bf3c = T['length'];
    var _0xbb6526 = _0x14bf3c % 0x2;
    q = Math['floor'](_0x14bf3c / 0x2);
    cnt = 0x0;
    i = 0x0;
    for (i = 0x0; i < q; i++) {
        if (T['substr'](i, 0x1) == T['substr'](_0x14bf3c - 0x1 - i, 0x1)) {
            cnt = cnt + 0x0;
        } else {
            cnt++;
        }
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));