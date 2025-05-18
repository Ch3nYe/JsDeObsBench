function a0_0x13c7(FLFgIg, key) {
    var stringArray = a0_0x6733();
    a0_0x13c7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x13c7(FLFgIg, key);
}
var a0_0x1ea803 = a0_0x13c7;
function Main(input) {
    var _0x20c980 = a0_0x13c7;
    var X = parseInt(input[_0x20c980(0x0)]('\x20')[0x0]);
    var Y = parseInt(input[_0x20c980(0x0)]('\x20')[0x1]);
    var Z = parseInt(input['split']('\x20')[0x2]);
    var N = 0x1;
    var x = 0x0;
    while (!![]) {
        x = N * Y + (N + 0x1) * Z;
        if (x > X)
            break;
        N++;
    }
    console[_0x20c980(0x1)](--N);
}
function a0_0x6733() {
    var _0xcbd35b = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x6733 = function () {
        return _0xcbd35b;
    };
    return a0_0x6733();
}
Main(require('fs')[a0_0x1ea803(0x2)](a0_0x1ea803(0x3), 'utf8'));