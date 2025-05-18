'use strict';
function Main(input) {
    var pFlUtO = {
        'vsIHd': function (x, y) {
            return x - y;
        },
        'abgLg': function (x, y) {
            return x - y;
        },
        'clKBB': function (x, y) {
            return x + y;
        },
        'YWApM': function (x, y) {
            return x + y;
        },
        'XyRxy': function (x, y) {
            return x - y;
        },
        'YPJyk': function (x, y) {
            return x === y;
        },
        'PzNtq': function (x, y) {
            return x === y;
        },
        'WcyWn': function (x, y) {
            return x - y;
        },
        'gpoVb': function (x, y) {
            return x === y;
        },
        'MjFkx': function (x, y) {
            return x === y;
        },
        'mzsEP': function (x, y) {
            return x + y;
        },
        'xszyU': function (x, y) {
            return x + y;
        },
        'LtqrM': function (x, y) {
            return x + y;
        },
        'bdwqG': function (x, y) {
            return x === y;
        },
        'GtBgn': function (x, y) {
            return x + y;
        },
        'XmbFi': function (x, y) {
            return x + y;
        },
        'TVjlg': function (x, y) {
            return x + y;
        },
        'pMckK': 'YES'
    };
    input = input['split'](/\s+/);
    var H = pFlUtO['vsIHd'](input['shift'](), 0x0);
    var W = pFlUtO['vsIHd'](input['shift'](), 0x0);
    var N = pFlUtO['vsIHd'](input['shift'](), 0x0);
    var sr = pFlUtO['vsIHd'](input['shift'](), 0x0);
    var sc = pFlUtO['abgLg'](input['shift'](), 0x0);
    var S = input['shift']();
    var T = input['shift']();
    var dp = [[
            sc,
            sc,
            sr,
            sr
        ]];
    for (let i = 0x0; i < N; i++) {
        dp[pFlUtO['clKBB'](i, 0x1)] = [];
        dp[pFlUtO['YWApM'](i, 0x1)][0x0] = pFlUtO['XyRxy'](dp[i][0x0], pFlUtO['YPJyk'](S[i], 'L') ? 0x1 : 0x0);
        dp[pFlUtO['clKBB'](i, 0x1)][0x1] = pFlUtO['YWApM'](dp[i][0x1], pFlUtO['PzNtq'](S[i], 'R') ? 0x1 : 0x0);
        dp[pFlUtO['clKBB'](i, 0x1)][0x2] = pFlUtO['WcyWn'](dp[i][0x2], S[i] === 'U' ? 0x1 : 0x0);
        dp[i + 0x1][0x3] = pFlUtO['YWApM'](dp[i][0x3], pFlUtO['gpoVb'](S[i], 'D') ? 0x1 : 0x0);
        if (pFlUtO['MjFkx'](dp[i + 0x1][0x0], 0x0) || pFlUtO['MjFkx'](dp[pFlUtO['clKBB'](i, 0x1)][0x1], W + 0x1) || pFlUtO['PzNtq'](dp[pFlUtO['clKBB'](i, 0x1)][0x2], 0x0) || pFlUtO['MjFkx'](dp[pFlUtO['mzsEP'](i, 0x1)][0x3], H + 0x1)) {
            console['log']('NO');
            return;
        }
        dp[pFlUtO['clKBB'](i, 0x1)][0x0] = Math['min'](pFlUtO['xszyU'](dp[i + 0x1][0x0], pFlUtO['PzNtq'](T[i], 'R') ? 0x1 : 0x0), W);
        dp[pFlUtO['LtqrM'](i, 0x1)][0x1] = Math['max'](dp[i + 0x1][0x1] - (pFlUtO['bdwqG'](T[i], 'L') ? 0x1 : 0x0), 0x1);
        dp[pFlUtO['YWApM'](i, 0x1)][0x2] = Math['min'](pFlUtO['GtBgn'](dp[pFlUtO['LtqrM'](i, 0x1)][0x2], T[i] === 'D' ? 0x1 : 0x0), H);
        dp[pFlUtO['XmbFi'](i, 0x1)][0x3] = Math['max'](dp[pFlUtO['TVjlg'](i, 0x1)][0x3] - (pFlUtO['bdwqG'](T[i], 'U') ? 0x1 : 0x0), 0x1);
    }
    console['log'](pFlUtO['pMckK']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));