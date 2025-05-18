function Main(input) {
    var jHfNPr = {
        'hJhZR': '2|0|6|8|7|3|4|1|5',
        'VTGhW': function (x, y) {
            return x < y;
        },
        'PUdTM': function (x, y) {
            return x + y;
        },
        'OJYmK': function (x, y) {
            return x * y;
        },
        'tCNwq': function (callee, param1) {
            return callee(param1);
        },
        'yRuML': function (x, y) {
            return x > y;
        },
        'MXwAE': function (x, y) {
            return x + y;
        },
        'vAgIb': function (callee, param1) {
            return callee(param1);
        }
    };
    var mPnkhG = jHfNPr['hJhZR']['split']('|');
    var ilXWjq = 0x0;
    while (!![]) {
        switch (mPnkhG[ilXWjq++]) {
        case '0':
            tmp0 = input[0x0]['split']('\x20');
            continue;
        case '1':
            for (var i = 0x0; jHfNPr['VTGhW'](i, N); i++) {
                A = input[jHfNPr['PUdTM'](0x2, i)]['split']('\x20');
                var tmpSum = 0x0;
                for (var j = 0x0; jHfNPr['VTGhW'](j, M); j++) {
                    tmpSum += jHfNPr['OJYmK'](jHfNPr['tCNwq'](Number, A[j]), jHfNPr['tCNwq'](Number, B[j]));
                }
                if (jHfNPr['yRuML'](jHfNPr['MXwAE'](tmpSum, C), 0x0)) {
                    ans++;
                }
            }
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            B = input[0x1]['split']('\x20');
            continue;
        case '4':
            var ans = 0x0;
            continue;
        case '5':
            console['log'](ans);
            continue;
        case '6':
            N = jHfNPr['vAgIb'](Number, tmp0[0x0]);
            continue;
        case '7':
            C = Number(tmp0[0x2]);
            continue;
        case '8':
            M = Number(tmp0[0x1]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));