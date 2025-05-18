var a0_0x2134d0 = a0_0x2b48;
function a0_0x2b48(yhybRA, key) {
    var stringArray = a0_0x3b41();
    a0_0x2b48 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b48(yhybRA, key);
}
function move(d1, d2, d3, d4, d5, d6) {
    var _0x48eff5 = a0_0x2b48;
    var x = this[_0x48eff5(0x0)]();
    if (x == 's')
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    else if (x == 'n')
        return [
            d5,
            d1,
            d3,
            d4,
            d6,
            d2
        ];
    else if (x == 'w')
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
    else if (x == 'e')
        return [
            d3,
            d2,
            d6,
            d1,
            d5,
            d4
        ];
}
var input = require('fs')['readFileSync'](a0_0x2134d0(0x1), a0_0x2134d0(0x2));
var arr = input[a0_0x2134d0(0x3)]()[a0_0x2134d0(0x4)]('\x0a');
function a0_0x3b41() {
    var _0x5187f7 = [
        'toString',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'apply',
        'log'
    ];
    a0_0x3b41 = function () {
        return _0x5187f7;
    };
    return a0_0x3b41();
}
while (!![]) {
    var n = arr[a0_0x2134d0(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var dice = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6
    ];
    while (n--) {
        var str = arr['shift']();
        dice = move[a0_0x2134d0(0x6)](str[0x0], dice);
    }
    console[a0_0x2134d0(0x7)](dice[0x0]);
}