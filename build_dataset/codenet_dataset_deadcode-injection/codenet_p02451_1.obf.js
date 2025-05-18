var a0_0x1321d3 = a0_0x23ad;
var input = require('fs')[a0_0x1321d3(0x0)](a0_0x1321d3(0x1), 'utf8');
var arr = input[a0_0x1321d3(0x2)]()[a0_0x1321d3(0x3)]('\x0a');
var n = arr[a0_0x1321d3(0x4)]() - 0x0;
var a = arr[a0_0x1321d3(0x4)]()[a0_0x1321d3(0x3)]('\x20');
var myMap = new Map();
for (var i = 0x0; i < n; i++) {
    myMap[a0_0x1321d3(0x5)](a[i], 0x0);
}
function a0_0x40c5() {
    var _0x4153f2 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'set',
        'log'
    ];
    a0_0x40c5 = function () {
        return _0x4153f2;
    };
    return a0_0x40c5();
}
var q = arr[a0_0x1321d3(0x4)]();
var s = '';
for (var i = 0x0; i < q; i++) {
    s += (myMap['has'](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
function a0_0x23ad(EetHjQ, key) {
    var stringArray = a0_0x40c5();
    a0_0x23ad = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23ad(EetHjQ, key);
}
console[a0_0x1321d3(0x6)](s[a0_0x1321d3(0x2)]());