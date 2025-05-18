var a0_0x39ca82 = a0_0x56c7;
function Main(input) {
    var _0x38da7b = a0_0x56c7;
    input = input[_0x38da7b(0x0)]('\x20');
    ans = input[0x0] / input[0x1];
    num = 0x0;
    var a = Number[_0x38da7b(0x1)](ans);
    if (a === !![]) {
        ans = -0x1;
    } else {
        while (!![]) {
            num++;
            cal = input[0x0] * num / input[0x1];
            var b = Number['isInteger'](cal);
            if (b === !![]) {
                ans = input[0x0] * (num - 0x1);
                break;
            }
            if (input[0x0] > Math['pow'](0xa, 0x9) | input[0x1] > Math[_0x38da7b(0x2)](0xa, 0x9) | input[0x0] * (num - 0x1) > Math[_0x38da7b(0x2)](0xa, 0x12)) {
                ans = -0x1;
                break;
            }
        }
    }
    console['log'](ans);
}
function a0_0x56c7(RKoElx, key) {
    var stringArray = a0_0xa0e0();
    a0_0x56c7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x56c7(RKoElx, key);
}
function a0_0xa0e0() {
    var _0x5ce9dc = [
        'split',
        'isInteger',
        'pow',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xa0e0 = function () {
        return _0x5ce9dc;
    };
    return a0_0xa0e0();
}
Main(require('fs')[a0_0x39ca82(0x3)](a0_0x39ca82(0x4), a0_0x39ca82(0x5)));