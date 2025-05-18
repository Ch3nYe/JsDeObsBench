function a0_0x45cb(CHcYjZ, key) {
    var stringArray = a0_0x2d3c();
    a0_0x45cb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45cb(CHcYjZ, key);
}
var a0_0xd74d53 = a0_0x45cb;
function Main(input) {
    var _0x5c44f0 = a0_0x45cb;
    var input = input[_0x5c44f0(0x0)]('\x0a');
    const num = input[0x0];
    const arr = input[0x1]['split']('\x20');
    var a = 0x1;
    var b = 0x0;
    arr[_0x5c44f0(0x1)](i => a *= i);
    for (var i = 0x0; i < arr[_0x5c44f0(0x2)]; i++) {
        b += a / arr[i];
    }
    console[_0x5c44f0(0x3)](a / b);
}
Main(require('fs')[a0_0xd74d53(0x4)]('/dev/stdin', a0_0xd74d53(0x5)));
function a0_0x2d3c() {
    var _0x292170 = [
        'split',
        'forEach',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2d3c = function () {
        return _0x292170;
    };
    return a0_0x2d3c();
}