var a0_0x387512 = a0_0x5267;
(function (stringArrayFunction, comparisonValue) {
    var _0x26ea2a = a0_0x5267;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x26ea2a(0x74)) / 0x1 + parseInt(_0x26ea2a(0x6f)) / 0x2 + parseInt(_0x26ea2a(0x6c)) / 0x3 + parseInt(_0x26ea2a(0x71)) / 0x4 * (parseInt(_0x26ea2a(0x70)) / 0x5) + -parseInt(_0x26ea2a(0x6b)) / 0x6 * (parseInt(_0x26ea2a(0x6d)) / 0x7) + parseInt(_0x26ea2a(0x69)) / 0x8 + -parseInt(_0x26ea2a(0x68)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x580e, 0xe86c1));
function gcd(a, b) {
    if (b > a)
        return gcd(b, a);
    if (b == 0x0)
        return a;
    return gcd(b, a % b);
}
function a0_0x580e() {
    var _0x26c201 = [
        'split',
        'readFileSync',
        '121446ZJKAhy',
        '/dev/stdin',
        'utf8',
        '17956908hiwMoh',
        '9431472JVIFSy',
        'log',
        '24942QKVknF',
        '880149lBDWwy',
        '805QJXbbp',
        'trim',
        '1743658MnqRKt',
        '2670KJbhYa',
        '9008VQCMDB'
    ];
    a0_0x580e = function () {
        return _0x26c201;
    };
    return a0_0x580e();
}
function lcm(a, b) {
    var d = gcd(a, b);
    return a * b / d;
}
var input = require('fs')[a0_0x387512(0x73)](a0_0x387512(0x75), a0_0x387512(0x67))[a0_0x387512(0x6e)]();
var lines = input[a0_0x387512(0x72)]('\x0a');
var n = +lines['shift']();
var nums = lines['shift']()[a0_0x387512(0x72)]('\x20')['map'](function (num) {
    return +num;
});
function a0_0x5267(xehwbR, key) {
    var stringArray = a0_0x580e();
    a0_0x5267 = function (index, key) {
        index = index - 0x67;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5267(xehwbR, key);
}
var p = 0x1;
for (var i = 0x0; i < n; i++) {
    p = lcm(p, nums[i]);
}
console[a0_0x387512(0x6a)](p);