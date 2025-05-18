var a0_0x58908c = a0_0x3177;
(function (stringArrayFunction, comparisonValue) {
    var _0x2fc02a = a0_0x3177;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2fc02a(0x19d)) / 0x1 + parseInt(_0x2fc02a(0x19e)) / 0x2 + parseInt(_0x2fc02a(0x1a8)) / 0x3 * (-parseInt(_0x2fc02a(0x19c)) / 0x4) + -parseInt(_0x2fc02a(0x1a6)) / 0x5 * (-parseInt(_0x2fc02a(0x1a7)) / 0x6) + parseInt(_0x2fc02a(0x1a3)) / 0x7 + parseInt(_0x2fc02a(0x19b)) / 0x8 * (parseInt(_0x2fc02a(0x1a2)) / 0x9) + -parseInt(_0x2fc02a(0x199)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x220a, 0xd5096));
debug = ![];
function a0_0x220a() {
    var _0x4f8f96 = [
        '1384sJHgzw',
        '14444gEnzhT',
        '586827lMRMtX',
        '1093924zdfmZH',
        'split',
        'slice',
        'log',
        '16974IsSpCh',
        '10954587ySEfPM',
        'Yes',
        'test',
        '20oSqAjH',
        '1856922YYdhdv',
        '1374AyDAnx',
        '17365200cJorWM',
        'readFileSync'
    ];
    a0_0x220a = function () {
        return _0x4f8f96;
    };
    return a0_0x220a();
}
function log(...args) {
    var _0x1eeda2 = a0_0x3177;
    if (debug) {
        console[_0x1eeda2(0x1a1)](...args);
    }
}
function Main(input) {
    var _0x10bf1a = a0_0x3177;
    lines = input['split']('\x0a');
    f = lines[0x0][_0x10bf1a(0x19f)]('\x20');
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
            s2 = s2[_0x10bf1a(0x1a0)](0x0, D - 0x1) + '#' + s2[_0x10bf1a(0x1a0)](D);
        }
        log(s2);
        str = s2[_0x10bf1a(0x1a0)](B - 0x1, end);
        log(str, bool);
        bool = bool && /\.\.\./[_0x10bf1a(0x1a5)](str);
        log(str, bool);
    }
    str = s[_0x10bf1a(0x1a0)](A - 0x1, C);
    bool = bool && !/##/[_0x10bf1a(0x1a5)](str);
    log(str, bool);
    str = s[_0x10bf1a(0x1a0)](B - 0x1, D);
    bool = bool && !/##/[_0x10bf1a(0x1a5)](str);
    log(str, bool);
    ans = bool ? _0x10bf1a(0x1a4) : 'No';
    console[_0x10bf1a(0x1a1)](ans);
}
function a0_0x3177(iKTjpH, key) {
    var stringArray = a0_0x220a();
    a0_0x3177 = function (index, key) {
        index = index - 0x199;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3177(iKTjpH, key);
}
Main(require('fs')[a0_0x58908c(0x19a)]('/dev/stdin', 'utf8'));