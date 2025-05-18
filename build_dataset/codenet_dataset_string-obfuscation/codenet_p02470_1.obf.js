var a0_0x3d5bbe = a0_0x165d;
(function (stringArrayFunction, comparisonValue) {
    var _0x311736 = a0_0x165d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x311736(0x12a)) / 0x1 + -parseInt(_0x311736(0x123)) / 0x2 * (parseInt(_0x311736(0x12d)) / 0x3) + parseInt(_0x311736(0x122)) / 0x4 + parseInt(_0x311736(0x130)) / 0x5 * (parseInt(_0x311736(0x127)) / 0x6) + parseInt(_0x311736(0x12f)) / 0x7 * (-parseInt(_0x311736(0x126)) / 0x8) + -parseInt(_0x311736(0x12c)) / 0x9 * (parseInt(_0x311736(0x121)) / 0xa) + -parseInt(_0x311736(0x125)) / 0xb * (-parseInt(_0x311736(0x124)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x214f, 0xa9a54));
function a0_0x165d(ZOfMON, key) {
    var stringArray = a0_0x214f();
    a0_0x165d = function (index, key) {
        index = index - 0x120;
        var value = stringArray[index];
        return value;
    };
    return a0_0x165d(ZOfMON, key);
}
function Main(input) {
    var _0x439f9a = a0_0x165d;
    var n = parseInt(input, 0xa);
    var count = 0x0;
    for (i = 0x1; i < n; i++) {
        if (gcd(n, i) == 0x1)
            count++;
    }
    console[_0x439f9a(0x129)](count);
}
function a0_0x214f() {
    var _0x2c3c1e = [
        '308ohLapM',
        '67265FvqsMz',
        'min',
        '40KKsoeh',
        '1232584SWMKyW',
        '622jeClkk',
        '2244iMAJXD',
        '125411dYohnd',
        '23128KiMges',
        '30cQAUQJ',
        'utf8',
        'log',
        '805794eFbqUr',
        '/dev/stdin',
        '2612889qmDhSD',
        '12828lvjBIp',
        'max'
    ];
    a0_0x214f = function () {
        return _0x2c3c1e;
    };
    return a0_0x214f();
}
function gcd(n, m) {
    var _0x4b5b42 = a0_0x165d;
    var a, b, c;
    a = Math[_0x4b5b42(0x12e)](n, m);
    b = Math[_0x4b5b42(0x120)](n, m);
    c = a % b;
    if (c == 0x0) {
        return b;
    } else {
        return gcd(b, c);
    }
}
Main(require('fs')['readFileSync'](a0_0x3d5bbe(0x12b), a0_0x3d5bbe(0x128)));