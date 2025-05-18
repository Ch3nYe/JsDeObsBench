function Main(input) {
    var SOBtuR = {
        'XhuzP': function (x, y) {
            return x === y;
        },
        'fMEcS': function (x, y) {
            return x - y;
        },
        'ivNnq': function (x, y) {
            return x + y;
        },
        'ASPHU': function (x, y) {
            return x === y;
        },
        'UzzBe': function (x, y) {
            return x - y;
        },
        'gBgLy': function (x, y) {
            return x <= y;
        },
        'vTKgM': function (x, y) {
            return x < y;
        },
        'OoCGp': '1|5|4|0|2|3',
        'htQAC': function (x, y) {
            return x !== y;
        }
    };
    input = input['split']('\x0a');
    if (SOBtuR['ASPHU'](input[SOBtuR['fMEcS'](input['length'], 0x1)], '')) {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const M = SOBtuR['UzzBe'](input[0x0]['split']('\x20')[0x1], 0x0);
    var direct = [];
    for (var i = 0x0; SOBtuR['gBgLy'](i, N); i++) {
        direct['push']([]);
    }
    for (var i = 0x1; SOBtuR['vTKgM'](i, input['length']); i++) {
        direct[input[i]['split']('\x20')[0x0] - 0x0]['push'](SOBtuR['fMEcS'](input[i]['split']('\x20')[0x1], 0x0));
    }
    var memo = [];
    for (var i = 0x1; i <= N; i++) {
        memo['push']([i]);
    }
    var temp;
    var str;
    while (memo['length'] > 0x0) {
        var GPPfuc = SOBtuR['OoCGp']['split']('|');
        var CmFgye = 0x0;
        while (!![]) {
            switch (GPPfuc[CmFgye++]) {
            case '0':
                memo = temp['slice']();
                continue;
            case '1':
                str = '';
                continue;
            case '2':
                memo['forEach'](e => {
                    if (SOBtuR['XhuzP'](e[SOBtuR['fMEcS'](e['length'], 0x1)], e[0x0])) {
                        temp = e['slice']();
                        temp['shift']();
                        str = SOBtuR['ivNnq'](temp['length'], '\x0a') + temp['join']('\x0a');
                    }
                });
                continue;
            case '3':
                if (SOBtuR['htQAC'](str, '')) {
                    console['log'](str);
                    return;
                }
                continue;
            case '4':
                memo['forEach'](e => {
                    direct[e[e['length'] - 0x1]]['forEach'](f => {
                        temp['push'](e['concat']([f]));
                    });
                });
                continue;
            case '5':
                temp = [];
                continue;
            }
            break;
        }
    }
    console['log'](-0x1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));