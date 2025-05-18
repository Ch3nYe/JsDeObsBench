var a0_0x4a5b93 = a0_0x4165;
function Main(input) {
    var _0x20091a = a0_0x4165;
    input = input['split']('\x20');
    var a = parseInt(input[0x0], 0xa);
    var b = parseInt(input[0x1], 0xa);
    var t = parseInt(input[0x2], 0xa);
    console[_0x20091a(0x0)]('%d', Math[_0x20091a(0x1)]((t + 0.5) / a) * b);
}
function a0_0x4165(nmHGPP, key) {
    var stringArray = a0_0x183b();
    a0_0x4165 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4165(nmHGPP, key);
}
function a0_0x183b() {
    var _0x288b5c = [
        'log',
        'floor',
        'utf8'
    ];
    a0_0x183b = function () {
        return _0x288b5c;
    };
    return a0_0x183b();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x4a5b93(0x2)));