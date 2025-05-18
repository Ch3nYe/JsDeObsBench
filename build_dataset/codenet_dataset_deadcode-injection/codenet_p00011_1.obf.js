var a0_0x3b9bf9 = a0_0x2129;
function swap(A, a, b) {
    var tmp = A[a - 0x1];
    A[a - 0x1] = A[b - 0x1];
    A[b - 0x1] = tmp;
}
var input = require('fs')[a0_0x3b9bf9(0x0)](a0_0x3b9bf9(0x1), a0_0x3b9bf9(0x2));
var lines = input['split']('\x0a');
function a0_0x3044() {
    var _0x4bd405 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'split',
        'map',
        'log'
    ];
    a0_0x3044 = function () {
        return _0x4bd405;
    };
    return a0_0x3044();
}
var w = lines[a0_0x3b9bf9(0x3)]();
function a0_0x2129(YYEfUd, key) {
    var stringArray = a0_0x3044();
    a0_0x2129 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2129(YYEfUd, key);
}
var arr = [];
for (var i = 0x0; i < w; i++) {
    arr['push'](i + 0x1);
}
var n = lines[a0_0x3b9bf9(0x3)]();
for (var i = 0x0; i < n; i++) {
    var nums = lines[a0_0x3b9bf9(0x3)]()[a0_0x3b9bf9(0x4)](',')[a0_0x3b9bf9(0x5)](function (i) {
        return +i;
    });
    swap(arr, nums[0x0], nums[0x1]);
}
arr['forEach'](function (num) {
    var _0x4590a5 = a0_0x2129;
    console[_0x4590a5(0x6)](num);
});