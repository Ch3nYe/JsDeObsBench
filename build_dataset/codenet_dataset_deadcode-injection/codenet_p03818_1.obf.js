function a0_0x37e9(gqofpT, key) {
    var stringArray = a0_0x27a4();
    a0_0x37e9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x37e9(gqofpT, key);
}
var a0_0x1e6ce8 = a0_0x37e9;
function Main(input) {
    var _0x2e65e1 = a0_0x37e9;
    var len = input[_0x2e65e1(0x0)]('\x0a')[0x0];
    var list = input['split']('\x0a')[0x1][_0x2e65e1(0x0)]('\x20');
    list['sort'](function (a, b) {
        return parseInt(a) - parseInt(b);
    });
    var b = list[_0x2e65e1(0x1)](function (x, i, self) {
        var _0xe51641 = a0_0x37e9;
        return self[_0xe51641(0x2)](x) === i;
    });
    if (b[_0x2e65e1(0x3)] % 0x2 == 0x1) {
        console[_0x2e65e1(0x4)](b['length']);
    } else {
        console[_0x2e65e1(0x4)](b[_0x2e65e1(0x3)] - 0x1);
    }
}
Main(require('fs')[a0_0x1e6ce8(0x5)](a0_0x1e6ce8(0x6), a0_0x1e6ce8(0x7)));
function a0_0x27a4() {
    var _0x364c62 = [
        'split',
        'filter',
        'indexOf',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x27a4 = function () {
        return _0x364c62;
    };
    return a0_0x27a4();
}