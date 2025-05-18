function Main(input) {
    var FhPRiN = {
        'AWyah': function (x, y) {
            return x + y;
        },
        'cvQMG': function (x, y) {
            return x === y;
        },
        'iqtiN': '1|3|2|4|0',
        'ccvjh': function (x, y) {
            return x !== y;
        },
        'FJiMe': function (x, y) {
            return x - y;
        },
        'NafLW': function (callee, param1) {
            return callee(param1);
        },
        'SnhIC': function (x, y) {
            return x - y;
        },
        'eOAzx': function (callee, param1) {
            return callee(param1);
        },
        'bkrzb': function (x, y) {
            return x - y;
        },
        'RXjsP': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    if (FhPRiN['cvQMG'](input[input['length'] - 0x1], '')) {
        input['pop']();
    }
    const N = FhPRiN['FJiMe'](input[0x0]['split']('\x20')[0x0], 0x0);
    const M = input[0x0]['split']('\x20')[0x1] - 0x0;
    var parent = new Array(FhPRiN['AWyah'](N, 0x1))['fill'](0x0);
    for (var i = 0x1; i <= M; i++) {
        if (FhPRiN['NafLW'](root, FhPRiN['SnhIC'](input[i]['split']('\x20')[0x0], 0x0)) !== root(FhPRiN['FJiMe'](input[i]['split']('\x20')[0x1], 0x0))) {
            parent[FhPRiN['eOAzx'](root, FhPRiN['FJiMe'](input[i]['split']('\x20')[0x1], 0x0))] = FhPRiN['bkrzb'](root(input[i]['split']('\x20')[0x0]), 0x0);
        }
    }
    console['log'](FhPRiN['RXjsP'](parent['reduce']((acc, cur) => {
        return FhPRiN['AWyah'](acc, FhPRiN['cvQMG'](cur, 0x0) ? 0x1 : 0x0);
    }, 0x0), 0x1));
    function root(node) {
        var hcWXBI = FhPRiN['iqtiN']['split']('|');
        var LtCrJc = 0x0;
        while (!![]) {
            switch (hcWXBI[LtCrJc++]) {
            case '0':
                return point;
            case '1':
                var array = [];
                continue;
            case '2':
                while (FhPRiN['ccvjh'](parent[point], 0x0)) {
                    array['push'](point);
                    point = parent[point];
                }
                continue;
            case '3':
                var point = node;
                continue;
            case '4':
                array['forEach'](e => {
                    parent[e] = point;
                });
                continue;
            }
            break;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));