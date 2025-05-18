function Main(input) {
    const UDhPar = {
        'pIvUZ': function (x, y) {
            return x - y;
        },
        'beKjI': function (x, y) {
            return x === y;
        },
        'kawud': function (x, y) {
            return x - y;
        },
        'BggUk': function (x, y) {
            return x === y;
        },
        'PfyKc': function (x, y) {
            return x - y;
        },
        'swOSy': function (x, y) {
            return x >= y;
        },
        'fEtuv': function (x, y) {
            return x - y;
        },
        'omfZP': function (x, y) {
            return x - y;
        },
        'CsByd': function (x, y) {
            return x - y;
        },
        'wUmzY': function (x, y) {
            return x - y;
        },
        'ssXXB': function (x, y) {
            return x + y;
        },
        'DzsHS': function (x, y) {
            return x !== y;
        },
        'EJuOG': function (x, y) {
            return x - y;
        },
        'AsMRP': function (x, y) {
            return x - y;
        },
        'hJRmG': function (x, y) {
            return x - y;
        },
        'mkTww': function (x, y) {
            return x - y;
        },
        'GiIwP': function (x, y) {
            return x + y;
        },
        'wqcWq': function (x, y) {
            return x - y;
        },
        'iSHAV': function (x, y) {
            return x - y;
        },
        'KytHy': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    if (UDhPar['beKjI'](input[UDhPar['kawud'](input['length'], 0x1)], '')) {
        input['pop']();
    }
    const N = UDhPar['kawud'](input[0x0]['split']('\x20')[0x0], 0x0);
    const Z = UDhPar['kawud'](input[0x0]['split']('\x20')[0x1], 0x0);
    const W = UDhPar['kawud'](input[0x0]['split']('\x20')[0x2], 0x0);
    const a = input[0x1]['split']('\x20')['map'](e => {
        return UDhPar['pIvUZ'](e, 0x0);
    });
    if (UDhPar['BggUk'](a['length'], 0x1)) {
        console['log'](Math['abs'](UDhPar['kawud'](W, a[0x0])));
        return;
    }
    var x, y;
    x = new Array(N);
    y = new Array(N);
    for (var i = UDhPar['PfyKc'](N, 0x1); UDhPar['swOSy'](i, 0x0); i--) {
        if (i === UDhPar['fEtuv'](N, 0x1)) {
            y[i] = Math['abs'](UDhPar['fEtuv'](a[UDhPar['fEtuv'](N, 0x1)], a[N - 0x2]));
            x[i] = Math['abs'](UDhPar['omfZP'](a[UDhPar['CsByd'](N, 0x1)], a[UDhPar['wUmzY'](N, 0x2)]));
            continue;
        }
        y[i] = Math['min'](...x['slice'](UDhPar['ssXXB'](i, 0x1)), UDhPar['DzsHS'](i, 0x0) ? Math['abs'](UDhPar['EJuOG'](a[UDhPar['kawud'](i, 0x1)], a[UDhPar['AsMRP'](N, 0x1)])) : Math['abs'](UDhPar['hJRmG'](Z, a[UDhPar['mkTww'](N, 0x1)])));
        x[i] = Math['max'](...y['slice'](UDhPar['GiIwP'](i, 0x1)), UDhPar['DzsHS'](i, 0x0) ? Math['abs'](UDhPar['mkTww'](a[UDhPar['wqcWq'](i, 0x1)], a[UDhPar['iSHAV'](N, 0x1)])) : Math['abs'](UDhPar['wUmzY'](W, a[UDhPar['KytHy'](N, 0x1)])));
    }
    console['log'](Math['max'](...x));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));