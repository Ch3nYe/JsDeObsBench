var a0_0x379697 = a0_0x5138;
function a0_0x2a42() {
    var _0x1071ae = [
        '1020636iZivzY',
        '1190IDlbni',
        '728OCzLpt',
        '1115516FjaRoZ',
        '12048oIquMy',
        'length',
        'split',
        'utf8',
        '15778BXeXkI',
        '63375JYWXvc',
        '1687499zawPeq',
        'readFileSync',
        '1490172EvHpCx',
        '6mqwnzN',
        '72ElwhEI',
        '10wQWfBH',
        '1CJhcyL',
        'log'
    ];
    a0_0x2a42 = function () {
        return _0x1071ae;
    };
    return a0_0x2a42();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x560667 = a0_0x5138;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x560667(0x158)) / 0x1 * (-parseInt(_0x560667(0x154)) / 0x2) + parseInt(_0x560667(0x155)) / 0x3 * (parseInt(_0x560667(0x15d)) / 0x4) + -parseInt(_0x560667(0x15b)) / 0x5 * (parseInt(_0x560667(0x15e)) / 0x6) + -parseInt(_0x560667(0x150)) / 0x7 * (parseInt(_0x560667(0x15c)) / 0x8) + -parseInt(_0x560667(0x15a)) / 0x9 * (parseInt(_0x560667(0x157)) / 0xa) + parseInt(_0x560667(0x152)) / 0xb + parseInt(_0x560667(0x156)) / 0xc * (-parseInt(_0x560667(0x151)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2a42, 0x99f35));
function toNum(str) {
    return parseInt(str, 0xa);
}
function gcd(a, b) {
    if (a % b === 0x0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
function Main(input) {
    var _0x15be9d = a0_0x5138;
    var N = toNum(input[_0x15be9d(0x160)]('\x0a')[0x0]['split']('\x20')[0x0]);
    var M = toNum(input[_0x15be9d(0x160)]('\x0a')[0x0]['split']('\x20')[0x1]);
    var S = input[_0x15be9d(0x160)]('\x0a')[0x1];
    var T = input[_0x15be9d(0x160)]('\x0a')[0x2];
    var L = lcm(N, M);
    var flag = !![];
    var X = [];
    for (var i = 0x0; i < L; i++) {
        X['push']('');
    }
    X[0x0] = S[0x0];
    for (var i = 0x1; i < S['length']; i++) {
        X[i * (L / N)] = S[i];
    }
    if (X[0x0] != T[0x0]) {
        console['log']('-1');
    } else {
        for (var i = 0x1; i < T[_0x15be9d(0x15f)]; i++) {
            if (X[i * (L / M)] != '' && X[i * (L / M)] != T[i]) {
                console[_0x15be9d(0x159)]('-1');
                flag = ![];
                break;
            }
        }
    }
    if (flag) {
        console[_0x15be9d(0x159)](L);
    }
}
function a0_0x5138(ECMBqm, key) {
    var stringArray = a0_0x2a42();
    a0_0x5138 = function (index, key) {
        index = index - 0x14f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5138(ECMBqm, key);
}
Main(require('fs')[a0_0x379697(0x153)]('/dev/stdin', a0_0x379697(0x14f)));