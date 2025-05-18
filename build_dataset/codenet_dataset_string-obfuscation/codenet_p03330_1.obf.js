var a0_0x39db53 = a0_0x7abd;
function a0_0x31d8() {
    var _0x17ed94 = [
        '1546641OehOpm',
        '208554tDOHcm',
        'fill',
        'utf8',
        '/dev/stdin',
        '669264CraBta',
        '2777608rRKcbZ',
        '3371930SVSwoL',
        '804656NHwrph',
        '140uEKMfl',
        '3XWItkj',
        'map',
        '726257WMsZQC',
        '24UrFHeC',
        'split',
        'readFileSync'
    ];
    a0_0x31d8 = function () {
        return _0x17ed94;
    };
    return a0_0x31d8();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x58e3c5 = a0_0x7abd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x58e3c5(0xea)) / 0x1 + parseInt(_0x58e3c5(0xe7)) / 0x2 * (parseInt(_0x58e3c5(0xec)) / 0x3) + parseInt(_0x58e3c5(0xe8)) / 0x4 + parseInt(_0x58e3c5(0xeb)) / 0x5 * (parseInt(_0x58e3c5(0xf3)) / 0x6) + parseInt(_0x58e3c5(0xee)) / 0x7 * (-parseInt(_0x58e3c5(0xef)) / 0x8) + parseInt(_0x58e3c5(0xf2)) / 0x9 + -parseInt(_0x58e3c5(0xe9)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31d8, 0xb0089));
function a0_0x7abd(nmNWRM, key) {
    var stringArray = a0_0x31d8();
    a0_0x7abd = function (index, key) {
        index = index - 0xe7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7abd(nmNWRM, key);
}
function Main(s) {
    var _0x4ca52a = a0_0x7abd;
    s = s[_0x4ca52a(0xf0)]('\x0a');
    s[0x0] = s[0x0]['split']('\x20')['map'](a => +a);
    var n = s[0x0][0x0];
    var c = s[0x0][0x1];
    var d = [], a = [];
    for (var i = 0x0; i < c; i++) {
        d[i] = s[i + 0x1]['split']('\x20')[_0x4ca52a(0xed)](a => +a);
    }
    for (i = 0x0; i < n; i++) {
        a[i] = s[i + 0x1 + c][_0x4ca52a(0xf0)]('\x20')[_0x4ca52a(0xed)](a => +a - 0x1);
    }
    var z = Array(0x3)[_0x4ca52a(0xf4)](0x0)['map'](a => Array(c)[_0x4ca52a(0xf4)](0x0));
    for (i = 0x0; i < n; i++)
        for (var j = 0x0; j < n; j++) {
            var t = (i + j) % 0x3;
            z[t][a[i][j]]++;
        }
    var ans = 0x218711a00;
    for (i = 0x0; i < c; i++) {
        for (j = 0x0; j < c; j++) {
            if (i === j)
                continue;
            for (var k = 0x0; k < c; k++) {
                if (i === k || j === k)
                    continue;
                t = 0x0;
                for (var l = 0x0; l < c; l++) {
                    t += z[0x0][l] * d[l][i];
                    t += z[0x1][l] * d[l][j];
                    t += z[0x2][l] * d[l][k];
                }
                ans = Math['min'](ans, t);
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')[a0_0x39db53(0xf1)](a0_0x39db53(0xf6), a0_0x39db53(0xf5)));