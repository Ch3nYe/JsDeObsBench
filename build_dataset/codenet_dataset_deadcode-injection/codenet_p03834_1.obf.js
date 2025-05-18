var a0_0x5a2981 = a0_0x4cae;
function a0_0x459b() {
    var _0xcc709e = [
        'stdin',
        'resume',
        'setEncoding',
        'ascii',
        'data',
        'end',
        'split',
        'join',
        'stdout'
    ];
    a0_0x459b = function () {
        return _0xcc709e;
    };
    return a0_0x459b();
}
process[a0_0x5a2981(0x0)][a0_0x5a2981(0x1)]();
process[a0_0x5a2981(0x0)][a0_0x5a2981(0x2)](a0_0x5a2981(0x3));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process[a0_0x5a2981(0x0)]['on'](a0_0x5a2981(0x4), function (data) {
    input_stdin += data;
});
function a0_0x4cae(yySNhu, key) {
    var stringArray = a0_0x459b();
    a0_0x4cae = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cae(yySNhu, key);
}
process['stdin']['on'](a0_0x5a2981(0x5), function () {
    var _0x2ba621 = a0_0x4cae;
    input_stdin_array = input_stdin[_0x2ba621(0x6)]('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var _0x56e20a = a0_0x4cae;
    var s = readLine();
    s = s[_0x56e20a(0x6)](',');
    s = s[_0x56e20a(0x7)]('\x20');
    process[_0x56e20a(0x8)]['write'](s);
}