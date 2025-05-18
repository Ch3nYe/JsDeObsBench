function Main(input) {
    var zKBFpX = {
        'BntZU': function (x, y) {
            return x < y;
        },
        'ULQGx': function (x, y) {
            return x > y;
        },
        'WSjmx': function (x, y) {
            return x - y;
        },
        'CaCkI': function (x, y) {
            return x + y;
        },
        'ovXxq': function (x, y) {
            return x == y;
        }
    };
    var data = input['split']('\x0a');
    var n = data[0x0];
    var a = data['slice'](0x1);
    for (var i = 0x0; zKBFpX['BntZU'](i, n); ++i) {
        var b = [];
        for (var j = 0x0; j < a['length']; j += 0x2) {
            if (zKBFpX['ULQGx'](a[j], a[j + 0x1])) {
                b['push'](zKBFpX['WSjmx'](a[j], a[zKBFpX['CaCkI'](j, 0x1)]));
            } else if (zKBFpX['ovXxq'](a[j], a[j + 0x1])) {
                b['push'](a[j]);
            } else {
                b['push'](zKBFpX['WSjmx'](a[zKBFpX['CaCkI'](j, 0x1)], a[j]));
            }
        }
        a = b;
    }
    console['log'](a[0x0]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));