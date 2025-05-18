process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (_0x1959a0) {
    g_input += _0x1959a0;
});
process['stdin']['on']('end', function () {
    Main(g_input['split'](/\r?\n/));
});
function Main(_0x51445c) {
    if (_0x51445c[0x0][0x0] === '9' || _0x51445c[0x0][0x1] === '9') {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
    return 0x0;
}