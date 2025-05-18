function Main(_0x1f064d) {
    TT = 0x0;
    AA = 0x0;
    _0x1f064d = _0x1f064d['split']('\x0a');
    N = _0x1f064d[0x0];
    for (i = 0x1; i <= N; i++) {
        tmp = _0x1f064d[i]['split']('\x20');
        T = tmp[0x0] * 0x1;
        A = tmp[0x1] * 0x1;
        if (TT <= T && AA <= A) {
            TT = T;
            AA = A;
        } else {
            ratioT = TT / T;
            ratioA = AA / A;
            ratio = Math['ceil'](Math['max'](ratioT, ratioA));
            TT = T * ratio;
            AA = A * ratio;
        }
    }
    console['log'](TT + AA);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));