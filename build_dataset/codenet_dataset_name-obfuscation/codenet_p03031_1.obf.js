function Main(_0x1d0c1d) {
    lines = _0x1d0c1d['split']('\x0a');
    lines = _0x1d0c1d['split']('\x0a');
    n = lines[0x0]['split']('\x20')[0x0] * 0x1;
    m = lines[0x0]['split']('\x20')[0x1] * 0x1;
    ps = lines[lines['length'] - 0x1]['split']('\x20');
    lines = lines['slice'](0x1, -0x1)['map'](function (_0x4fbdae) {
        return _0x4fbdae['split']('\x20')['slice'](0x1);
    });
    ans = 0x0;
    for (i = 0x0; i < 0x1 << n; i++) {
        s = ('0000000000' + i['toString'](0x2))['slice'](-0x1 * n);
        flg = !![];
        for (j = 0x0; j < lines['length']; j++) {
            on = 0x0;
            if (!flg)
                break;
            for (k = 0x0; k < lines[j]['length']; k++) {
                on += s[n - lines[j][k]] * 0x1;
            }
            if (on % 0x2 != ps[j]) {
                flg = ![];
            }
        }
        if (flg) {
            ans++;
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));