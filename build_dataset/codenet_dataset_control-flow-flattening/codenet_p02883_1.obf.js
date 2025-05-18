function Main(input) {
    var yGcYhB = {
        'ZIVmF': function (x, y) {
            return x - y;
        },
        'qkBlK': function (x, y) {
            return x === y;
        },
        'zqVVd': function (x, y) {
            return x < y;
        },
        'IgGze': function (x, y) {
            return x * y;
        },
        'yNiou': function (x, y) {
            return x > y;
        },
        'cZPcr': function (x, y) {
            return x / y;
        },
        'ijFVG': function (x, y) {
            return x + y;
        },
        'Bapkk': function (x, y) {
            return x - y;
        },
        'puFyS': function (x, y) {
            return x <= y;
        }
    };
    input = input['split']('\x0a');
    if (yGcYhB['qkBlK'](input[input['length'] - 0x1], '')) {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const K = yGcYhB['ZIVmF'](input[0x0]['split']('\x20')[0x1], 0x0);
    var A = input[0x1]['split']('\x20')['map'](e => {
        return yGcYhB['ZIVmF'](e, 0x0);
    })['sort']((a, b) => {
        return yGcYhB['ZIVmF'](a, b);
    });
    var F = input[0x2]['split']('\x20')['map'](e => {
        return e - 0x0;
    })['sort']((a, b) => {
        return yGcYhB['ZIVmF'](b, a);
    });
    var possible = 0x0;
    for (var i = 0x0; yGcYhB['zqVVd'](i, N); i++) {
        possible = Math['max'](possible, yGcYhB['IgGze'](A[i], F[i]));
    }
    var impossible = -0x1;
    var temp;
    var sum;
    while (yGcYhB['yNiou'](yGcYhB['ZIVmF'](possible, impossible), 0x1)) {
        temp = Math['ceil'](yGcYhB['cZPcr'](yGcYhB['ijFVG'](impossible, possible), 0x2));
        sum = 0x0;
        for (var i = 0x0; yGcYhB['zqVVd'](i, N); i++) {
            sum += Math['max'](0x0, yGcYhB['Bapkk'](A[i], Math['floor'](temp / F[i])));
        }
        if (yGcYhB['puFyS'](sum, K)) {
            possible = temp;
        } else {
            impossible = temp;
        }
    }
    console['log'](possible);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));