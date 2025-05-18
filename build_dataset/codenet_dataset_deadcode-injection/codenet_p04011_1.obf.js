var a0_0x438c1b = a0_0x2568;
function a0_0x2568(UuQYWR, key) {
    var stringArray = a0_0x4986();
    a0_0x2568 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2568(UuQYWR, key);
}
process['stdin'][a0_0x438c1b(0x0)]();
function a0_0x4986() {
    var _0x1af6b3 = [
        'resume',
        'stdin',
        'setEncoding',
        'utf8',
        'split',
        'initial_answer',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4986 = function () {
        return _0x1af6b3;
    };
    return a0_0x4986();
}
process[a0_0x438c1b(0x1)][a0_0x438c1b(0x2)](a0_0x438c1b(0x3));
function Main(input) {
    var _0x5abed4 = a0_0x2568;
    var arg = input[_0x5abed4(0x4)]('\x0a');
    var line0 = arg[0x0][_0x5abed4(0x4)]('\x20');
    var line1 = arg[0x1][_0x5abed4(0x4)]('\x20');
    var line2 = arg[0x2][_0x5abed4(0x4)]('\x20');
    var line3 = arg[0x3][_0x5abed4(0x4)]('\x20');
    var input1 = Number(line0[0x0]);
    var input2 = Number(line1[0x0]);
    var input3 = Number(line2[0x0]);
    var input4 = Number(line3[0x0]);
    var ans = _0x5abed4(0x5);
    if (input1 < input2)
        console[_0x5abed4(0x6)](input3 * input1);
    else
        console[_0x5abed4(0x6)](input3 * input2 + (input1 - input2) * input4);
}
Main(require('fs')[a0_0x438c1b(0x7)](a0_0x438c1b(0x8), a0_0x438c1b(0x3)));