function a0_0x34c0(BsEQDA, key) {
    var stringArray = a0_0xce6e();
    a0_0x34c0 = function (index, key) {
        index = index - 0x140;
        var value = stringArray[index];
        return value;
    };
    return a0_0x34c0(BsEQDA, key);
}
var a0_0x4e6770 = a0_0x34c0;
function a0_0xce6e() {
    var _0x455b1d = [
        '5343600wRghBS',
        '13376TiFDpV',
        '729XtPvRO',
        '380fgIWIE',
        'utf8',
        'split',
        '10667430RjBNmx',
        'readFileSync',
        '80FWSmpO',
        'YES',
        '78296LglFJq',
        '605704DaOImM',
        '84KFlcMu',
        '82577wbekRz',
        '1514650bIxMZQ',
        'log'
    ];
    a0_0xce6e = function () {
        return _0x455b1d;
    };
    return a0_0xce6e();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3f9fa7 = a0_0x34c0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3f9fa7(0x145)) / 0x1 + parseInt(_0x3f9fa7(0x148)) / 0x2 * (-parseInt(_0x3f9fa7(0x149)) / 0x3) + parseInt(_0x3f9fa7(0x141)) / 0x4 * (parseInt(_0x3f9fa7(0x14a)) / 0x5) + -parseInt(_0x3f9fa7(0x147)) / 0x6 + -parseInt(_0x3f9fa7(0x143)) / 0x7 * (parseInt(_0x3f9fa7(0x142)) / 0x8) + parseInt(_0x3f9fa7(0x14d)) / 0x9 + parseInt(_0x3f9fa7(0x14f)) / 0xa * (parseInt(_0x3f9fa7(0x144)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xce6e, 0xc8fdc));
function Main(input) {
    var _0xdb093d = a0_0x34c0;
    tmp = input[_0xdb093d(0x14c)]('\x20');
    a = 0x0;
    b = 0x0;
    c = 0x0;
    d = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (tmp[i] == '1') {
            a = 0x1;
        }
        if (tmp[i] == '9') {
            b = 0x1;
        }
        if (tmp[i] == '7') {
            c = 0x1;
        }
        if (tmp[i] == '4') {
            d = 0x1;
        }
    }
    if (a == 0x1 && b == 0x1 && c == 0x1 && d == 0x1) {
        console[_0xdb093d(0x146)](_0xdb093d(0x140));
    } else {
        console[_0xdb093d(0x146)]('NO');
    }
}
Main(require('fs')[a0_0x4e6770(0x14e)]('/dev/stdin', a0_0x4e6770(0x14b)));