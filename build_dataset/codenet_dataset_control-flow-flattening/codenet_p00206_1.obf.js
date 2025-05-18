function main() {
    var QAuRtu = {
        'uZjvx': function (callee, param1) {
            return callee(param1);
        },
        'qxrFA': function (x, y) {
            return x < y;
        },
        'mvKPs': function (x, y) {
            return x - y;
        },
        'kvoEb': function (x, y) {
            return x <= y;
        }
    };
    var i = 0x0, j, flag, L, MN;
    for (;;) {
        L = QAuRtu['uZjvx'](Number, input[i++]);
        if (L === 0x0)
            break;
        flag = !![];
        for (j = 0x0; QAuRtu['qxrFA'](j, 0xc); j++) {
            MN = input[i++]['split']('\x20')['map'](Number);
            L -= QAuRtu['mvKPs'](MN[0x0], MN[0x1]);
            if (flag && QAuRtu['kvoEb'](L, 0x0)) {
                console['log'](j + 0x1);
                flag = ![];
            }
        }
        if (flag)
            console['log']('NA');
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});