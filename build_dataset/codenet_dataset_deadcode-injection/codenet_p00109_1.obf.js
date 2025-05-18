var a0_0x295827 = a0_0x5da2;
function a0_0x5da2(MEdTUh, key) {
    var stringArray = a0_0x3c4b();
    a0_0x5da2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5da2(MEdTUh, key);
}
function a0_0x3c4b() {
    var _0x18cbd3 = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'slice'
    ];
    a0_0x3c4b = function () {
        return _0x18cbd3;
    };
    return a0_0x3c4b();
}
var input = require('fs')[a0_0x295827(0x0)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x295827(0x1)]()[a0_0x295827(0x2)]('\x0a');
var L = Arr[a0_0x295827(0x3)]() - 0x0;
for (var i = 0x0; i < L; i++) {
    var str = Arr[i];
    str = str[a0_0x295827(0x4)](0x0, -0x1);
    var num = eval(str);
    console['log'](parseInt(num, 0xa));
}