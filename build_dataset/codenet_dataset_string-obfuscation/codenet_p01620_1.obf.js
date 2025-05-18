var a0_0x39f5f5 = a0_0x2207;
(function (stringArrayFunction, comparisonValue) {
    var _0x8fa518 = a0_0x2207;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x8fa518(0x1e0)) / 0x1 * (parseInt(_0x8fa518(0x1ee)) / 0x2) + parseInt(_0x8fa518(0x1e1)) / 0x3 * (-parseInt(_0x8fa518(0x1dd)) / 0x4) + parseInt(_0x8fa518(0x1de)) / 0x5 * (-parseInt(_0x8fa518(0x1e9)) / 0x6) + -parseInt(_0x8fa518(0x1e8)) / 0x7 + -parseInt(_0x8fa518(0x1f1)) / 0x8 * (parseInt(_0x8fa518(0x1ed)) / 0x9) + parseInt(_0x8fa518(0x1e7)) / 0xa + parseInt(_0x8fa518(0x1e3)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2507, 0x82426));
function a0_0x2207(tRHpyV, key) {
    var stringArray = a0_0x2507();
    a0_0x2207 = function (index, key) {
        index = index - 0x1dd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2207(tRHpyV, key);
}
var abc = a0_0x39f5f5(0x1e5)['split']('');
var input = require('fs')[a0_0x39f5f5(0x1ea)](a0_0x39f5f5(0x1eb), a0_0x39f5f5(0x1ec));
var Arr = input['trim']()[a0_0x39f5f5(0x1f0)]('\x0a');
function a0_0x2507() {
    var _0x3049fa = [
        'indexOf',
        'split',
        '16XDFuoU',
        '58948QdOOOD',
        '14055VJdCnP',
        'join',
        '450161lRjNZA',
        '141HKkJDR',
        'map',
        '22536514aAjaGe',
        'shift',
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'length',
        '2110730kIgdUd',
        '154882tRMwha',
        '258xxUEQy',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        '1982277IFrXis',
        '2vOEXOM'
    ];
    a0_0x2507 = function () {
        return _0x3049fa;
    };
    return a0_0x2507();
}
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var k = Arr[a0_0x39f5f5(0x1e4)]()[a0_0x39f5f5(0x1f0)]('\x20')[a0_0x39f5f5(0x1e2)](Number);
    var arr = Arr[a0_0x39f5f5(0x1e4)]()['split']('');
    var j = 0x0;
    for (var i = 0x0; i < arr[a0_0x39f5f5(0x1e6)]; i++) {
        var num = abc[a0_0x39f5f5(0x1ef)](arr[i]) - k[i % k[a0_0x39f5f5(0x1e6)]];
        if (num < 0x0)
            num += abc['length'];
        arr[i] = abc[num];
    }
    console['log'](arr[a0_0x39f5f5(0x1df)](''));
}