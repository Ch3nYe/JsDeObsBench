var a0_0x9306f5 = a0_0x4929;
(function (stringArrayFunction, comparisonValue) {
    var _0x26a098 = a0_0x4929;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x26a098(0xe7)) / 0x1 * (-parseInt(_0x26a098(0xf0)) / 0x2) + parseInt(_0x26a098(0xeb)) / 0x3 + parseInt(_0x26a098(0xf4)) / 0x4 + -parseInt(_0x26a098(0xec)) / 0x5 + parseInt(_0x26a098(0xf2)) / 0x6 + -parseInt(_0x26a098(0xf1)) / 0x7 + -parseInt(_0x26a098(0xf6)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6b58, 0x1e4d5));
var lines = [];
var result = 0x0;
var readline = require(a0_0x9306f5(0xf8));
var rl = readline['createInterface']({
    'input': process[a0_0x9306f5(0xf5)],
    'output': process[a0_0x9306f5(0xed)]
});
rl['on'](a0_0x9306f5(0xef), function (x) {
    var _0x1cc704 = a0_0x9306f5;
    lines[_0x1cc704(0xe8)](x);
});
function a0_0x4929(kSheND, key) {
    var stringArray = a0_0x6b58();
    a0_0x4929 = function (index, key) {
        index = index - 0xe6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4929(kSheND, key);
}
function a0_0x6b58() {
    var _0x4af309 = [
        'length',
        '1IjfXiR',
        'push',
        'sort',
        'split',
        '359643eWBnim',
        '338120DbJDTw',
        'stdout',
        'abs',
        'line',
        '88138XIPVnC',
        '1557738xnrzBq',
        '723252xZGguD',
        'map',
        '898192cVoxBT',
        'stdin',
        '53016HSvIRH',
        'min',
        'readline'
    ];
    a0_0x6b58 = function () {
        return _0x4af309;
    };
    return a0_0x6b58();
}
rl['on']('close', function () {
    var _0x15535d = a0_0x9306f5;
    var N = Number(lines[0x0]);
    var a = lines[0x1][_0x15535d(0xea)]('\x20')[_0x15535d(0xf3)](value => Number(value));
    a[_0x15535d(0xe9)]((a, b) => a - b);
    var counter = Array(N)['fill'](0x0);
    var j = 0x0;
    counter[0x0] = [
        a[0x0],
        0x1
    ];
    for (var i = 0x1; i < N; i++) {
        if (a[i] !== a[i - 0x1]) {
            j++;
            counter[j] = [
                a[i],
                0x1
            ];
        } else {
            var cnt = counter[j][0x1] + 0x1;
            counter[j] = [
                a[i],
                cnt
            ];
        }
    }
    for (var i = 0x0; i < counter[_0x15535d(0xe6)]; i++) {
        if (counter[i][0x0] === counter[i][0x1]) {
            continue;
        } else {
            if (counter[i] === 0x0) {
                continue;
            } else {
                result += Math[_0x15535d(0xf7)](counter[i][0x1], Math[_0x15535d(0xee)](counter[i][0x0] - counter[i][0x1]));
            }
        }
    }
    console['log'](result);
});