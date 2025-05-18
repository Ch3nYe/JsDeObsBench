var a0_0x407916 = a0_0x5b3b;
function a0_0x5b3b(wqSBJL, key) {
    var stringArray = a0_0x2d16();
    a0_0x5b3b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b3b(wqSBJL, key);
}
function a0_0x2d16() {
    var _0x5c936b = [
        'split',
        'map',
        'forEach',
        'log',
        'readFileSync'
    ];
    a0_0x2d16 = function () {
        return _0x5c936b;
    };
    return a0_0x2d16();
}
function Main(input) {
    var _0x2cb9cf = a0_0x5b3b;
    input = input['split']('\x0a');
    var n = Math['pow'](0x3, input[0x0]);
    var sum = 0x1;
    var arr = input[0x1][_0x2cb9cf(0x0)]('\x20')[_0x2cb9cf(0x1)](Number);
    arr[_0x2cb9cf(0x2)](function (val) {
        if (val % 0x2 == 0x0)
            sum *= 0x2;
    });
    console[_0x2cb9cf(0x3)](n - sum);
}
Main(require('fs')[a0_0x407916(0x4)]('/dev/stdin', 'utf8')['trim']());