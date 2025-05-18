'use strict';
console['log'](function (args) {
    const YxMgWt = {
        'uhurt': function (x, y) {
            return x < y;
        },
        'hRCWv': function (x, y) {
            return x + y;
        },
        'DHMIC': function (x, y) {
            return x + y;
        },
        'gXOIt': function (callee, param1) {
            return callee(param1);
        },
        'VfWmC': function (x, y) {
            return x + y;
        },
        'MKbgL': function (x, y) {
            return x <= y;
        },
        'amPdP': function (x, y) {
            return x < y;
        },
        'mCinD': function (x, y) {
            return x + y;
        },
        'VlsEe': function (x, y) {
            return x - y;
        }
    };
    const tmp = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const N = tmp[0x0][0x0], M = tmp[0x0][0x1];
    const x = [], y = [];
    for (let i = 0x0; YxMgWt['uhurt'](i, M); i++) {
        x['push'](tmp[YxMgWt['hRCWv'](0x1, i)][0x0]);
        y['push'](tmp[YxMgWt['DHMIC'](0x1, i)][0x1]);
    }
    const dp = YxMgWt['gXOIt'](Array, YxMgWt['VfWmC'](M, 0x1))['fill'](0x0)['map'](_ => Array(N + 0x1)['fill'](0x0));
    for (let i = 0x1; YxMgWt['MKbgL'](i, M); i++) {
        for (let j = 0x0; YxMgWt['amPdP'](j, M); j++) {
            dp[i][y[j]] = Math['max'](dp[i][y[j]], YxMgWt['mCinD'](dp[YxMgWt['VlsEe'](i, 0x1)][x[j]], 0x1));
        }
    }
    return Math['max'](...dp[M])['toString']();
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));