var a0_0x448ce2 = a0_0x2131;
function a0_0x2131(MtHDxF, key) {
    var stringArray = a0_0x164b();
    a0_0x2131 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2131(MtHDxF, key);
}
function a0_0x164b() {
    var _0x2fcfe8 = [
        'split',
        'map',
        'length',
        'indexOf',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x164b = function () {
        return _0x2fcfe8;
    };
    return a0_0x164b();
}
function Main(input) {
    var _0x44cb4e = a0_0x2131;
    var lines = input[_0x44cb4e(0x0)]('\x0a');
    var titles = lines[_0x44cb4e(0x1)](l => l[_0x44cb4e(0x0)]('\x20')[0x0])['splice'](0x1, lines[_0x44cb4e(0x2)] - 0x2);
    var sleptAt = titles[_0x44cb4e(0x3)](lines[lines[_0x44cb4e(0x2)] - 0x1]);
    var sum = 0x0;
    for (var i = sleptAt + 0x2; i < lines[_0x44cb4e(0x2)] - 0x1; i++) {
        sum += Number(lines[i][_0x44cb4e(0x0)]('\x20')[0x1]);
    }
    console[_0x44cb4e(0x4)](sum);
}
Main(require('fs')[a0_0x448ce2(0x5)]('/dev/stdin', a0_0x448ce2(0x6)));