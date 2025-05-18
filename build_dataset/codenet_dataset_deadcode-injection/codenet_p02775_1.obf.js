function a0_0x34a4(zMKGpj, key) {
    var stringArray = a0_0x5c97();
    a0_0x34a4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x34a4(zMKGpj, key);
}
function a0_0x5c97() {
    var _0x16230b = [
        'split',
        'length',
        'pop',
        'min',
        'log',
        'utf8'
    ];
    a0_0x5c97 = function () {
        return _0x16230b;
    };
    return a0_0x5c97();
}
var a0_0x357add = a0_0x34a4;
function Main(input) {
    var _0x18f288 = a0_0x34a4;
    input = input[_0x18f288(0x0)]('\x0a');
    if (input[input[_0x18f288(0x1)] - 0x1] === '') {
        input[_0x18f288(0x2)]();
    }
    const N = input[0x0];
    var up = 0x1;
    var down = 0x0;
    var nup, ndown;
    for (var i = 0x0; i < N[_0x18f288(0x1)]; i++) {
        nup = Math[_0x18f288(0x3)](0x9 - N[i] + up, 0x1 + down + (N[i] - 0x0));
        ndown = Math['min'](0xa - N[i] + up, down + (N[i] - 0x0));
        up = nup;
        down = ndown;
    }
    console[_0x18f288(0x4)](down);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x357add(0x5)));