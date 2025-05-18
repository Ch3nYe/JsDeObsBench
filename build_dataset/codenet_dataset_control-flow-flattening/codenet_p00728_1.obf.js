process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (line) {
    var HhKuXN = {
        'XexaG': function (callee, param1) {
            return callee(param1);
        }
    };
    HhKuXN['XexaG'](before, line);
});
var log = console['log'];
function before(line) {
    var lines = line['split']('\x0a');
    lines = lines['filter'](function (e) {
        return e !== '';
    });
    main(lines);
}
function main(lines) {
    var LmUtEX = {
        'SDSUt': function (callee, param1) {
            return callee(param1);
        },
        'fejVw': function (x, y) {
            return x + y;
        },
        'GoIPy': function (x, y) {
            return x > y;
        },
        'rlyAp': '7|6|5|2|0|4|1|3|8',
        'QNkat': function (x, y) {
            return x / y;
        }
    };
    var ls = lines['map'](function (e) {
        return LmUtEX['SDSUt'](Number, e);
    });
    while (LmUtEX['GoIPy'](ls['length'], 0x1)) {
        var wHCdAD = LmUtEX['rlyAp']['split']('|');
        var JnlMpv = 0x0;
        while (!![]) {
            switch (wHCdAD[JnlMpv++]) {
            case '0':
                arr['splice'](mid, 0x1);
                continue;
            case '1':
                arr['splice'](Mid, 0x1);
                continue;
            case '2':
                var mid = arr['indexOf'](Math['min']['apply'](this, arr));
                continue;
            case '3':
                var sum = arr['reduce'](function (p, c, i, a) {
                    return LmUtEX['fejVw'](p, c);
                });
                continue;
            case '4':
                var Mid = arr['indexOf'](Math['max']['apply'](this, arr));
                continue;
            case '5':
                ls = ls['slice'](tpl);
                continue;
            case '6':
                var arr = ls['slice'](0x0, tpl);
                continue;
            case '7':
                var tpl = ls['shift']();
                continue;
            case '8':
                LmUtEX['SDSUt'](log, Math['round'](LmUtEX['QNkat'](sum, arr['length'])));
                continue;
            }
            break;
        }
    }
}