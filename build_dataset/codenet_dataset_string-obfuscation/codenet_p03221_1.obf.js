var a0_0x2ec4f0 = a0_0x4885;
function a0_0x4885(MfpCJm, key) {
    var stringArray = a0_0xa382();
    a0_0x4885 = function (index, key) {
        index = index - 0xe7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4885(MfpCJm, key);
}
function a0_0xa382() {
    var _0x25a5a5 = [
        'split',
        '4502188BqdkJL',
        'shift',
        '5bWWzWD',
        '7GhhILY',
        '5960168WqLOrH',
        'utf8',
        '9jlHxpE',
        '2216265SkFamL',
        'readFileSync',
        '13535643JQVcMf',
        '2775950zTkUeb',
        '12CDcwXH',
        'sort',
        '/dev/stdin',
        '10TgTfyW',
        '7724598qADQMD',
        'length',
        '64877rQzbnb',
        'trim'
    ];
    a0_0xa382 = function () {
        return _0x25a5a5;
    };
    return a0_0xa382();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4504aa = a0_0x4885;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4504aa(0xef)) / 0x1 * (-parseInt(_0x4504aa(0xec)) / 0x2) + parseInt(_0x4504aa(0xf9)) / 0x3 + parseInt(_0x4504aa(0xf2)) / 0x4 * (parseInt(_0x4504aa(0xf4)) / 0x5) + -parseInt(_0x4504aa(0xed)) / 0x6 * (parseInt(_0x4504aa(0xf5)) / 0x7) + -parseInt(_0x4504aa(0xf6)) / 0x8 * (-parseInt(_0x4504aa(0xf8)) / 0x9) + parseInt(_0x4504aa(0xe8)) / 0xa + -parseInt(_0x4504aa(0xe7)) / 0xb * (parseInt(_0x4504aa(0xe9)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa382, 0xa946d));
function fillZero(l, num) {
    var _0x3d0603 = a0_0x4885;
    num = String(num);
    for (var i = num[_0x3d0603(0xee)]; i < l; i++) {
        num = '0' + num;
    }
    return num;
}
function main(arg) {
    var _0x23008e = a0_0x4885;
    arg = arg[_0x23008e(0xf0)]()[_0x23008e(0xf1)]('\x0a');
    arg[0x0] = arg[0x0][_0x23008e(0xf1)]('\x20');
    var N = Number(arg[0x0][0x0]);
    var M = Number(arg[0x0][0x1]);
    arg[_0x23008e(0xf3)]();
    var p_master = {};
    for (var i = 0x0; i < arg['length']; i++) {
        var tmp = arg[i][_0x23008e(0xf1)]('\x20')['map'](e => Number(e));
        arg[i] = tmp;
        if (!p_master[tmp[0x0]]) {
            p_master[tmp[0x0]] = [];
        }
        p_master[tmp[0x0]]['push'](tmp[0x1]);
    }
    for (key in p_master) {
        p_master[key][_0x23008e(0xea)]();
    }
    for (var i = 0x0; i < arg['length']; i++) {
        var _p = arg[i][0x0];
        var j = 0x0;
        for (var j = 0x0; j < p_master[_p]['length']; j++) {
            if (p_master[_p][j] === arg[i][0x1]) {
                break;
            }
        }
        console['log'](fillZero(0x6, _p) + fillZero(0x6, j + 0x1));
    }
}
main(require('fs')[a0_0x2ec4f0(0xfa)](a0_0x2ec4f0(0xeb), a0_0x2ec4f0(0xf7)));