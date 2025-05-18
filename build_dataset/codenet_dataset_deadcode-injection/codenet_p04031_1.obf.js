var a0_0x199302 = a0_0x30e6;
function a0_0x30e6(gjaxbB, key) {
    var stringArray = a0_0x3af9();
    a0_0x30e6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x30e6(gjaxbB, key);
}
function a0_0x3af9() {
    var _0x167a19 = [
        'log',
        'trim',
        'split',
        'length',
        'round',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3af9 = function () {
        return _0x167a19;
    };
    return a0_0x3af9();
}
function myout(text) {
    var _0x2049a9 = a0_0x30e6;
    console[_0x2049a9(0x0)](text);
}
function Main(input) {
    var _0x38a45f = a0_0x30e6;
    input = input[_0x38a45f(0x1)]()['split']('\x0a');
    var N = parseInt(input[0x0]);
    var list = input[0x1][_0x38a45f(0x2)]('\x20')['map'](a => Number(a));
    var ave;
    var sum = 0x0;
    var output = 0x0;
    for (var i = 0x0; i < list[_0x38a45f(0x3)]; i++) {
        sum += list[i];
    }
    ave = Math[_0x38a45f(0x4)](sum / N);
    for (var i = 0x0; i < list[_0x38a45f(0x3)]; i++) {
        output += Math['pow'](list[i] - ave, 0x2);
    }
    myout(output);
}
Main(require('fs')['readFileSync'](a0_0x199302(0x5), a0_0x199302(0x6))[a0_0x199302(0x1)]());