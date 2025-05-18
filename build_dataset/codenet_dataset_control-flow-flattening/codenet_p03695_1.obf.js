process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (chunk) {
    g_input += chunk;
});
process['stdin']['on']('end', function () {
    var JzXcoi = {
        'RthHE': function (callee, param1) {
            return callee(param1);
        }
    };
    JzXcoi['RthHE'](main, g_input['split'](/\r?\n/));
});
function main(inputs) {
    var EiSnSt = {
        'TLPus': function (callee, param1) {
            return callee(param1);
        },
        'UaALm': function (x, y) {
            return x < y;
        },
        'VaCUL': function (x, y) {
            return x < y;
        },
        'yaYjv': function (x, y) {
            return x * y;
        },
        'LSUlw': function (x, y) {
            return x + y;
        },
        'niqUJ': function (x, y) {
            return x == y;
        },
        'FPsUm': function (x, y) {
            return x > y;
        },
        'czVDI': function (x, y) {
            return x + y;
        },
        'vqQLX': function (x, y) {
            return x + y;
        }
    };
    var N = parseInt(inputs[0x0]);
    var rs = inputs[0x1]['split']('\x20')['map'](function (a) {
        return EiSnSt['TLPus'](parseInt, a);
    });
    var a = new Array(0x7)['fill'](![]);
    var a8 = 0x0;
    var count = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; EiSnSt['UaALm'](j, 0x9); j++) {
            if (j != 0x8) {
                if (EiSnSt['VaCUL'](rs[i], EiSnSt['yaYjv'](EiSnSt['LSUlw'](j, 0x1), 0x190))) {
                    if (!a[j]) {
                        a[j] = !![];
                        count += 0x1;
                    }
                    break;
                }
            } else {
                a8 += 0x1;
            }
        }
    }
    var min = count;
    if (EiSnSt['niqUJ'](min, 0x0) && EiSnSt['FPsUm'](N, 0x0)) {
        min = 0x1;
        if (EiSnSt['FPsUm'](a8, 0x0)) {
            a8 -= 0x1;
        }
    }
    var max = Math['min'](0x8, EiSnSt['LSUlw'](min, a8));
    console['log'](EiSnSt['czVDI'](EiSnSt['vqQLX']('' + min, '\x20'), max));
}