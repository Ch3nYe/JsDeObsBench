debug = ![];
function log(..._0x174fbf) {
    if (debug) {
        console['log'](..._0x174fbf);
    }
}
function Main(_0x2ca6cd) {
    lines = _0x2ca6cd['split']('\x0a');
    f = lines[0x0]['split']('\x20');
    N = f[0x0];
    A = f[0x1] * 0x1;
    B = f[0x2] * 0x1;
    C = f[0x3] * 0x1;
    D = f[0x4] * 0x1;
    s = lines[0x1];
    log(N, A, B, C, D, s);
    bool = !![];
    if (C > D) {
        end = D;
        if (C - D <= 0x2) {
            end = C;
        }
        s2 = s;
        if (s[D - 0x2] == '#') {
            log(s2, s2[D - 0x1]);
            s2[D - 0x1] = '#';
            s2 = s2['slice'](0x0, D - 0x1) + '#' + s2['slice'](D);
        }
        log(s2);
        str = s2['slice'](B - 0x1, end);
        log(str, bool);
        bool = bool && /\.\.\./['test'](str);
        log(str, bool);
    }
    str = s['slice'](A - 0x1, C);
    bool = bool && !/##/['test'](str);
    log(str, bool);
    str = s['slice'](B - 0x1, D);
    bool = bool && !/##/['test'](str);
    log(str, bool);
    ans = bool ? 'Yes' : 'No';
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));