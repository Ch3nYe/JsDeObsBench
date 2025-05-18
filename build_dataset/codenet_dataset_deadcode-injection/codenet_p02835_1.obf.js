var a0_0x576c40 = a0_0x5d3d;
function a0_0x58cd() {
    var _0x4ae146 = [
        'split',
        'log',
        'bust',
        'win',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x58cd = function () {
        return _0x4ae146;
    };
    return a0_0x58cd();
}
function a0_0x5d3d(JxAnNL, key) {
    var stringArray = a0_0x58cd();
    a0_0x5d3d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5d3d(JxAnNL, key);
}
function Main(input) {
    var _0x3caa66 = a0_0x5d3d;
    input = input[_0x3caa66(0x0)]('\x20');
    tmp = parseInt(input[0x0]) + parseInt(input[0x1]) + parseInt(input[0x2]);
    if (tmp > 0x15) {
        console[_0x3caa66(0x1)](_0x3caa66(0x2));
    } else {
        console[_0x3caa66(0x1)](_0x3caa66(0x3));
    }
}
Main(require('fs')[a0_0x576c40(0x4)](a0_0x576c40(0x5), 'utf8'));