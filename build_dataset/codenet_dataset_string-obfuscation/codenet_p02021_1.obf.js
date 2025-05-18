var a0_0x32d51a = a0_0x7ebd;
(function (stringArrayFunction, comparisonValue) {
    var _0x494bd2 = a0_0x7ebd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x494bd2(0x8e)) / 0x1 * (-parseInt(_0x494bd2(0x92)) / 0x2) + parseInt(_0x494bd2(0x89)) / 0x3 + parseInt(_0x494bd2(0x87)) / 0x4 + parseInt(_0x494bd2(0x86)) / 0x5 + parseInt(_0x494bd2(0x91)) / 0x6 + parseInt(_0x494bd2(0x8a)) / 0x7 * (parseInt(_0x494bd2(0x8f)) / 0x8) + -parseInt(_0x494bd2(0x8b)) / 0x9 * (parseInt(_0x494bd2(0x88)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3382, 0x39f6e));
function a0_0x7ebd(WRhbXM, key) {
    var stringArray = a0_0x3382();
    a0_0x7ebd = function (index, key) {
        index = index - 0x85;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7ebd(WRhbXM, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x32d51a(0x90));
var [n, arr] = input[a0_0x32d51a(0x8c)]()[a0_0x32d51a(0x8d)]('\x0a');
function a0_0x3382() {
    var _0x497085 = [
        '1402302ZIvjGf',
        '56ZMrGjq',
        '9SLzDFY',
        'trim',
        'split',
        '17090fJaCSO',
        '385176jthKDk',
        'utf8',
        '721734qKcMYP',
        '24EUcyKj',
        'every',
        '2233430UxIKBj',
        '1371704oxaubL',
        '17301690AuDlyZ'
    ];
    a0_0x3382 = function () {
        return _0x497085;
    };
    return a0_0x3382();
}
arr = arr[a0_0x32d51a(0x8d)]('\x20')['map'](Number);
for (var i = 0x1; i <= 0x64; i++) {
    var sum = 0x0;
    var flag = arr[a0_0x32d51a(0x85)](v => {
        sum = sum + v - i;
        return sum >= 0x0;
    });
    if (!flag)
        break;
}
console['log'](i - 0x1);