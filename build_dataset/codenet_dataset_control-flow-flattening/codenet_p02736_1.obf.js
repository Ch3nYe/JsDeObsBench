function Main(input) {
    var gjGTUD = {
        'TmUpE': function (x, y) {
            return x < y;
        },
        'wtvMw': function (x, y) {
            return x + y;
        },
        'bDHCz': function (x, y) {
            return x > y;
        },
        'wxJZr': function (x, y) {
            return x < y;
        },
        'mAQoQ': function (x, y) {
            return x - y;
        },
        'BRcgd': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['split']('\x0a');
    for (i = 0x0; gjGTUD['TmUpE'](i, input['length']); i = gjGTUD['wtvMw'](i, 0x2)) {
        var xnkEBL = '4|0|1|3|2'['split']('|');
        var ZBjXzh = 0x0;
        while (!![]) {
            switch (xnkEBL[ZBjXzh++]) {
            case '0':
                var a = input[gjGTUD['wtvMw'](i, 0x1)]['split']('');
                continue;
            case '1':
                var aa = a['map'](Number);
                continue;
            case '2':
                console['log'](aa[0x0]);
                continue;
            case '3':
                for (j = N; gjGTUD['bDHCz'](j, 0x1); j--) {
                    for (k = 0x0; gjGTUD['wxJZr'](k, j); k++) {
                        var e = Math['abs'](gjGTUD['mAQoQ'](aa[0x0], aa[0x1]));
                        aa['push'](e);
                        aa['shift']();
                    }
                    aa['pop']();
                }
                continue;
            case '4':
                var N = gjGTUD['BRcgd'](parseInt, input[i]);
                continue;
            }
            break;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));