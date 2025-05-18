var a0_0x381d14 = a0_0x1974;
(function (stringArrayFunction, comparisonValue) {
    var _0x82b43d = a0_0x1974;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x82b43d(0xd2)) / 0x1 + parseInt(_0x82b43d(0xd9)) / 0x2 + -parseInt(_0x82b43d(0xd8)) / 0x3 + -parseInt(_0x82b43d(0xce)) / 0x4 * (-parseInt(_0x82b43d(0xdc)) / 0x5) + parseInt(_0x82b43d(0xcb)) / 0x6 * (-parseInt(_0x82b43d(0xd0)) / 0x7) + parseInt(_0x82b43d(0xdb)) / 0x8 * (-parseInt(_0x82b43d(0xdd)) / 0x9) + -parseInt(_0x82b43d(0xd1)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x55bb, 0x46673));
process[a0_0x381d14(0xcc)][a0_0x381d14(0xda)]();
process[a0_0x381d14(0xcc)][a0_0x381d14(0xd3)](a0_0x381d14(0xd4));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process[a0_0x381d14(0xcc)]['on'](a0_0x381d14(0xd7), function (data) {
    input_stdin += data;
});
function a0_0x1974(axjeuZ, key) {
    var stringArray = a0_0x55bb();
    a0_0x1974 = function (index, key) {
        index = index - 0xcb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1974(axjeuZ, key);
}
process['stdin']['on'](a0_0x381d14(0xd5), function () {
    var _0x461a74 = a0_0x381d14;
    input_stdin_array = input_stdin[_0x461a74(0xcd)]('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function a0_0x55bb() {
    var _0x4f5867 = [
        'join',
        '666190PaKvQh',
        '5136240enUJhp',
        '505648TLcxEQ',
        'setEncoding',
        'ascii',
        'end',
        'write',
        'data',
        '245553xoLlKz',
        '420582ZaPYFA',
        'resume',
        '56jqNcLx',
        '15110jIiOdn',
        '159093ZwHhEd',
        '6kEozjj',
        'stdin',
        'split',
        '512wxwaEE'
    ];
    a0_0x55bb = function () {
        return _0x4f5867;
    };
    return a0_0x55bb();
}
function main() {
    var _0x5d2a23 = a0_0x381d14;
    var s = readLine();
    s = s[_0x5d2a23(0xcd)](',');
    s = s[_0x5d2a23(0xcf)]('\x20');
    process['stdout'][_0x5d2a23(0xd6)](s);
}