function a0_0x2ca1(obpuHs, key) {
    var stringArray = a0_0x69f4();
    a0_0x2ca1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ca1(obpuHs, key);
}
var a0_0x535efe = a0_0x2ca1;
function gcd(a, b) {
    if (b > a)
        return gcd(b, a);
    if (b == 0x0)
        return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    var d = gcd(a, b);
    return a * b / d;
}
var input = require('fs')[a0_0x535efe(0x0)]('/dev/stdin', a0_0x535efe(0x1))[a0_0x535efe(0x2)]();
var lines = input[a0_0x535efe(0x3)]('\x0a');
var n = +lines[a0_0x535efe(0x4)]();
var nums = lines[a0_0x535efe(0x4)]()['split']('\x20')[a0_0x535efe(0x5)](function (num) {
    return +num;
});
function a0_0x69f4() {
    var _0x56a0bf = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x69f4 = function () {
        return _0x56a0bf;
    };
    return a0_0x69f4();
}
var p = 0x1;
for (var i = 0x0; i < n; i++) {
    p = lcm(p, nums[i]);
}
console[a0_0x535efe(0x6)](p);