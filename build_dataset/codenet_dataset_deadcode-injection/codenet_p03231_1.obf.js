var a0_0x1b10ed = a0_0x2608;
function toNum(str) {
    return parseInt(str, 0xa);
}
function gcd(a, b) {
    var _0x2a6be3 = a0_0x2608;
    if (a % b === 0x0) {
        if ('XMfJm' !== _0x2a6be3(0x0)) {
            return b;
        } else {
            return a * b / gcd(a, b);
        }
    } else {
        return gcd(b, a % b);
    }
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
function Main(input) {
    var _0x4a7077 = a0_0x2608;
    var N = toNum(input[_0x4a7077(0x1)]('\x0a')[0x0][_0x4a7077(0x1)]('\x20')[0x0]);
    var M = toNum(input[_0x4a7077(0x1)]('\x0a')[0x0][_0x4a7077(0x1)]('\x20')[0x1]);
    var S = input[_0x4a7077(0x1)]('\x0a')[0x1];
    var T = input[_0x4a7077(0x1)]('\x0a')[0x2];
    var L = lcm(N, M);
    var flag = !![];
    var X = [];
    for (var i = 0x0; i < L; i++) {
        if (_0x4a7077(0x2) === _0x4a7077(0x2)) {
            X[_0x4a7077(0x3)]('');
        } else {
            if (a % b === 0x0) {
                return b;
            } else {
                return gcd(b, a % b);
            }
        }
    }
    X[0x0] = S[0x0];
    for (var i = 0x1; i < S['length']; i++) {
        if (_0x4a7077(0x4) === _0x4a7077(0x5)) {
            return gcd(b, a % b);
        } else {
            X[i * (L / N)] = S[i];
        }
    }
    if (X[0x0] != T[0x0]) {
        console[_0x4a7077(0x6)]('-1');
    } else {
        for (var i = 0x1; i < T[_0x4a7077(0x7)]; i++) {
            if ('HlBMW' !== _0x4a7077(0x8)) {
                if (X[i * (L / M)] != '' && X[i * (L / M)] != T[i]) {
                    console[_0x4a7077(0x6)]('-1');
                    flag = ![];
                    break;
                }
            } else {
                X[_0x4a7077(0x3)]('');
            }
        }
    }
    if (flag) {
        if (_0x4a7077(0x9) === _0x4a7077(0xa)) {
            return b;
        } else {
            console[_0x4a7077(0x6)](L);
        }
    }
}
function a0_0x2608(eLPZJL, key) {
    var stringArray = a0_0x4c7c();
    a0_0x2608 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2608(eLPZJL, key);
}
function a0_0x4c7c() {
    var _0xccb114 = [
        'aXMcf',
        'split',
        'dgqSe',
        'push',
        'YPwaB',
        'qtzGx',
        'log',
        'length',
        'ulMQT',
        'KcyQR',
        'QUJMc',
        '/dev/stdin'
    ];
    a0_0x4c7c = function () {
        return _0xccb114;
    };
    return a0_0x4c7c();
}
Main(require('fs')['readFileSync'](a0_0x1b10ed(0xb), 'utf8'));