function a0_0x512f() {
    var _0x13169e = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'length',
        'log'
    ];
    a0_0x512f = function () {
        return _0x13169e;
    };
    return a0_0x512f();
}
var a0_0x255c0d = a0_0x4d21;
function a0_0x4d21(EsdRJM, key) {
    var stringArray = a0_0x512f();
    a0_0x4d21 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d21(EsdRJM, key);
}
var input = require('fs')[a0_0x255c0d(0x0)](a0_0x255c0d(0x1), 'utf8');
var arr = input[a0_0x255c0d(0x2)]()['split']('\x0a');
var a = arr[0x0];
var b = arr[0x1];
var str = '';
for (var i = 0x0; i < a[a0_0x255c0d(0x3)]; i++) {
    var flag = !![];
    ;
    for (var j = 0x0; j < b[a0_0x255c0d(0x3)]; j++) {
        if (a[i + j] != b[j]) {
            flag = ![];
            break;
        }
    }
    if (flag)
        str += i + '\x0a';
}
console[a0_0x255c0d(0x4)](str);