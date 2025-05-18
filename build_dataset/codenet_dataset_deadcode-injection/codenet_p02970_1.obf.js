function a0_0x1009(Ftgwap, key) {
    var stringArray = a0_0x14b8();
    a0_0x1009 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1009(Ftgwap, key);
}
var a0_0x1cfb61 = a0_0x1009;
function Main(input) {
    var _0x5d488f = a0_0x1009;
    var dataList = input[_0x5d488f(0x0)]('\x0a');
    var data = dataList[0x0][_0x5d488f(0x0)]('\x20');
    var n = data[0x0];
    var d = data[0x1];
    var checkNum = d * 0x2 + 0x1;
    var num = Math[_0x5d488f(0x1)](n / checkNum);
    var rest = n % checkNum;
    if (rest > 0x0)
        num += 0x1;
    console[_0x5d488f(0x2)](num);
}
function a0_0x14b8() {
    var _0x10d360 = [
        'split',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x14b8 = function () {
        return _0x10d360;
    };
    return a0_0x14b8();
}
Main(require('fs')[a0_0x1cfb61(0x3)](a0_0x1cfb61(0x4), a0_0x1cfb61(0x5)));