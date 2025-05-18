function a0_0x5773() {
    var _0x3105f7 = [
        'split',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5773 = function () {
        return _0x3105f7;
    };
    return a0_0x5773();
}
function a0_0x4367(YVFLEa, key) {
    var stringArray = a0_0x5773();
    a0_0x4367 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4367(YVFLEa, key);
}
var a0_0x1968af = a0_0x4367;
function Main(input) {
    var _0x28a347 = a0_0x4367;
    input = input[_0x28a347(0x0)]('\x0a');
    N = parseInt(input[0x0][_0x28a347(0x0)]('\x20'));
    var result = 0x0;
    for (var i = 0x1; i < N; i++) {
        result += Math[_0x28a347(0x1)]((N - 0x1) / i);
    }
    console[_0x28a347(0x2)]('%d', result);
}
Main(require('fs')[a0_0x1968af(0x3)](a0_0x1968af(0x4), a0_0x1968af(0x5)));