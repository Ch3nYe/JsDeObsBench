function a0_0x2ec6(dQvyEu, key) {
    var stringArray = a0_0x4e87();
    a0_0x2ec6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ec6(dQvyEu, key);
}
function a0_0x4e87() {
    var _0x153c7a = [
        'MlDib',
        'split',
        'Zvgsi',
        'slice',
        'test',
        'Yes',
        '/dev/stdin'
    ];
    a0_0x4e87 = function () {
        return _0x153c7a;
    };
    return a0_0x4e87();
}
var a0_0x3dd4b0 = a0_0x2ec6;
debug = ![];
function log(...args) {
    var _0x657386 = a0_0x2ec6;
    if (debug) {
        if (_0x657386(0x0) === _0x657386(0x0)) {
            console['log'](...args);
        } else {
            if (debug) {
                console['log'](...args);
            }
        }
    }
}
function Main(input) {
    var _0x101e5e = a0_0x2ec6;
    lines = input[_0x101e5e(0x1)]('\x0a');
    f = lines[0x0][_0x101e5e(0x1)]('\x20');
    N = f[0x0];
    A = f[0x1] * 0x1;
    B = f[0x2] * 0x1;
    C = f[0x3] * 0x1;
    D = f[0x4] * 0x1;
    s = lines[0x1];
    log(N, A, B, C, D, s);
    bool = !![];
    if (C > D) {
        if (_0x101e5e(0x2) !== 'Zvgsi') {
            end = D;
            if (C - D <= 0x2) {
                end = C;
            }
            s2 = s;
            if (s[D - 0x2] == '#') {
                log(s2, s2[D - 0x1]);
                s2[D - 0x1] = '#';
                s2 = s2['slice'](0x0, D - 0x1) + '#' + s2[_0x101e5e(0x3)](D);
            }
            log(s2);
            str = s2['slice'](B - 0x1, end);
            log(str, bool);
            bool = bool && /\.\.\./[_0x101e5e(0x4)](str);
            log(str, bool);
        } else {
            end = D;
            if (C - D <= 0x2) {
                end = C;
            }
            s2 = s;
            if (s[D - 0x2] == '#') {
                log(s2, s2[D - 0x1]);
                s2[D - 0x1] = '#';
                s2 = s2[_0x101e5e(0x3)](0x0, D - 0x1) + '#' + s2[_0x101e5e(0x3)](D);
            }
            log(s2);
            str = s2[_0x101e5e(0x3)](B - 0x1, end);
            log(str, bool);
            bool = bool && /\.\.\./[_0x101e5e(0x4)](str);
            log(str, bool);
        }
    }
    str = s[_0x101e5e(0x3)](A - 0x1, C);
    bool = bool && !/##/[_0x101e5e(0x4)](str);
    log(str, bool);
    str = s[_0x101e5e(0x3)](B - 0x1, D);
    bool = bool && !/##/[_0x101e5e(0x4)](str);
    log(str, bool);
    ans = bool ? _0x101e5e(0x5) : 'No';
    console['log'](ans);
}
Main(require('fs')['readFileSync'](a0_0x3dd4b0(0x6), 'utf8'));