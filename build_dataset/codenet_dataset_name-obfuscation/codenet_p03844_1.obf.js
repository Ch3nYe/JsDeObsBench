process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (_0x7fd2c1) {
    input_stdin += _0x7fd2c1;
});
process['on']('SIGINT', function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
    process['exit']();
});
process['stdin']['on']('end', function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var _0x37c088 = readLine()['split']('\x20');
    var _0xed49db = parseInt(_0x37c088[0x0]);
    var _0xb42d61 = _0x37c088[0x1];
    var _0x2012f2 = parseInt(_0x37c088[0x2]);
    var _0x2e5e33;
    if (_0xb42d61 == '+') {
        _0x2e5e33 = _0xed49db + _0x2012f2;
    } else {
        _0x2e5e33 = _0xed49db - _0x2012f2;
    }
    console['log'](_0x2e5e33);
}