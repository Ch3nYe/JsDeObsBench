function a0_0x327b() {
    var _0x347ea4 = [
        'split',
        'map',
        'max',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x327b = function () {
        return _0x347ea4;
    };
    return a0_0x327b();
}
function a0_0xe61e(ITJdOB, key) {
    var stringArray = a0_0x327b();
    a0_0xe61e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe61e(ITJdOB, key);
}
var a0_0x30c7ce = a0_0xe61e;
function Main(inp) {
    var _0x5c10fd = a0_0xe61e;
    var input = inp[_0x5c10fd(0x0)]('\x0a')[0x0]['split']('\x20')[_0x5c10fd(0x1)](function (n) {
        return Number(n);
    });
    var start = Math[_0x5c10fd(0x2)](input[0x0], input[0x2]);
    var end = Math[_0x5c10fd(0x3)](input[0x1], input[0x3]);
    var overlap = Math[_0x5c10fd(0x2)](0x0, end - start);
    console[_0x5c10fd(0x4)](overlap);
}
Main(require('fs')[a0_0x30c7ce(0x5)](a0_0x30c7ce(0x6), a0_0x30c7ce(0x7)));