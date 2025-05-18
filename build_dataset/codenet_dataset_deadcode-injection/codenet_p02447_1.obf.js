var a0_0x1b5408 = a0_0x2f61;
function a0_0x16f5() {
    var _0x1ef69e = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'push',
        'sort',
        'log',
        'replace'
    ];
    a0_0x16f5 = function () {
        return _0x1ef69e;
    };
    return a0_0x16f5();
}
var input = require('fs')[a0_0x1b5408(0x0)](a0_0x1b5408(0x1), 'utf8');
var arr = input[a0_0x1b5408(0x2)]()[a0_0x1b5408(0x3)]('\x0a');
var n = arr[a0_0x1b5408(0x4)]() - 0x0;
var a = [];
function a0_0x2f61(nGTYZC, key) {
    var stringArray = a0_0x16f5();
    a0_0x2f61 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f61(nGTYZC, key);
}
for (var i = 0x0; i < n; i++)
    a[a0_0x1b5408(0x5)](arr[i][a0_0x1b5408(0x3)]('\x20')['map'](Number));
a[a0_0x1b5408(0x6)](function (a, b) {
    if (a[0x0] != b[0x0])
        return a[0x0] - b[0x0];
    else
        return a[0x1] - b[0x1];
});
console[a0_0x1b5408(0x7)](a['join']('\x0a')[a0_0x1b5408(0x8)](/,/g, '\x20'));