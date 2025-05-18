function a0_0x1c70(VzKwiD, key) {
    var stringArray = a0_0x1431();
    a0_0x1c70 = function (index, key) {
        index = index - 0x1d2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c70(VzKwiD, key);
}
var a0_0x5e82e7 = a0_0x1c70;
(function (stringArrayFunction, comparisonValue) {
    var _0x58b6f2 = a0_0x1c70;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x58b6f2(0x1df)) / 0x1 + parseInt(_0x58b6f2(0x1e0)) / 0x2 * (parseInt(_0x58b6f2(0x1d5)) / 0x3) + -parseInt(_0x58b6f2(0x1dc)) / 0x4 + parseInt(_0x58b6f2(0x1dd)) / 0x5 * (-parseInt(_0x58b6f2(0x1db)) / 0x6) + -parseInt(_0x58b6f2(0x1d8)) / 0x7 + -parseInt(_0x58b6f2(0x1d3)) / 0x8 + -parseInt(_0x58b6f2(0x1d6)) / 0x9 * (-parseInt(_0x58b6f2(0x1d7)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1431, 0xd6e4a));
var input = require('fs')[a0_0x5e82e7(0x1da)](a0_0x5e82e7(0x1d2), a0_0x5e82e7(0x1de));
var x = input[a0_0x5e82e7(0x1d9)]() - 0x0;
var time = 0xc * 0x3c / 0x168 * x;
var h = (time - time % 0x3c) / 0x3c;
var m = time % 0x3c;
function a0_0x1431() {
    var _0x2ff988 = [
        '977088bjXhUP',
        '40UHOcqw',
        '/dev/stdin',
        '12388520WEsfCW',
        'log',
        '192297dIOLcz',
        '477dJPKut',
        '1028260Pvqxnz',
        '10200428rKCxBH',
        'trim',
        'readFileSync',
        '366iXGWJN',
        '4451392DnuEev',
        '61955ghuOXb',
        'utf8'
    ];
    a0_0x1431 = function () {
        return _0x2ff988;
    };
    return a0_0x1431();
}
console[a0_0x5e82e7(0x1d4)](h + '\x20' + m);