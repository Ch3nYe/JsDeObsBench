function a0_0x2323(VVubkk, key) {
    var stringArray = a0_0x13d9();
    a0_0x2323 = function (index, key) {
        index = index - 0x93;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2323(VVubkk, key);
}
var a0_0x3fb840 = a0_0x2323;
function a0_0x13d9() {
    var _0x3e704b = [
        '533940CfThHv',
        '527566UDvVBD',
        'utf8',
        '36ICEYJm',
        '/dev/stdin',
        'zyxwvutsrqponmlkjihgfedcba',
        '177950nCwMzo',
        'fill',
        '12vkcvwD',
        '40156MMAPIL',
        'charCodeAt',
        'length',
        'slice',
        '709144LzfZrS',
        'trim',
        '3ZXysvo',
        '2818340hmNNcG',
        'log',
        '16415920ItQZaT',
        'fromCharCode'
    ];
    a0_0x13d9 = function () {
        return _0x3e704b;
    };
    return a0_0x13d9();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x57a012 = a0_0x2323;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x57a012(0x96)) / 0x1 + -parseInt(_0x57a012(0xa5)) / 0x2 + parseInt(_0x57a012(0x9f)) / 0x3 * (parseInt(_0x57a012(0x99)) / 0x4) + parseInt(_0x57a012(0xa4)) / 0x5 * (-parseInt(_0x57a012(0x98)) / 0x6) + -parseInt(_0x57a012(0xa0)) / 0x7 + parseInt(_0x57a012(0x9d)) / 0x8 * (-parseInt(_0x57a012(0x93)) / 0x9) + parseInt(_0x57a012(0xa2)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x13d9, 0x3a61a));
function Main(s) {
    var _0x390b18 = a0_0x2323;
    const n = s[_0x390b18(0x9b)];
    const a = 'a'[_0x390b18(0x9a)]();
    var b = Array(0x1a)[_0x390b18(0x97)](0x1);
    var i;
    if (n < 0x1a) {
        for (i = 0x0; i < n; i++) {
            b[s['charCodeAt'](i) - a] = 0x0;
        }
        for (i = 0x0; i < 0x1a; i++) {
            if (b[i]) {
                s += String[_0x390b18(0xa3)](a + i);
                break;
            }
        }
    } else {
        if (s === _0x390b18(0x95)) {
            console[_0x390b18(0xa1)](-0x1);
            return;
        }
        var c = s[0x19];
        b[s[_0x390b18(0x9a)](0x19) - a] = 0x0;
        for (i = 0x18; i >= 0x0; i--) {
            if (c > s[i]) {
                c = s[_0x390b18(0x9a)](i) - a;
                s = s[_0x390b18(0x9c)](0x0, i);
                break;
            } else {
                b[s[_0x390b18(0x9a)](i) - a] = 0x0;
            }
        }
        for (var j = c - a; j < 0x1a; j++) {
            if (b[j] === 0x0) {
                s += String[_0x390b18(0xa3)](a + j);
                break;
            }
        }
    }
    console[_0x390b18(0xa1)](s);
}
Main(require('fs')['readFileSync'](a0_0x3fb840(0x94), a0_0x3fb840(0xa6))[a0_0x3fb840(0x9e)]());