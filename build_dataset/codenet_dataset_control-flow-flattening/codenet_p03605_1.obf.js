process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (chunk) {
    g_input += chunk;
});
process['stdin']['on']('end', function () {
    var EQiCbd = {
        'DejMt': function (callee, param1) {
            return callee(param1);
        }
    };
    EQiCbd['DejMt'](Main, g_input['split'](/\r?\n/));
});
function Main(input) {
    var UfBrQY = {
        'Jrceu': function (x, y) {
            return x === y;
        },
        'lYiHy': 'Yes'
    };
    if (UfBrQY['Jrceu'](input[0x0][0x0], '9') || UfBrQY['Jrceu'](input[0x0][0x1], '9')) {
        console['log'](UfBrQY['lYiHy']);
    } else {
        console['log']('No');
    }
    return 0x0;
}