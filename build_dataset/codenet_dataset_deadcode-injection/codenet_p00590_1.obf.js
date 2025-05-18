var a0_0x1d0ee0 = a0_0x4ad5;
function prime(max) {
    var _0x481554 = a0_0x4ad5;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x481554(0x0)](Math[_0x481554(0x1)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[arr[i]] = !![];
    }
    return result;
}
function a0_0x4ad5(OCKSTm, key) {
    var stringArray = a0_0x5eaa();
    a0_0x4ad5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ad5(OCKSTm, key);
}
var p = prime(0x2710);
function a0_0x5eaa() {
    var _0x2faad4 = [
        'floor',
        'sqrt',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'length',
        'push',
        'hasOwnProperty',
        'log'
    ];
    a0_0x5eaa = function () {
        return _0x2faad4;
    };
    return a0_0x5eaa();
}
var input = require('fs')[a0_0x1d0ee0(0x2)](a0_0x1d0ee0(0x3), a0_0x1d0ee0(0x4));
var Arr = input[a0_0x1d0ee0(0x5)]()['split']('\x0a')[a0_0x1d0ee0(0x6)](Number);
for (var i = 0x0; i < Arr[a0_0x1d0ee0(0x7)]; i++) {
    var a = Arr[i];
    var A = [];
    var B = [];
    for (var j = 0x1; j <= a; j++)
        A['push'](j);
    for (var j = a; j >= 0x1; j--)
        B[a0_0x1d0ee0(0x8)](j);
    var pair = 0x0;
    for (var j = 0x0; j < a; j++) {
        if (p[a0_0x1d0ee0(0x9)](A[j]) && p[a0_0x1d0ee0(0x9)](B[j]))
            pair++;
    }
    console[a0_0x1d0ee0(0xa)](pair);
}