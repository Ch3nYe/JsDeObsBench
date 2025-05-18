var a0_0x504d43 = a0_0x1a3a;
function a0_0x5367() {
    var _0x3e87c6 = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5367 = function () {
        return _0x3e87c6;
    };
    return a0_0x5367();
}
function a0_0x1a3a(UolZmY, key) {
    var stringArray = a0_0x5367();
    a0_0x1a3a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a3a(UolZmY, key);
}
function f(use, x, n, acc) {
    if (x > n)
        return acc;
    if (use === 0x7)
        acc += 0x1;
    acc += f(use | 0x1, x * 0xa + 0x3, n, 0x0);
    acc += f(use | 0x2, x * 0xa + 0x5, n, 0x0);
    acc += f(use | 0x4, x * 0xa + 0x7, n, 0x0);
    return acc;
}
function Main(input) {
    var _0x779a8f = a0_0x1a3a;
    var n = parseInt(input);
    console[_0x779a8f(0x0)](f(0x0, 0x0, n, 0x0));
}
Main(require('fs')[a0_0x504d43(0x1)](a0_0x504d43(0x2), a0_0x504d43(0x3)));