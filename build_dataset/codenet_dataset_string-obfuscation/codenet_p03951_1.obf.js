var a0_0x4fe4c3 = a0_0x2159;
function a0_0x2159(zfAIBp, key) {
    var stringArray = a0_0x1eb7();
    a0_0x2159 = function (index, key) {
        index = index - 0x114;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2159(zfAIBp, key);
}
function a0_0x1eb7() {
    var _0x4ca21d = [
        'split',
        '1142260oQyBxQ',
        'length',
        'substr',
        'min',
        'utf8',
        '4188860dSyiqW',
        '3824760vDdGrP',
        '412fVgXjO',
        '9cbPkat',
        '5173msdHqy',
        'trim',
        '33467210sXIyoJ',
        'readFileSync',
        '/dev/stdin',
        '12QYMAbx',
        '721203pHwRGo',
        'log',
        '987705aldwVV'
    ];
    a0_0x1eb7 = function () {
        return _0x4ca21d;
    };
    return a0_0x1eb7();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x517f6a = a0_0x2159;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x517f6a(0x119)) / 0x1 * (parseInt(_0x517f6a(0x117)) / 0x2) + -parseInt(_0x517f6a(0x121)) / 0x3 + -parseInt(_0x517f6a(0x123)) / 0x4 + -parseInt(_0x517f6a(0x115)) / 0x5 + parseInt(_0x517f6a(0x11e)) / 0x6 * (parseInt(_0x517f6a(0x11f)) / 0x7) + parseInt(_0x517f6a(0x116)) / 0x8 * (-parseInt(_0x517f6a(0x118)) / 0x9) + parseInt(_0x517f6a(0x11b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1eb7, 0x87dba));
function Main(input) {
    var _0x39ec30 = a0_0x2159;
    input = input[_0x39ec30(0x122)]('\x0a');
    var n = Number(input[0x0]);
    var ans = 0x0;
    for (var i = Math[_0x39ec30(0x126)](input[0x1][_0x39ec30(0x124)], input[0x2][_0x39ec30(0x124)]); i != 0x0; i--) {
        if (input[0x1]['substr'](-0x1 * i) == input[0x2]['substr'](0x0, i) && input[0x1][_0x39ec30(0x124)] + input[0x2][_0x39ec30(0x124)] - i >= n) {
            ans = i;
            break;
        }
    }
    console[_0x39ec30(0x120)]((input[0x1][_0x39ec30(0x125)](0x0, input[0x1][_0x39ec30(0x124)] - ans) + input[0x2])[_0x39ec30(0x124)]);
}
Main(require('fs')[a0_0x4fe4c3(0x11c)](a0_0x4fe4c3(0x11d), a0_0x4fe4c3(0x114))[a0_0x4fe4c3(0x11a)]());