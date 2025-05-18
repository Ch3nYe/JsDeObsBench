(function (input) {
    var dNPsWD = {
        'xfAgD': function (callee, param1) {
            return callee(param1);
        },
        'DUAFl': function (x, y) {
            return x < y;
        },
        'LEWLt': function (callee, param1) {
            return callee(param1);
        }
    };
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = dNPsWD['xfAgD'](Number, p['shift']());
    for (var i = 0x0; dNPsWD['DUAFl'](i, n); i++) {
        var a = p['shift']()['split']('\x20')['map'](Number);
        console['log'](dNPsWD['LEWLt'](order, a));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function order(a) {
    var OTsdlv = {
        'GgfoE': '3|1|5|4|6|2|0',
        'vUeoR': 'YES',
        'frSpm': function (x, y) {
            return x > y;
        }
    };
    var AGNyle = OTsdlv['GgfoE']['split']('|');
    var OhYPqW = 0x0;
    while (!![]) {
        switch (AGNyle[OhYPqW++]) {
        case '0':
            return OTsdlv['vUeoR'];
        case '1':
            var x;
            continue;
        case '2':
            while (x = r['shift']()) {
                if (x > m) {
                    m = x;
                    continue;
                }
                return 'NO';
            }
            continue;
        case '3':
            var r = [];
            continue;
        case '4':
            while (x = a['shift']()) {
                if (OTsdlv['frSpm'](x, c)) {
                    c = x;
                    continue;
                }
                r['push'](x);
            }
            continue;
        case '5':
            var c = a['shift']();
            continue;
        case '6':
            var m = -Infinity;
            continue;
        }
        break;
    }
}