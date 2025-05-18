function a0_0x3091() {
    var _0x4a752a = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3091 = function () {
        return _0x4a752a;
    };
    return a0_0x3091();
}
function a0_0xa5d0(AxjMrI, key) {
    var stringArray = a0_0x3091();
    a0_0xa5d0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa5d0(AxjMrI, key);
}
var a0_0x3d208e = a0_0xa5d0;
function Main(input) {
    var _0x9b96a1 = a0_0xa5d0;
    input = input[_0x9b96a1(0x0)]('\x20');
    var a = parseInt(input[0x0], 0xa);
    var b = parseInt(input[0x1], 0xa);
    var a_real = 0x1;
    var b_real = 0x1;
    var a_count = 0x1;
    var b_count = 0x1;
    var ans = 0x0;
    while (!![]) {
        while (!![]) {
            a_count++;
            a_real += a_count;
            b_count++;
            b_real += b_count;
            if (a_real > a) {
                break;
            }
        }
        while (!![]) {
            b_count++;
            b_real += b_count;
            if (b_real > b) {
                break;
            }
        }
        if (a_real - a == b_real - b) {
            break;
        }
    }
    ans = a_real - a;
    console[_0x9b96a1(0x1)](ans);
}
Main(require('fs')[a0_0x3d208e(0x2)](a0_0x3d208e(0x3), a0_0x3d208e(0x4)));