var a0_0x147c07 = a0_0x46f1;
function Main(s) {
    var _0x463ba2 = a0_0x46f1;
    s = s[_0x463ba2(0x0)]('\x20')[_0x463ba2(0x1)](a => +a);
    var n = s[0x0];
    var a = calc(s[0x1]);
    var b = calc(s[0x2]);
    var ans = [];
    var k = 0x0;
    for (var i = 0x0; i < 0x2 * n; i++)
        for (var j = 0x0; j < 0x2 * n; j++) {
            if (f(a, i, j) && f(b, i, j))
                ans[k++] = i + '\x20' + j;
            if (k === n * n) {
                console[_0x463ba2(0x2)](ans['join']('\x0a'));
                return;
            }
        }
}
function a0_0x3ab3() {
    var _0x2faa1e = [
        'split',
        'map',
        'log',
        'floor',
        'readFileSync',
        'utf8'
    ];
    a0_0x3ab3 = function () {
        return _0x2faa1e;
    };
    return a0_0x3ab3();
}
function calc(n) {
    var s = 0x1;
    while ((n & 0x3) === 0x0) {
        s++;
        n >>>= 0x2;
    }
    return [
        s,
        n & 0x1
    ];
}
function a0_0x46f1(nbtoZf, key) {
    var stringArray = a0_0x3ab3();
    a0_0x46f1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x46f1(nbtoZf, key);
}
function f(s, y, x) {
    var _0x9ba1d3 = a0_0x46f1;
    y = Math[_0x9ba1d3(0x3)](y / s[0x0]);
    if (!s[0x1])
        return !(y & 0x1);
    x = Math[_0x9ba1d3(0x3)](x / s[0x0]);
    return !(x + y & 0x1);
}
Main(require('fs')[a0_0x147c07(0x4)]('/dev/stdin', a0_0x147c07(0x5)));