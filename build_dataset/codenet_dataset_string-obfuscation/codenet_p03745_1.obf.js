function a0_0x2a0e(hGdhKi, key) {
    var stringArray = a0_0x28e8();
    a0_0x2a0e = function (index, key) {
        index = index - 0x1d4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a0e(hGdhKi, key);
}
function a0_0x28e8() {
    var _0x32603d = [
        '56Msclii',
        '63115nasVVL',
        'utf8',
        'split',
        '22536yKKdto',
        '110nsUpUn',
        '107830NTOafi',
        '132fEYqku',
        '2274108tybhOP',
        '6075732JOajgm',
        '18897KopBVi',
        '/dev/stdin',
        '232941ooGAWD',
        'log',
        '2793SKumuI',
        '22vizPhR',
        '1143ELFBpe'
    ];
    a0_0x28e8 = function () {
        return _0x32603d;
    };
    return a0_0x28e8();
}
var a0_0x98f1bf = a0_0x2a0e;
(function (stringArrayFunction, comparisonValue) {
    var _0x43db12 = a0_0x2a0e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x43db12(0x1d4)) / 0x1 * (parseInt(_0x43db12(0x1e0)) / 0x2) + parseInt(_0x43db12(0x1d6)) / 0x3 * (parseInt(_0x43db12(0x1db)) / 0x4) + -parseInt(_0x43db12(0x1dc)) / 0x5 * (-parseInt(_0x43db12(0x1e2)) / 0x6) + -parseInt(_0x43db12(0x1d8)) / 0x7 * (-parseInt(_0x43db12(0x1df)) / 0x8) + parseInt(_0x43db12(0x1da)) / 0x9 * (-parseInt(_0x43db12(0x1e1)) / 0xa) + parseInt(_0x43db12(0x1d9)) / 0xb * (parseInt(_0x43db12(0x1e3)) / 0xc) + parseInt(_0x43db12(0x1e4)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x28e8, 0xe2291));
(function (stdin) {
    var _0x536739 = a0_0x2a0e;
    input = stdin[_0x536739(0x1de)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var a = input[0x1]['split']('\x20');
    var ans = 0x1;
    var up = ![];
    var down = ![];
    for (var i = 0x0; i < n - 0x1; i++) {
        if (a[i] < a[i + 0x1]) {
            up = !![];
        }
        if (a[i] > a[i + 0x1]) {
            down = !![];
        }
        if (up && down) {
            up = down = ![];
            ans++;
        }
    }
    console[_0x536739(0x1d7)]('%d', ans);
}(require('fs')['readFileSync'](a0_0x98f1bf(0x1d5), a0_0x98f1bf(0x1dd))));