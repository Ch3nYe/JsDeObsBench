var a0_0x24fb10 = a0_0x22fa;
function main(input) {
    var _0x296fdc = a0_0x22fa;
    var N = input[0x0][_0x296fdc(0x0)]('\x20')[0x0] - 0x0;
    var M = input[0x0]['split']('\x20')[0x1] - 0x0;
    var list = input[0x1][_0x296fdc(0x0)]('\x20')[_0x296fdc(0x1)](v => v / 0x2);
    var l = lcm(list);
    console[_0x296fdc(0x2)](Math[_0x296fdc(0x3)](M / l) - Math[_0x296fdc(0x3)](M / (l * 0x2)));
}
function a0_0x2589() {
    var _0x31b853 = [
        'split',
        'map',
        'log',
        'trunc',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x2589 = function () {
        return _0x31b853;
    };
    return a0_0x2589();
}
function a0_0x22fa(XhXQNZ, key) {
    var stringArray = a0_0x2589();
    a0_0x22fa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x22fa(XhXQNZ, key);
}
function lcm(args) {
    var _0x192722 = a0_0x22fa;
    var a = args;
    var g = (n, m) => m ? g(m, n % m) : n;
    var l = (n, m) => n * m / g(n, m);
    var ans = a[0x0];
    for (var i = 0x1; i < a[_0x192722(0x4)]; i++) {
        ans = l(ans, a[i]);
    }
    return ans;
}
main(require('fs')[a0_0x24fb10(0x5)](a0_0x24fb10(0x6), a0_0x24fb10(0x7))[a0_0x24fb10(0x8)]()[a0_0x24fb10(0x0)]('\x0a'));