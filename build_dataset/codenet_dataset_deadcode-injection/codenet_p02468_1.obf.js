var a0_0x413596 = a0_0x1db4;
var input = require('fs')[a0_0x413596(0x0)](a0_0x413596(0x1), a0_0x413596(0x2))[a0_0x413596(0x3)]();
var nums = input[a0_0x413596(0x4)]('\x20')[a0_0x413596(0x5)](function (num) {
    return +num;
});
var n = nums[0x0];
var m = nums[0x1];
var mod = 0x1;
for (var i = 0x0; i < m; i++) {
    mod = mod * n % 0x3b9aca07;
}
function a0_0x1db4(FYOhql, key) {
    var stringArray = a0_0x570f();
    a0_0x1db4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1db4(FYOhql, key);
}
console[a0_0x413596(0x6)](mod);
function a0_0x570f() {
    var _0x212c51 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x570f = function () {
        return _0x212c51;
    };
    return a0_0x570f();
}