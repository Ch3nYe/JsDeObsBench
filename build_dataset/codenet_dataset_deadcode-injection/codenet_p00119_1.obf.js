var a0_0x5c9de3 = a0_0x4fb3;
var input = require('fs')['readFileSync'](a0_0x5c9de3(0x0), a0_0x5c9de3(0x1));
function a0_0x42d6() {
    var _0x1d33c8 = [
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'map',
        'push',
        'forEach',
        'reverse',
        'log'
    ];
    a0_0x42d6 = function () {
        return _0x1d33c8;
    };
    return a0_0x42d6();
}
var Arr = input['trim']()[a0_0x5c9de3(0x2)]('\x0a');
function a0_0x4fb3(qZcCIv, key) {
    var stringArray = a0_0x42d6();
    a0_0x4fb3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4fb3(qZcCIv, key);
}
var m = Arr[a0_0x5c9de3(0x3)]() - 0x0;
var n = Arr[a0_0x5c9de3(0x3)]() - 0x0;
var M = [];
var check = [];
for (var i = 0x0; i < m; i++)
    M[i] = [];
for (var i = 0x0; i < m; i++)
    check[i] = ![];
for (var i = 0x0; i < n; i++) {
    var v = Arr[a0_0x5c9de3(0x3)]()['split']('\x20')[a0_0x5c9de3(0x4)](Number);
    M[v[0x0] - 0x1][a0_0x5c9de3(0x5)](v[0x1] - 0x1);
}
var L = [];
for (var i = 0x0; i < m; i++) {
    visit(i);
}
function visit(x) {
    var _0x53370b = a0_0x4fb3;
    if (check[x] == !![])
        return;
    else
        check[x] = !![];
    M[x][_0x53370b(0x6)](function (v) {
        visit(v);
    });
    L[_0x53370b(0x5)](x);
}
L[a0_0x5c9de3(0x7)]();
L[a0_0x5c9de3(0x6)](function (v) {
    var _0x54493c = a0_0x4fb3;
    console[_0x54493c(0x8)](v + 0x1);
});