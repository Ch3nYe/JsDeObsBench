function a0_0x4a10() {
    var _0x1d2f2f = [
        '26bFZqGM',
        '946885cwyNCy',
        'log',
        'readFileSync',
        'Yes',
        '54690fNKeVZ',
        'length',
        '29790YJvqGd',
        'utf8',
        '9YwJxYA',
        '31920afmgxY',
        'split',
        '5651992HEaYuO',
        '3846924zWvdOO',
        '434SguadW',
        '2288GIHjwM',
        '203217NwBKGz'
    ];
    a0_0x4a10 = function () {
        return _0x1d2f2f;
    };
    return a0_0x4a10();
}
var a0_0x2b4007 = a0_0x1115;
function a0_0x1115(IiUNjC, key) {
    var stringArray = a0_0x4a10();
    a0_0x1115 = function (index, key) {
        index = index - 0x10e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1115(IiUNjC, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x37ffb1 = a0_0x1115;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x37ffb1(0x117)) / 0x1 * (-parseInt(_0x37ffb1(0x110)) / 0x2) + parseInt(_0x37ffb1(0x10f)) / 0x3 + parseInt(_0x37ffb1(0x11d)) / 0x4 + -parseInt(_0x37ffb1(0x111)) / 0x5 + parseInt(_0x37ffb1(0x115)) / 0x6 * (-parseInt(_0x37ffb1(0x11e)) / 0x7) + -parseInt(_0x37ffb1(0x11c)) / 0x8 * (parseInt(_0x37ffb1(0x119)) / 0x9) + -parseInt(_0x37ffb1(0x11a)) / 0xa * (-parseInt(_0x37ffb1(0x10e)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4a10, 0x97496));
function Main(input) {
    var _0x1e04c2 = a0_0x1115;
    var input = input[_0x1e04c2(0x11b)]('\x0a');
    var string = input[0x0];
    var c, f, Cfound = 0x0;
    for (var i = 0x0; i < string[_0x1e04c2(0x116)]; i++) {
        if (string[i] == 'C' && !Cfound) {
            c = i;
            Cfound++;
        }
        ;
        if (Cfound && string[i] == 'F') {
            f = i;
            return console['log'](_0x1e04c2(0x114));
        }
    }
    ;
    return console[_0x1e04c2(0x112)]('No');
}
Main(require('fs')[a0_0x2b4007(0x113)]('/dev/stdin', a0_0x2b4007(0x118)));