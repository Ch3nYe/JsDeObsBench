function main(arg) {
    const nsOIcQ = {
        'ubPOg': function (callee, param1) {
            return callee(param1);
        },
        'LQoVX': function (x, y) {
            return x < y;
        },
        'zagbP': function (x, y) {
            return x + y;
        },
        'eIcFx': function (x, y) {
            return x == y;
        },
        'JVcep': function (x, y) {
            return x - y;
        },
        'vNhjJ': function (x, y) {
            return x * y;
        },
        'xkiIA': function (x, y) {
            return x - y;
        },
        'qXvvy': function (callee, param1) {
            return callee(param1);
        },
        'whDcc': function (x, y) {
            return x / y;
        },
        'wVTIN': function (x, y) {
            return x - y;
        },
        'IceTa': function (x, y) {
            return x * y;
        },
        'faPBD': function (x, y) {
            return x - y;
        },
        'SqfRI': function (x, y) {
            return x * y;
        },
        'cQhgC': function (x, y) {
            return x - y;
        }
    };
    let n = nsOIcQ['ubPOg'](Number, arg['split']('\x0a')[0x0]);
    let a = arg['split']('\x0a')[0x1]['split']('\x20')['map'](Number);
    let dp = [];
    for (let i = 0x0; i < n + 0x1; i++)
        dp[i] = 0x0;
    dp[0x0] = 0x3e8;
    let stock = 0x0;
    for (let i = 0x1; nsOIcQ['LQoVX'](i, nsOIcQ['zagbP'](n, 0x1)); i++) {
        if (nsOIcQ['eIcFx'](i, n)) {
            dp[i] = nsOIcQ['zagbP'](dp[nsOIcQ['JVcep'](i, 0x1)], nsOIcQ['vNhjJ'](stock, a[i - 0x1]));
        } else if (a[i] > a[nsOIcQ['xkiIA'](i, 0x1)]) {
            let addStock = nsOIcQ['qXvvy'](parseInt, nsOIcQ['whDcc'](dp[nsOIcQ['xkiIA'](i, 0x1)], a[i - 0x1]));
            dp[i] = dp[nsOIcQ['wVTIN'](i, 0x1)] - nsOIcQ['IceTa'](addStock, a[nsOIcQ['wVTIN'](i, 0x1)]);
            stock += addStock;
        } else {
            let rmStock = stock;
            dp[i] = nsOIcQ['zagbP'](dp[nsOIcQ['faPBD'](i, 0x1)], nsOIcQ['SqfRI'](rmStock, a[nsOIcQ['cQhgC'](i, 0x1)]));
            stock -= rmStock;
        }
    }
    console['log'](dp[n]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));