var a0_0x304651 = a0_0x1630;
var input = require('fs')[a0_0x304651(0x0)](a0_0x304651(0x1), a0_0x304651(0x2));
var Arr = input['trim']()[a0_0x304651(0x3)]('\x0a');
function a0_0x1630(ELsonn, key) {
    var stringArray = a0_0x405c();
    a0_0x1630 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1630(ELsonn, key);
}
function a0_0x405c() {
    var _0x44529e = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'toString',
        'replace',
        'log'
    ];
    a0_0x405c = function () {
        return _0x44529e;
    };
    return a0_0x405c();
}
while (!![]) {
    var n = Arr[a0_0x304651(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var str = n[a0_0x304651(0x5)](0x8) + '';
    str = str['replace'](/7/g, '9');
    str = str['replace'](/6/g, '8');
    str = str['replace'](/5/g, '7');
    str = str[a0_0x304651(0x6)](/4/g, '5');
    console[a0_0x304651(0x7)](str);
}