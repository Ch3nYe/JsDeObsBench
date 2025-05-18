var a0_0x2b96c1 = a0_0xd64a;
function a0_0xa802() {
    var _0x3df5ad = [
        'length',
        'readFileSync',
        'trim',
        'shift',
        'map',
        'push',
        'split',
        'sort',
        'reverse',
        'join',
        'indexOf',
        'log'
    ];
    a0_0xa802 = function () {
        return _0x3df5ad;
    };
    return a0_0xa802();
}
function str1(x) {
    var _0xc02062 = a0_0xd64a;
    x = x + '';
    while (x[_0xc02062(0x0)] != b)
        x = '0' + x;
    return x;
}
var input = require('fs')[a0_0x2b96c1(0x1)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x2b96c1(0x2)]()['split']('\x0a');
function a0_0xd64a(VHGyhP, key) {
    var stringArray = a0_0xa802();
    a0_0xd64a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd64a(VHGyhP, key);
}
while (!![]) {
    var ab = Arr[a0_0x2b96c1(0x3)]()['split']('\x20')[a0_0x2b96c1(0x4)](Number);
    if (ab[0x0] == 0x0 && ab[0x1] == 0x0)
        break;
    var str = ab[0x0] + '';
    var b = ab[0x1];
    var arr = [];
    str = str1(str);
    arr[a0_0x2b96c1(0x5)](str);
    var i = 0x0;
    while (!![]) {
        i++;
        var s = str[a0_0x2b96c1(0x6)]('');
        s[a0_0x2b96c1(0x7)](function (a, b) {
            return b - a;
        });
        var A = parseInt(s['join'](''), 0xa);
        var B = parseInt(s[a0_0x2b96c1(0x8)]()[a0_0x2b96c1(0x9)](''), 0xa);
        var C = A - B;
        var Cstr = str1(C);
        if (arr[a0_0x2b96c1(0xa)](Cstr) != -0x1)
            break;
        arr[a0_0x2b96c1(0x5)](Cstr);
        str = Cstr;
    }
    console[a0_0x2b96c1(0xb)](arr[a0_0x2b96c1(0xa)](Cstr) + '\x20' + parseInt(Cstr, 0xa) + '\x20' + (i - arr[a0_0x2b96c1(0xa)](Cstr)));
}