var a0_0x392b96 = a0_0x59c6;
function a0_0x1344() {
    var _0x43b87d = [
        'keys',
        '18rgPLNS',
        'trim',
        '15521YICrqq',
        'utf8',
        'reverse',
        'push',
        '1224456oxdPmg',
        '199892lBDBFk',
        'shift',
        '5AuBumn',
        '1566882IKcwuR',
        '840399khCazq',
        '/dev/stdin',
        'length',
        'join',
        'split',
        '1000489grxZgB',
        '420688GYAFEs'
    ];
    a0_0x1344 = function () {
        return _0x43b87d;
    };
    return a0_0x1344();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x11c02f = a0_0x59c6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x11c02f(0x1a6)) / 0x1 + parseInt(_0x11c02f(0x1a2)) / 0x2 + -parseInt(_0x11c02f(0x1af)) / 0x3 + parseInt(_0x11c02f(0x1ab)) / 0x4 + -parseInt(_0x11c02f(0x1ad)) / 0x5 * (parseInt(_0x11c02f(0x1ae)) / 0x6) + parseInt(_0x11c02f(0x1b4)) / 0x7 + parseInt(_0x11c02f(0x1aa)) / 0x8 * (parseInt(_0x11c02f(0x1a4)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1344, 0x253ed));
var input = require('fs')['readFileSync'](a0_0x392b96(0x1b0), a0_0x392b96(0x1a7));
function a0_0x59c6(uzSXMr, key) {
    var stringArray = a0_0x1344();
    a0_0x59c6 = function (index, key) {
        index = index - 0x1a2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59c6(uzSXMr, key);
}
var Arr = input[a0_0x392b96(0x1a5)]()[a0_0x392b96(0x1b3)]('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var str = Arr[a0_0x392b96(0x1ac)]();
    var arr = [];
    for (var i = 0x1; i < str[a0_0x392b96(0x1b1)]; i++) {
        arr[a0_0x392b96(0x1a9)]([
            str['slice'](0x0, i),
            str['slice'](i, str[a0_0x392b96(0x1b1)])
        ]);
    }
    var obj = {};
    for (var i = 0x0; i < arr[a0_0x392b96(0x1b1)]; i++) {
        var A = arr[i][0x0];
        var B = arr[i][0x1];
        var a = A[a0_0x392b96(0x1b3)]('')['reverse']()[a0_0x392b96(0x1b2)]('');
        var b = B[a0_0x392b96(0x1b3)]('')[a0_0x392b96(0x1a8)]()[a0_0x392b96(0x1b2)]('');
        obj[A + B] = !![];
        obj[A + b] = !![];
        obj[a + B] = !![];
        obj[a + b] = !![];
        obj[B + A] = !![];
        obj[B + a] = !![];
        obj[b + A] = !![];
        obj[b + a] = !![];
    }
    console['log'](Object[a0_0x392b96(0x1a3)](obj)[a0_0x392b96(0x1b1)]);
}