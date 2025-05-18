function a0_0x1519(GuzSHG, key) {
    var stringArray = a0_0x1548();
    a0_0x1519 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1519(GuzSHG, key);
}
function a0_0x1548() {
    var _0x593be2 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'push',
        'shift',
        'forEach',
        'indexOf',
        'log',
        'Yes'
    ];
    a0_0x1548 = function () {
        return _0x593be2;
    };
    return a0_0x1548();
}
var a0_0x19f9e5 = a0_0x1519;
var input = require('fs')['readFileSync'](a0_0x19f9e5(0x0), a0_0x19f9e5(0x1));
var Arr = input[a0_0x19f9e5(0x2)]()[a0_0x19f9e5(0x3)]('\x0a');
while (!![]) {
    var a = Arr['shift']();
    if (a == '0')
        break;
    var xy = [];
    for (var i = 0x0; i < a; i++)
        xy[a0_0x19f9e5(0x4)](Arr[a0_0x19f9e5(0x5)]());
    var b = Arr[a0_0x19f9e5(0x5)]();
    var news = [];
    for (var i = 0x0; i < b; i++)
        news[a0_0x19f9e5(0x4)](Arr[a0_0x19f9e5(0x5)]());
    var X = 0xa;
    var Y = 0xa;
    var XY = [];
    news[a0_0x19f9e5(0x6)](function (v) {
        var _0x480e9c = a0_0x1519;
        var arr = v[_0x480e9c(0x3)]('\x20');
        for (var i = 0x0; i < arr[0x1] - 0x0; i++) {
            if (arr[0x0] == 'N')
                Y++;
            if (arr[0x0] == 'E')
                X++;
            if (arr[0x0] == 'W')
                X--;
            if (arr[0x0] == 'S')
                Y--;
            XY[_0x480e9c(0x4)](X + '\x20' + Y);
        }
    });
    var flag = xy['every'](function (v) {
        var _0x35bdc8 = a0_0x1519;
        return XY[_0x35bdc8(0x7)](v) != -0x1;
    });
    console[a0_0x19f9e5(0x8)](flag ? a0_0x19f9e5(0x9) : 'No');
}