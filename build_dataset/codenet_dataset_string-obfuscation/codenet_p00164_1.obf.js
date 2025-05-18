var a0_0x5a076e = a0_0x106b;
(function (stringArrayFunction, comparisonValue) {
    var _0x3d727c = a0_0x106b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3d727c(0x156)) / 0x1 * (-parseInt(_0x3d727c(0x159)) / 0x2) + parseInt(_0x3d727c(0x14f)) / 0x3 + -parseInt(_0x3d727c(0x158)) / 0x4 * (-parseInt(_0x3d727c(0x15c)) / 0x5) + parseInt(_0x3d727c(0x153)) / 0x6 + parseInt(_0x3d727c(0x14e)) / 0x7 + parseInt(_0x3d727c(0x152)) / 0x8 + parseInt(_0x3d727c(0x15b)) / 0x9 * (-parseInt(_0x3d727c(0x15a)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x50ac, 0xb35ec));
var input = require('fs')['readFileSync'](a0_0x5a076e(0x151), a0_0x5a076e(0x150));
var Arr = input[a0_0x5a076e(0x14d)]()[a0_0x5a076e(0x157)]('\x0a');
function a0_0x106b(oIqaah, key) {
    var stringArray = a0_0x50ac();
    a0_0x106b = function (index, key) {
        index = index - 0x14d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x106b(oIqaah, key);
}
function a0_0x50ac() {
    var _0x157d48 = [
        'trim',
        '7260414zuJsHr',
        '491631qMuWNr',
        'utf8',
        '/dev/stdin',
        '8466016KEIyLd',
        '6805494WdMsbG',
        'shift',
        'log',
        '1YmPwLK',
        'split',
        '12mhmGgP',
        '2813438RCkBem',
        '13080ziPtGc',
        '16227vqiZZD',
        '1843605aOoAoD'
    ];
    a0_0x50ac = function () {
        return _0x157d48;
    };
    return a0_0x50ac();
}
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr[a0_0x5a076e(0x154)]()[a0_0x5a076e(0x157)]('\x20')['map'](Number);
    var ball = 0x20;
    var i = 0x0;
    while (!![]) {
        ball -= (ball - 0x1) % 0x5;
        console[a0_0x5a076e(0x155)](ball);
        if (ball == 0x1) {
            console[a0_0x5a076e(0x155)](0x0);
            break;
        }
        ball -= arr[i % n];
        i++;
        console[a0_0x5a076e(0x155)](ball);
    }
}