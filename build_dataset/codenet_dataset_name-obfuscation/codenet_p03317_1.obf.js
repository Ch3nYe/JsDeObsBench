function Main(_0x1adf56) {
    a = _0x1adf56['split']('\x0a');
    b = a[0x0]['split']('\x20')['map'](Number);
    c = a[0x1]['split']('\x20')['map'](Number);
    N = b[0x0], K = b[0x1], r = 0x0;
    while (c['length'] > 0x1) {
        r++;
        d = [];
        for (i = 0x0; i < K; i++) {
            d['push'](c[i]);
        }
        for (i = 0x0; i < K; i++) {
            if (d['sort']()[0x0] !== c[i]) {
                c[i] = '';
            }
        }
        c = c['join']('')['split']('')['map'](Number);
    }
    console['log'](r);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));