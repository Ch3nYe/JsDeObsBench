process['stdin']['resume']();
process['stdin']['setEncoding']('ascii');
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on']('data', function (data) {
    input_stdin += data;
});
process['stdin']['on']('end', function () {
    var vMuAnE = {
        'LQZQI': function (callee) {
            return callee();
        }
    };
    input_stdin_array = input_stdin['split']('\x0a');
    vMuAnE['LQZQI'](main);
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var CSACij = {
        'dhqfy': function (callee) {
            return callee();
        }
    };
    var s = CSACij['dhqfy'](readLine);
    s = s['split'](',');
    s = s['join']('\x20');
    process['stdout']['write'](s);
}