var a0_0x43bd5e = a0_0x48e5;
function a0_0x48e5(dtvFjF, key) {
    var stringArray = a0_0x3014();
    a0_0x48e5 = function (index, key) {
        index = index - 0x10c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x48e5(dtvFjF, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x9807cc = a0_0x48e5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x9807cc(0x11e)) / 0x1 * (parseInt(_0x9807cc(0x10c)) / 0x2) + parseInt(_0x9807cc(0x11c)) / 0x3 * (parseInt(_0x9807cc(0x10f)) / 0x4) + -parseInt(_0x9807cc(0x118)) / 0x5 * (-parseInt(_0x9807cc(0x117)) / 0x6) + -parseInt(_0x9807cc(0x113)) / 0x7 * (-parseInt(_0x9807cc(0x10d)) / 0x8) + parseInt(_0x9807cc(0x11d)) / 0x9 * (parseInt(_0x9807cc(0x11a)) / 0xa) + -parseInt(_0x9807cc(0x116)) / 0xb + parseInt(_0x9807cc(0x119)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3014, 0x5a075));
function a0_0x3014() {
    var _0x4ee81b = [
        '2068856vFuHRt',
        'split',
        '1940yLsSJt',
        'utf8',
        'toString',
        '/dev/stdin',
        '7cYhgoG',
        'slice',
        'log',
        '6191625MNYBBD',
        '6umgXSG',
        '801775RzldKo',
        '2368920DBRZuk',
        '1845190GgmBXM',
        'length',
        '921qkoyod',
        '18cVukar',
        '202673wAcTDx',
        'map',
        '2NPYlQN'
    ];
    a0_0x3014 = function () {
        return _0x4ee81b;
    };
    return a0_0x3014();
}
function Main(input) {
    var _0x457af7 = a0_0x48e5;
    lines = input[_0x457af7(0x10e)]('\x0a');
    lines = input[_0x457af7(0x10e)]('\x0a');
    n = lines[0x0]['split']('\x20')[0x0] * 0x1;
    m = lines[0x0][_0x457af7(0x10e)]('\x20')[0x1] * 0x1;
    ps = lines[lines[_0x457af7(0x11b)] - 0x1][_0x457af7(0x10e)]('\x20');
    lines = lines[_0x457af7(0x114)](0x1, -0x1)[_0x457af7(0x11f)](function (l) {
        return l['split']('\x20')['slice'](0x1);
    });
    ans = 0x0;
    for (i = 0x0; i < 0x1 << n; i++) {
        s = ('0000000000' + i[_0x457af7(0x111)](0x2))[_0x457af7(0x114)](-0x1 * n);
        flg = !![];
        for (j = 0x0; j < lines[_0x457af7(0x11b)]; j++) {
            on = 0x0;
            if (!flg)
                break;
            for (k = 0x0; k < lines[j][_0x457af7(0x11b)]; k++) {
                on += s[n - lines[j][k]] * 0x1;
            }
            if (on % 0x2 != ps[j]) {
                flg = ![];
            }
        }
        if (flg) {
            ans++;
        }
    }
    console[_0x457af7(0x115)](ans);
}
Main(require('fs')['readFileSync'](a0_0x43bd5e(0x112), a0_0x43bd5e(0x110)));