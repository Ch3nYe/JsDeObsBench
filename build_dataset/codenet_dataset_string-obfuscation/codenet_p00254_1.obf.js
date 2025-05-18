var a0_0x1c66aa = a0_0x3516;
function a0_0x3516(QBHkYB, key) {
    var stringArray = a0_0x4a83();
    a0_0x3516 = function (index, key) {
        index = index - 0x13e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3516(QBHkYB, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5bd2fb = a0_0x3516;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5bd2fb(0x141)) / 0x1 * (parseInt(_0x5bd2fb(0x147)) / 0x2) + parseInt(_0x5bd2fb(0x157)) / 0x3 * (-parseInt(_0x5bd2fb(0x13f)) / 0x4) + parseInt(_0x5bd2fb(0x150)) / 0x5 * (-parseInt(_0x5bd2fb(0x154)) / 0x6) + parseInt(_0x5bd2fb(0x15d)) / 0x7 * (-parseInt(_0x5bd2fb(0x152)) / 0x8) + parseInt(_0x5bd2fb(0x159)) / 0x9 + parseInt(_0x5bd2fb(0x15b)) / 0xa * (parseInt(_0x5bd2fb(0x149)) / 0xb) + parseInt(_0x5bd2fb(0x14c)) / 0xc * (parseInt(_0x5bd2fb(0x15c)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4a83, 0x8b4fb));
function a0_0x4a83() {
    var _0x41f159 = [
        '6174',
        '25HfYFHE',
        'sort',
        'shift',
        'map',
        '1111',
        '3333',
        '70124XgQhEl',
        '5555',
        '1148213eYYfeG',
        '0000',
        '2222',
        '19800aDlsjg',
        '4444',
        'readFileSync',
        'utf8',
        '2728945IDnTIN',
        '/dev/stdin',
        '153696acJauH',
        '9999',
        '6zfLCms',
        'trim',
        '7777',
        '27LgGtwn',
        'log',
        '4528359mjjfiq',
        'split',
        '40irgDio',
        '9230zioeli',
        '21eHRoNE',
        '6666',
        '18484LkdMeO'
    ];
    a0_0x4a83 = function () {
        return _0x41f159;
    };
    return a0_0x4a83();
}
var input = require('fs')[a0_0x1c66aa(0x14e)](a0_0x1c66aa(0x151), a0_0x1c66aa(0x14f));
var Arr = input[a0_0x1c66aa(0x155)]()[a0_0x1c66aa(0x15a)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x1c66aa(0x143)]();
    if (n == a0_0x1c66aa(0x14a))
        break;
    if (n == a0_0x1c66aa(0x145) || n == a0_0x1c66aa(0x14b) || n == a0_0x1c66aa(0x146) || n == a0_0x1c66aa(0x14d) || n == a0_0x1c66aa(0x148)) {
        console[a0_0x1c66aa(0x158)]('NA');
        continue;
    }
    if (n == a0_0x1c66aa(0x13e) || n == a0_0x1c66aa(0x156) || n == '8888' || n == a0_0x1c66aa(0x153)) {
        console['log']('NA');
        continue;
    }
    var i = 0x0;
    while (!![]) {
        if (n == a0_0x1c66aa(0x140))
            break;
        i++;
        var arr = n[a0_0x1c66aa(0x15a)]('')[a0_0x1c66aa(0x144)](Number);
        arr[a0_0x1c66aa(0x142)](function (a, b) {
            return b - a;
        });
        var L = parseInt('' + arr[0x0] + arr[0x1] + arr[0x2] + arr[0x3], 0xa);
        var S = parseInt('' + arr[0x3] + arr[0x2] + arr[0x1] + arr[0x0], 0xa);
        n = (a0_0x1c66aa(0x14a) + (L - S))['slice'](-0x4);
    }
    console[a0_0x1c66aa(0x158)](i);
}