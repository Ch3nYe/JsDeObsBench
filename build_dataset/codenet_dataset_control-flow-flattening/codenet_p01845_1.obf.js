function Main(input) {
    var FKgFkY = {
        'PnbEP': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'xwZfb': function (x, y) {
            return x == y;
        },
        'SBjFV': function (x, y) {
            return x * y;
        },
        'FHjln': function (x, y) {
            return x - y;
        },
        'ZsUNM': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    for (var i = 0x0; 0x1; i++) {
        input[i] = input[i]['split']('\x20');
        var r0 = FKgFkY['PnbEP'](parseInt, input[i][0x0], 0xa);
        var w0 = FKgFkY['PnbEP'](parseInt, input[i][0x1], 0xa);
        var c = FKgFkY['PnbEP'](parseInt, input[i][0x2], 0xa);
        var r = parseInt(input[i][0x3], 0xa);
        if (r0 == 0x0 && w0 == 0x0 && c == 0x0 && FKgFkY['xwZfb'](r, 0x0))
            break;
        var a = FKgFkY['SBjFV'](c, w0);
        if (a <= r0)
            console['log']('0');
        else {
            console['log'](Math['floor'](FKgFkY['FHjln'](FKgFkY['ZsUNM'](FKgFkY['FHjln'](a, r0), r), 0x1) / r));
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));