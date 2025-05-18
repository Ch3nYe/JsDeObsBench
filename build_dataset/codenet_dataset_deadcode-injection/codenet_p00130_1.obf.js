var a0_0x251d95 = a0_0xf730;
var input = require('fs')[a0_0x251d95(0x0)](a0_0x251d95(0x1), a0_0x251d95(0x2));
var Arr = input['trim']()['split']('\x0a');
var L = Arr[a0_0x251d95(0x3)]();
function a0_0xf730(ywPHUq, key) {
    var stringArray = a0_0x5c98();
    a0_0xf730 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf730(ywPHUq, key);
}
function a0_0x5c98() {
    var _0x3c891d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'replace',
        'split',
        'forEach',
        'unshift',
        'length',
        'push',
        'join'
    ];
    a0_0x5c98 = function () {
        return _0x3c891d;
    };
    return a0_0x5c98();
}
for (var i = 0x0; i < L; i++) {
    var str = Arr[i];
    str = str[a0_0x251d95(0x4)](/\-\>/g, 'A');
    str = str['replace'](/\<\-/g, 'Z');
    var m = str[a0_0x251d95(0x5)]('');
    var arr = [m[0x0]];
    var n = 0x1;
    m[a0_0x251d95(0x6)](function (v) {
        var _0x28ea8b = a0_0xf730;
        if (v == 'A')
            n++;
        else if (v == 'Z')
            n--;
        else {
            if (n == 0x0) {
                arr[_0x28ea8b(0x7)](v);
                n = 0x1;
            }
            if (n > arr[_0x28ea8b(0x8)])
                arr[_0x28ea8b(0x9)](v);
        }
    });
    console['log'](arr[a0_0x251d95(0xa)](''));
}