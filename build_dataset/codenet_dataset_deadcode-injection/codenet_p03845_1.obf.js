function a0_0x5ab3(GjcTOn, key) {
    var stringArray = a0_0x4b40();
    a0_0x5ab3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ab3(GjcTOn, key);
}
function a0_0x4b40() {
    var _0x1046cb = [
        'stdin',
        'resume',
        'ascii',
        'SIGINT',
        'end',
        'split',
        'push',
        'rMckf',
        'log'
    ];
    a0_0x4b40 = function () {
        return _0x1046cb;
    };
    return a0_0x4b40();
}
var a0_0x6c7d6 = a0_0x5ab3;
process[a0_0x6c7d6(0x0)][a0_0x6c7d6(0x1)]();
process['stdin']['setEncoding'](a0_0x6c7d6(0x2));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process[a0_0x6c7d6(0x0)]['on']('data', function (data) {
    input_stdin += data;
});
process['on'](a0_0x6c7d6(0x3), function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
    process['exit']();
});
process['stdin']['on'](a0_0x6c7d6(0x4), function () {
    var _0x31e3f1 = a0_0x5ab3;
    input_stdin_array = input_stdin[_0x31e3f1(0x5)]('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var _0x3cbff5 = a0_0x5ab3;
    var N = parseInt(readLine());
    var s = readLine()[_0x3cbff5(0x5)]('\x20');
    var T = [0x0];
    var sum = 0x0;
    for (var i = 0x1; i <= N; i++) {
        T[_0x3cbff5(0x6)](parseInt(s[i - 0x1]));
        sum += T[i];
    }
    var M = parseInt(readLine());
    for (var k = 0x0; k < M; k++) {
        if ('pYTxy' !== _0x3cbff5(0x7)) {
            s = readLine()[_0x3cbff5(0x5)]('\x20');
            var i = parseInt(s[0x0]);
            var x = parseInt(s[0x1]);
            console[_0x3cbff5(0x8)](sum - T[i] + x);
        } else {
            T[_0x3cbff5(0x6)](parseInt(s[i - 0x1]));
            sum += T[i];
        }
    }
}