process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (_0x1dec88) {
    input_stdin += _0x1dec88;
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
    var _0x17aa75 = parseInt(readLine());
    var _0x19ccc7 = readLine()['split']('\x20');
    var _0x80ddab = [0x0];
    var _0x47b273 = 0x0;
    for (var _0xbab264 = 0x1; _0xbab264 <= _0x17aa75; _0xbab264++) {
        _0x80ddab['push'](parseInt(_0x19ccc7[_0xbab264 - 0x1]));
        _0x47b273 += _0x80ddab[_0xbab264];
    }
    var _0x440956 = parseInt(readLine());
    for (var _0x1dc95b = 0x0; _0x1dc95b < _0x440956; _0x1dc95b++) {
        _0x19ccc7 = readLine()['split']('\x20');
        var _0xbab264 = parseInt(_0x19ccc7[0x0]);
        var _0x5932c3 = parseInt(_0x19ccc7[0x1]);
        console['log'](_0x47b273 - _0x80ddab[_0xbab264] + _0x5932c3);
    }
}