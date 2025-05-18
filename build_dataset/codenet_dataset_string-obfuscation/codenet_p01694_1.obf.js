var a0_0x53a7ab = a0_0x17c2;
(function (stringArrayFunction, comparisonValue) {
    var _0x4841f6 = a0_0x17c2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4841f6(0x19d)) / 0x1 + -parseInt(_0x4841f6(0x19b)) / 0x2 + parseInt(_0x4841f6(0x197)) / 0x3 + parseInt(_0x4841f6(0x194)) / 0x4 * (parseInt(_0x4841f6(0x19c)) / 0x5) + parseInt(_0x4841f6(0x198)) / 0x6 + -parseInt(_0x4841f6(0x196)) / 0x7 * (parseInt(_0x4841f6(0x19e)) / 0x8) + -parseInt(_0x4841f6(0x193)) / 0x9 * (parseInt(_0x4841f6(0x199)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xe4ff, 0x8275d));
var input = require('fs')[a0_0x53a7ab(0x195)](a0_0x53a7ab(0x19f), a0_0x53a7ab(0x19a));
function a0_0x17c2(UJDCHn, key) {
    var stringArray = a0_0xe4ff();
    a0_0x17c2 = function (index, key) {
        index = index - 0x193;
        var value = stringArray[index];
        return value;
    };
    return a0_0x17c2(UJDCHn, key);
}
function a0_0xe4ff() {
    var _0x7c5629 = [
        '1629lSItOs',
        '5444geyJsR',
        'readFileSync',
        '7NUatoE',
        '2173332cjWWmq',
        '5396598iWthwM',
        '15700MlQvuJ',
        'utf8',
        '1734940FTaHro',
        '2245dZGsnz',
        '218550vxQnOw',
        '6140088mGrTrP',
        '/dev/stdin',
        'trim'
    ];
    a0_0xe4ff = function () {
        return _0x7c5629;
    };
    return a0_0xe4ff();
}
var arr = input[a0_0x53a7ab(0x1a0)]()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['shift']()['split']('\x20');
    var L = 0x0;
    var R = 0x0;
    var UD = 0x2;
    var cnt = 0x0;
    ary['forEach'](function (v) {
        if (v == 'lu')
            L = 0x1;
        else if (v == 'ru')
            R = 0x1;
        else if (v == 'ld')
            L = 0x0;
        else if (v == 'rd')
            R = 0x0;
        if (UD == L + R) {
            cnt++;
            UD = UD == 0x2 ? 0x0 : 0x2;
        }
    });
    console['log'](cnt);
}