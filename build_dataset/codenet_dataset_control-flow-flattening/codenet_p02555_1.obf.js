const main = input => {
    const nQeFIn = {
        'hNASL': function (x, y) {
            return x ** y;
        },
        'NeGcI': function (callee, param1) {
            return callee(param1);
        },
        'tAMDb': function (x, y) {
            return x < y;
        },
        'XPhjc': function (x, y) {
            return x - y;
        },
        'QzxMB': function (x, y) {
            return x >= y;
        },
        'pmrhQ': function (x, y) {
            return x % y;
        },
        'yCLXt': function (x, y) {
            return x + y;
        },
        'qasjt': function (x, y) {
            return x + y;
        },
        'VvPdI': function (x, y) {
            return x % y;
        }
    };
    const mod = nQeFIn['hNASL'](0xa, 0x9) + 0x7;
    const s = nQeFIn['NeGcI'](Number, input['trim']());
    const dp = [
        0x1,
        ...new Array(s)['fill'](0x0)
    ];
    for (let x = 0x3; nQeFIn['tAMDb'](x, dp['length']); x++) {
        let sum = 0x0;
        for (let i = nQeFIn['XPhjc'](x, 0x3); nQeFIn['QzxMB'](i, 0x0); i--) {
            sum = nQeFIn['pmrhQ'](nQeFIn['yCLXt'](sum, dp[i]), mod);
        }
        dp[x] = sum;
    }
    return console['log'](nQeFIn['qasjt'](nQeFIn['VvPdI'](dp[s], mod), mod) % mod);
};
process['env']['MYTEST'] ? process['env']['MYTEST'] === 'test' ? test() : main(require('fs')['readFileSync']('dev/stdin', 'utf8')) : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));