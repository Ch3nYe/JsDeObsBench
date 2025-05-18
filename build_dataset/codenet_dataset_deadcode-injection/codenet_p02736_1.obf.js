var a0_0x3d3b04 = a0_0x155f;
function a0_0x155f(ccKgpa, key) {
    var stringArray = a0_0x1bb1();
    a0_0x155f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x155f(ccKgpa, key);
}
function a0_0x1bb1() {
    var _0x5ce0b8 = [
        'split',
        'length',
        'map',
        'abs',
        'push',
        'shift',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1bb1 = function () {
        return _0x5ce0b8;
    };
    return a0_0x1bb1();
}
function Main(input) {
    var _0x829115 = a0_0x155f;
    input = input[_0x829115(0x0)]('\x0a');
    for (i = 0x0; i < input[_0x829115(0x1)]; i = i + 0x2) {
        var N = parseInt(input[i]);
        var a = input[i + 0x1][_0x829115(0x0)]('');
        var aa = a[_0x829115(0x2)](Number);
        for (j = N; j > 0x1; j--) {
            for (k = 0x0; k < j; k++) {
                var e = Math[_0x829115(0x3)](aa[0x0] - aa[0x1]);
                aa[_0x829115(0x4)](e);
                aa[_0x829115(0x5)]();
            }
            aa['pop']();
        }
        console['log'](aa[0x0]);
    }
}
Main(require('fs')[a0_0x3d3b04(0x6)](a0_0x3d3b04(0x7), a0_0x3d3b04(0x8)));