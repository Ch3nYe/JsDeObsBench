var a0_0x36c5b9 = a0_0x2292;
process['stdin'][a0_0x36c5b9(0x0)]();
function a0_0x2292(IoOCaB, key) {
    var stringArray = a0_0x618e();
    a0_0x2292 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2292(IoOCaB, key);
}
process[a0_0x36c5b9(0x1)][a0_0x36c5b9(0x2)](a0_0x36c5b9(0x3));
var input_stdin = '';
function a0_0x618e() {
    var _0x87e8e2 = [
        'resume',
        'stdin',
        'setEncoding',
        'ascii',
        'data',
        'SIGINT',
        'split',
        'end',
        'log'
    ];
    a0_0x618e = function () {
        return _0x87e8e2;
    };
    return a0_0x618e();
}
var input_stdin_array = '';
var input_currentline = 0x0;
process[a0_0x36c5b9(0x1)]['on'](a0_0x36c5b9(0x4), function (data) {
    input_stdin += data;
});
process['on'](a0_0x36c5b9(0x5), function () {
    var _0x480b3f = a0_0x2292;
    input_stdin_array = input_stdin[_0x480b3f(0x6)]('\x0a');
    main();
    process['exit']();
});
process['stdin']['on'](a0_0x36c5b9(0x7), function () {
    var _0x5d9b99 = a0_0x2292;
    input_stdin_array = input_stdin[_0x5d9b99(0x6)]('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var _0x5f5da1 = a0_0x2292;
    var s = readLine()[_0x5f5da1(0x6)]('\x20');
    var a = parseInt(s[0x0]);
    var op = s[0x1];
    var b = parseInt(s[0x2]);
    var c;
    if (op == '+') {
        c = a + b;
    } else {
        c = a - b;
    }
    console[_0x5f5da1(0x8)](c);
}