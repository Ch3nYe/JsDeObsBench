process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (_0xbae900) {
    input_stdin += _0xbae900;
});
process['stdin']['on']('end', function () {
    input_stdin_array = input_stdin['split']('\x0a');
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var _0x26bc8f = readLine();
    _0x26bc8f = _0x26bc8f['split'](',');
    _0x26bc8f = _0x26bc8f['join']('\x20');
    process['stdout']['write'](_0x26bc8f);
}