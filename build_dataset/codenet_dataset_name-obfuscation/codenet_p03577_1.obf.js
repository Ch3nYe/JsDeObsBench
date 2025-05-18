process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (_0x38e678) {
    g_input += _0x38e678;
});
process['stdin']['on']('end', function () {
    Main(g_input['split'](/\r?\n/));
});
function Main(_0xab20df) {
    console['log'](_0xab20df[0x0]['slice'](0x0, _0xab20df[0x0]['length'] - 'FESTIVAL'['length']));
    return 0x0;
}