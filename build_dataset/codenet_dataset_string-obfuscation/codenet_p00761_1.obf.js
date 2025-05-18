var a0_0x413886 = a0_0x253d;
function a0_0x253d(fXgvcB, key) {
    var stringArray = a0_0x201f();
    a0_0x253d = function (index, key) {
        index = index - 0x130;
        var value = stringArray[index];
        return value;
    };
    return a0_0x253d(fXgvcB, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2c1ca6 = a0_0x253d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2c1ca6(0x140)) / 0x1 * (parseInt(_0x2c1ca6(0x142)) / 0x2) + -parseInt(_0x2c1ca6(0x146)) / 0x3 + -parseInt(_0x2c1ca6(0x138)) / 0x4 + parseInt(_0x2c1ca6(0x135)) / 0x5 + parseInt(_0x2c1ca6(0x145)) / 0x6 * (-parseInt(_0x2c1ca6(0x139)) / 0x7) + parseInt(_0x2c1ca6(0x137)) / 0x8 * (parseInt(_0x2c1ca6(0x132)) / 0x9) + parseInt(_0x2c1ca6(0x13a)) / 0xa * (parseInt(_0x2c1ca6(0x13e)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x201f, 0xd6845));
function str1(x) {
    var _0x232038 = a0_0x253d;
    x = x + '';
    while (x[_0x232038(0x133)] != b)
        x = '0' + x;
    return x;
}
function a0_0x201f() {
    var _0xbe720a = [
        'utf8',
        '6YqStlN',
        '3897747Guvzmb',
        'join',
        'push',
        '1197weXafv',
        'length',
        'split',
        '2059760gkWbZf',
        'log',
        '8824AwMsUT',
        '6459632sfiACv',
        '6494061mKLtJz',
        '2213930NYUrwj',
        'sort',
        'indexOf',
        'reverse',
        '132nCfsif',
        'map',
        '11WVaGmW',
        'trim',
        '273668GVoLSR',
        '/dev/stdin'
    ];
    a0_0x201f = function () {
        return _0xbe720a;
    };
    return a0_0x201f();
}
var input = require('fs')['readFileSync'](a0_0x413886(0x143), a0_0x413886(0x144));
var Arr = input[a0_0x413886(0x141)]()[a0_0x413886(0x134)]('\x0a');
while (!![]) {
    var ab = Arr['shift']()[a0_0x413886(0x134)]('\x20')[a0_0x413886(0x13f)](Number);
    if (ab[0x0] == 0x0 && ab[0x1] == 0x0)
        break;
    var str = ab[0x0] + '';
    var b = ab[0x1];
    var arr = [];
    str = str1(str);
    arr['push'](str);
    var i = 0x0;
    while (!![]) {
        i++;
        var s = str[a0_0x413886(0x134)]('');
        s[a0_0x413886(0x13b)](function (a, b) {
            return b - a;
        });
        var A = parseInt(s['join'](''), 0xa);
        var B = parseInt(s[a0_0x413886(0x13d)]()[a0_0x413886(0x130)](''), 0xa);
        var C = A - B;
        var Cstr = str1(C);
        if (arr[a0_0x413886(0x13c)](Cstr) != -0x1)
            break;
        arr[a0_0x413886(0x131)](Cstr);
        str = Cstr;
    }
    console[a0_0x413886(0x136)](arr[a0_0x413886(0x13c)](Cstr) + '\x20' + parseInt(Cstr, 0xa) + '\x20' + (i - arr[a0_0x413886(0x13c)](Cstr)));
}