function Main(input) {
    var JglyEO = {
        'ViUuw': function (x, y) {
            return x + y;
        },
        'hwzDa': function (x, y) {
            return x + y;
        },
        'Hhsga': function (x, y) {
            return x - y;
        },
        'WCrfY': function (x, y) {
            return x == y;
        },
        'fYZzc': function (x, y) {
            return x == y;
        },
        'LcJWX': function (x, y) {
            return x == y;
        },
        'lgNWj': function (x, y) {
            return x == y;
        },
        'DagSv': 'pon'
    };
    input = JglyEO['ViUuw'](JglyEO['hwzDa']('', input), '');
    input = input['substr'](JglyEO['Hhsga'](input['length'], 0x1), 0x1);
    var d = '';
    if (JglyEO['WCrfY'](input, 0x2) || JglyEO['WCrfY'](input, 0x4) || input == 0x5 || JglyEO['WCrfY'](input, 0x7) || JglyEO['fYZzc'](input, 0x9)) {
        d = 'hon';
    }
    if (JglyEO['LcJWX'](input, 0x0) || JglyEO['WCrfY'](input, 0x1) || JglyEO['WCrfY'](input, 0x6) || JglyEO['lgNWj'](input, 0x8)) {
        d = JglyEO['DagSv'];
    }
    if (input == 0x3) {
        d = 'bon';
    }
    console['log'](d);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));