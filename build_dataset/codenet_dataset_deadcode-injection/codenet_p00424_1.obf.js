function a0_0x2f79() {
    var _0x659c2 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'length',
        'shift',
        'split',
        'slice',
        'log'
    ];
    a0_0x2f79 = function () {
        return _0x659c2;
    };
    return a0_0x2f79();
}
var a0_0x2113a9 = a0_0x38cd;
function a0_0x38cd(HhAGwt, key) {
    var stringArray = a0_0x2f79();
    a0_0x38cd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38cd(HhAGwt, key);
}
var input = require('fs')[a0_0x2113a9(0x0)](a0_0x2113a9(0x1), a0_0x2113a9(0x2));
var Arr = input[a0_0x2113a9(0x3)]()['split']('\x0a');
while (Arr[a0_0x2113a9(0x4)] > 0x1) {
    var AL = Arr[a0_0x2113a9(0x5)]();
    var hash = {};
    for (var i = 0x0; i < AL; i++) {
        var arr = Arr[i][a0_0x2113a9(0x3)]()[a0_0x2113a9(0x6)]('\x20');
        hash[arr[0x0]] = arr[0x1];
    }
    Arr = Arr[a0_0x2113a9(0x7)](AL, Arr[a0_0x2113a9(0x4)] + 0x1);
    var AL = Arr['shift']();
    var str = '';
    for (var i = 0x0; i < AL; i++) {
        var k = Arr[i][a0_0x2113a9(0x3)]();
        str += hash['hasOwnProperty'](k) ? hash[k] : k;
    }
    Arr = Arr[a0_0x2113a9(0x7)](AL, Arr[a0_0x2113a9(0x4)] + 0x1);
    console[a0_0x2113a9(0x8)](str);
    if (Arr[0x0] == '0')
        break;
}