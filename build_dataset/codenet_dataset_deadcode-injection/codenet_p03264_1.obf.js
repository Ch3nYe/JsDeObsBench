function a0_0x21d2() {
    var _0x397c88 = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x21d2 = function () {
        return _0x397c88;
    };
    return a0_0x21d2();
}
var a0_0x3deabc = a0_0x4688;
function a0_0x4688(OeOiOv, key) {
    var stringArray = a0_0x21d2();
    a0_0x4688 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4688(OeOiOv, key);
}
function Main(input) {
    var _0x3e362c = a0_0x4688;
    var k = parseInt(input['split']('\x0a')[0x0], 0xa);
    var a = 0x0;
    var b = 0x0;
    for (i = 0x1; i <= k; i++) {
        if (i % 0x2 == 0x0) {
            a++;
        } else {
            b++;
        }
    }
    console[_0x3e362c(0x0)](a * b);
}
Main(require('fs')[a0_0x3deabc(0x1)](a0_0x3deabc(0x2), a0_0x3deabc(0x3)));