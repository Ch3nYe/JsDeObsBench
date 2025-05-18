var a0_0x55400c = a0_0x20d5;
function a0_0x4f82() {
    var _0x5e2691 = [
        'split',
        'map',
        'log',
        'readFileSync',
        'utf8',
        'trim'
    ];
    a0_0x4f82 = function () {
        return _0x5e2691;
    };
    return a0_0x4f82();
}
function a0_0x20d5(kFxIVS, key) {
    var stringArray = a0_0x4f82();
    a0_0x20d5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20d5(kFxIVS, key);
}
function Main(input) {
    var _0x2a7a08 = a0_0x20d5;
    input = input[_0x2a7a08(0x0)]('\x0a')[_0x2a7a08(0x1)](Number);
    console[_0x2a7a08(0x2)]((input[0x0] + 0x1 - input[0x1]) * (input[0x0] + 0x1 - input[0x2]));
}
Main(require('fs')[a0_0x55400c(0x3)]('/dev/stdin', a0_0x55400c(0x4))[a0_0x55400c(0x5)]());