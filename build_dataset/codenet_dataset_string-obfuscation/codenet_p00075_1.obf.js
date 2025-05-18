function a0_0x32c8() {
    var _0x15e702 = [
        'utf8',
        '1835880mFUnhk',
        'log',
        '1382074pwxuWh',
        '3ohjFKD',
        '11pNVsQD',
        '5498110xEyzZg',
        'split',
        '144raQfZE',
        'trim',
        'filter',
        '4473372VUVsNe',
        'readFileSync',
        '/dev/stdin',
        '640773lqWbCK',
        '9euOEae',
        '5865aPHfTQ',
        '599805LprfWp',
        '48HgiZCU'
    ];
    a0_0x32c8 = function () {
        return _0x15e702;
    };
    return a0_0x32c8();
}
var a0_0xfbab51 = a0_0x52c0;
(function (stringArrayFunction, comparisonValue) {
    var _0x4cfbb8 = a0_0x52c0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4cfbb8(0x1ae)) / 0x1 + parseInt(_0x4cfbb8(0x1a0)) / 0x2 * (parseInt(_0x4cfbb8(0x1a1)) / 0x3) + -parseInt(_0x4cfbb8(0x1a5)) / 0x4 * (parseInt(_0x4cfbb8(0x1ad)) / 0x5) + parseInt(_0x4cfbb8(0x1af)) / 0x6 * (-parseInt(_0x4cfbb8(0x1ab)) / 0x7) + parseInt(_0x4cfbb8(0x19e)) / 0x8 * (parseInt(_0x4cfbb8(0x1ac)) / 0x9) + parseInt(_0x4cfbb8(0x1a3)) / 0xa * (parseInt(_0x4cfbb8(0x1a2)) / 0xb) + parseInt(_0x4cfbb8(0x1a8)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x32c8, 0x72721));
var input = require('fs')[a0_0xfbab51(0x1a9)](a0_0xfbab51(0x1aa), a0_0xfbab51(0x19d));
var lines = input[a0_0xfbab51(0x1a6)]()['split']('\x0a');
function a0_0x52c0(ayFpfO, key) {
    var stringArray = a0_0x32c8();
    a0_0x52c0 = function (index, key) {
        index = index - 0x19d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52c0(ayFpfO, key);
}
var ret = lines[a0_0xfbab51(0x1a7)](function (line) {
    var _0x2c0b1f = a0_0xfbab51;
    var items = line[_0x2c0b1f(0x1a4)](',');
    var w = +items[0x1];
    var h = +items[0x2];
    return w / (h * h) >= 0x19;
});
ret['forEach'](function (line) {
    var _0x9406ff = a0_0xfbab51;
    console[_0x9406ff(0x19f)](line[_0x9406ff(0x1a4)](',')[0x0]);
});