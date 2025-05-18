function a0_0x2380(EkeoDS, key) {
    var stringArray = a0_0x32e6();
    a0_0x2380 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2380(EkeoDS, key);
}
var a0_0x3c0f51 = a0_0x2380;
function Main(input) {
    var _0x2d020e = a0_0x2380;
    input = input[_0x2d020e(0x0)]()[_0x2d020e(0x1)]('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var RGBWithoutOrder = [
        0x1,
        0x0,
        0x0
    ];
    var tmp1, tmp2, flag;
    var ans = 0x3;
    for (var i = 0x1; i < N; i++) {
        tmp2 = 0x0;
        tmp1 = parseInt(input[0x1][i], 0xa);
        for (var x of RGBWithoutOrder) {
            if (x === tmp1)
                tmp2++;
        }
        ans *= tmp2;
        ans %= 0x3b9aca00 + 0x7;
        for (var j = 0x0; j < 0x3; j++) {
            if (RGBWithoutOrder[j] === tmp1) {
                RGBWithoutOrder[j]++;
                break;
            }
        }
    }
    console[_0x2d020e(0x2)](ans);
}
Main(require('fs')[a0_0x3c0f51(0x3)]('/dev/stdin', a0_0x3c0f51(0x4)));
function a0_0x32e6() {
    var _0x4bd43f = [
        'trim',
        'split',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x32e6 = function () {
        return _0x4bd43f;
    };
    return a0_0x32e6();
}