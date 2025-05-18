var a0_0x5eaf5a = a0_0x54a1;
function a0_0x573b() {
    var _0x49d3e9 = [
        'push',
        'split',
        '230ZHdsSo',
        '1959129oEhfOm',
        'join',
        '6hmrLHp',
        '31053VOmeAv',
        '79998WSnyxM',
        '6171084DxqIDr',
        'length',
        '2860fqlFIe',
        '2204040vlRIvJ',
        '931ljgUDq',
        'utf8',
        'readFileSync',
        '222779vhhixE',
        '/dev/stdin',
        '37912bKKuau'
    ];
    a0_0x573b = function () {
        return _0x49d3e9;
    };
    return a0_0x573b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x507af7 = a0_0x54a1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x507af7(0x1f0)) / 0x1 * (parseInt(_0x507af7(0x1e6)) / 0x2) + parseInt(_0x507af7(0x1e4)) / 0x3 + parseInt(_0x507af7(0x1ec)) / 0x4 + -parseInt(_0x507af7(0x1e3)) / 0x5 * (-parseInt(_0x507af7(0x1e8)) / 0x6) + parseInt(_0x507af7(0x1ed)) / 0x7 * (-parseInt(_0x507af7(0x1e0)) / 0x8) + -parseInt(_0x507af7(0x1e9)) / 0x9 + -parseInt(_0x507af7(0x1eb)) / 0xa * (parseInt(_0x507af7(0x1e7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x573b, 0x5877f));
function bomb(arr) {
    var _0x356ba1 = a0_0x54a1;
    console['log'](arr[_0x356ba1(0x1e5)]('\x20'));
    if (arr[0x0] === 0x1)
        return;
    var i = arr[_0x356ba1(0x1ea)] - 0x1;
    while (!![]) {
        if (arr[i] !== 0x1) {
            if (arr[i] === 0x2 || i === arr[_0x356ba1(0x1ea)] - 0x1) {
                arr[i]--;
                arr[_0x356ba1(0x1e1)](0x1);
            } else {
                arr[i]--;
                arr[i + 0x1]++;
            }
            break;
        }
        i--;
    }
    bomb(arr);
}
function a0_0x54a1(NbUBCC, key) {
    var stringArray = a0_0x573b();
    a0_0x54a1 = function (index, key) {
        index = index - 0x1e0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x54a1(NbUBCC, key);
}
var input = require('fs')[a0_0x5eaf5a(0x1ef)](a0_0x5eaf5a(0x1f1), a0_0x5eaf5a(0x1ee));
var Arr = input['trim']()[a0_0x5eaf5a(0x1e2)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    bomb([n]);
}