process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (chunk) {
    g_input += chunk;
});
process['stdin']['on']('end', function () {
    Main(g_input['split'](/\r?\n/));
});
function Main(input) {
    var WMeDDI = {
        'LWwFf': function (x, y) {
            return x - y;
        },
        'jOBug': 'FESTIVAL'
    };
    console['log'](input[0x0]['slice'](0x0, WMeDDI['LWwFf'](input[0x0]['length'], WMeDDI['jOBug']['length'])));
    return 0x0;
}