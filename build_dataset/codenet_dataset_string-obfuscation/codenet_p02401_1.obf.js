function a0_0x3d70(rMorPj, key) {
    var stringArray = a0_0x3840();
    a0_0x3d70 = function (index, key) {
        index = index - 0xc7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d70(rMorPj, key);
}
var a0_0x125f2d = a0_0x3d70;
function a0_0x3840() {
    var _0x1aa269 = [
        'length',
        '5455760SyMcga',
        'stdin',
        'split',
        '117306AeTHWc',
        '11aTRwaL',
        '7COJhMJ',
        '3056346uiGniS',
        '1690785EedguW',
        '28NMuqNW',
        'data',
        '106fSmZQG',
        'utf8',
        'log',
        '4546182Swlyaz',
        '15293gBENPC',
        '25002610glQVBd'
    ];
    a0_0x3840 = function () {
        return _0x1aa269;
    };
    return a0_0x3840();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x277784 = a0_0x3d70;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x277784(0xce)) / 0x1 * (parseInt(_0x277784(0xca)) / 0x2) + -parseInt(_0x277784(0xd4)) / 0x3 * (-parseInt(_0x277784(0xc8)) / 0x4) + parseInt(_0x277784(0xc7)) / 0x5 + parseInt(_0x277784(0xcd)) / 0x6 * (-parseInt(_0x277784(0xd6)) / 0x7) + -parseInt(_0x277784(0xd1)) / 0x8 + -parseInt(_0x277784(0xd7)) / 0x9 + -parseInt(_0x277784(0xcf)) / 0xa * (-parseInt(_0x277784(0xd5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3840, 0x7f866));
process[a0_0x125f2d(0xd2)]['resume']();
process[a0_0x125f2d(0xd2)]['setEncoding'](a0_0x125f2d(0xcb));
process[a0_0x125f2d(0xd2)]['on'](a0_0x125f2d(0xc9), function (chunk) {
    var _0x18cf89 = a0_0x125f2d;
    var input = chunk['split']('\x0a');
    var output = '';
    for (var i = 0x0; i < input[_0x18cf89(0xd0)]; i++) {
        var r = calc(input[i]);
        if (r !== ![]) {
            console[_0x18cf89(0xcc)](r);
        }
    }
    function calc(input) {
        var _0x15cdd3 = _0x18cf89;
        var nums = input[_0x15cdd3(0xd3)]('\x20');
        nums[0x0] = Number(nums[0x0]);
        nums[0x2] = Number(nums[0x2]);
        if (nums[0x1] == '+') {
            return nums[0x0] + nums[0x2];
        } else if (nums[0x1] == '-') {
            return nums[0x0] - nums[0x2];
        } else if (nums[0x1] == '*') {
            return nums[0x0] * nums[0x2];
        } else if (nums[0x1] == '/') {
            return nums[0x0] / nums[0x2];
        } else if (nums[0x1] == '?') {
            return ![];
        }
    }
});