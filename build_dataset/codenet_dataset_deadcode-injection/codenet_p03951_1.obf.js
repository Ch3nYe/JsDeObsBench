function a0_0x3ff8() {
    var _0x2a2c18 = [
        'split',
        'min',
        'length',
        'substr',
        'log',
        'utf8',
        'trim'
    ];
    a0_0x3ff8 = function () {
        return _0x2a2c18;
    };
    return a0_0x3ff8();
}
var a0_0x5c8485 = a0_0x4b89;
function Main(input) {
    var _0x4c96c6 = a0_0x4b89;
    input = input[_0x4c96c6(0x0)]('\x0a');
    var n = Number(input[0x0]);
    var ans = 0x0;
    for (var i = Math[_0x4c96c6(0x1)](input[0x1][_0x4c96c6(0x2)], input[0x2][_0x4c96c6(0x2)]); i != 0x0; i--) {
        if (input[0x1]['substr'](-0x1 * i) == input[0x2][_0x4c96c6(0x3)](0x0, i) && input[0x1][_0x4c96c6(0x2)] + input[0x2][_0x4c96c6(0x2)] - i >= n) {
            ans = i;
            break;
        }
    }
    console[_0x4c96c6(0x4)]((input[0x1][_0x4c96c6(0x3)](0x0, input[0x1][_0x4c96c6(0x2)] - ans) + input[0x2])['length']);
}
function a0_0x4b89(pDicjQ, key) {
    var stringArray = a0_0x3ff8();
    a0_0x4b89 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b89(pDicjQ, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x5c8485(0x5))[a0_0x5c8485(0x6)]());