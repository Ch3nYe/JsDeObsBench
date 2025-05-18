var a0_0x1cdc0a = a0_0x1a45;
(function (stringArrayFunction, comparisonValue) {
    var _0x4c5bb0 = a0_0x1a45;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4c5bb0(0xe9)) / 0x1 + parseInt(_0x4c5bb0(0xec)) / 0x2 + -parseInt(_0x4c5bb0(0xe8)) / 0x3 * (-parseInt(_0x4c5bb0(0xea)) / 0x4) + parseInt(_0x4c5bb0(0xe0)) / 0x5 + -parseInt(_0x4c5bb0(0xdf)) / 0x6 + -parseInt(_0x4c5bb0(0xeb)) / 0x7 * (-parseInt(_0x4c5bb0(0xdd)) / 0x8) + parseInt(_0x4c5bb0(0xe4)) / 0x9 * (-parseInt(_0x4c5bb0(0xef)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a8c, 0x539ee));
var input = require('fs')[a0_0x1cdc0a(0xed)](a0_0x1cdc0a(0xe6), a0_0x1cdc0a(0xee));
function a0_0x5a8c() {
    var _0x5932c8 = [
        'length',
        '8889fNoWod',
        '237341SDvBSM',
        '56potaQu',
        '7NVywcD',
        '597444pqKRuZ',
        'readFileSync',
        'utf8',
        '30KeyqId',
        'split',
        '4649416OXkERt',
        'trim',
        '4006008OnhOiF',
        '1140200nsGydS',
        'shift',
        'push',
        'log',
        '1129752AoFSEn',
        'forEach',
        '/dev/stdin'
    ];
    a0_0x5a8c = function () {
        return _0x5932c8;
    };
    return a0_0x5a8c();
}
var arr = input[a0_0x1cdc0a(0xde)]()[a0_0x1cdc0a(0xf0)]('\x0a');
var [h, w] = arr[a0_0x1cdc0a(0xe1)]()[a0_0x1cdc0a(0xf0)]('\x20')['map'](Number);
var b = [];
for (var i = 0x0; i < h; i++) {
    var two = [];
    arr[i][a0_0x1cdc0a(0xf0)]('')[a0_0x1cdc0a(0xe5)]((v, j) => {
        var _0x48bf5d = a0_0x1cdc0a;
        if (v == 'B')
            two[_0x48bf5d(0xe2)]([
                i,
                j
            ]);
    });
    if (two[a0_0x1cdc0a(0xe7)] == 0x1)
        b[a0_0x1cdc0a(0xe2)](two[0x0]);
    else if (two[a0_0x1cdc0a(0xe7)] >= 0x2)
        b[a0_0x1cdc0a(0xe2)](two[0x0], two[two[a0_0x1cdc0a(0xe7)] - 0x1]);
}
var max = 0x0;
function a0_0x1a45(NibHIg, key) {
    var stringArray = a0_0x5a8c();
    a0_0x1a45 = function (index, key) {
        index = index - 0xdd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a45(NibHIg, key);
}
for (var i = 0x0; i < b[a0_0x1cdc0a(0xe7)]; i++) {
    for (var j = i + 0x1; j < b['length']; j++) {
        var d = Math['abs'](b[i][0x0] - b[j][0x0]) + Math['abs'](b[i][0x1] - b[j][0x1]);
        max = Math['max'](max, d);
    }
}
console[a0_0x1cdc0a(0xe3)](max);