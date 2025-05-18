'use strict';
(function (input) {
    const bltvcQ = {
        'OKSSm': function (x, y) {
            return x + y;
        },
        'RKOlW': function (x, y) {
            return x >= y;
        },
        'sjFAi': function (x, y) {
            return x - y;
        },
        'bMGbU': function (x, y) {
            return x === y;
        },
        'acePx': 'tbd',
        'KqHdW': function (x, y) {
            return x >= y;
        },
        'Lgznj': 'First',
        'NvLoO': 'Second'
    };
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    const N = input['shift']();
    const K = input['shift']();
    const A = input;
    const dp = new Array(bltvcQ['OKSSm'](K, 0x2))['fill']('tbd');
    dp[K + 0x1] = !![];
    for (let i = K + 0x1; bltvcQ['RKOlW'](i, 0x0); i--) {
        if (dp[i])
            if (dp[bltvcQ['sjFAi'](i, 0x1)] === !![]) {
                i--;
                continue;
            }
        for (let j = 0x1; j <= A[0x0]; j++)
            if (bltvcQ['RKOlW'](bltvcQ['sjFAi'](i, j), 0x0))
                if (bltvcQ['bMGbU'](dp[bltvcQ['sjFAi'](i, j)], bltvcQ['acePx']))
                    dp[bltvcQ['sjFAi'](i, j)] = ![];
        if (!dp[i])
            for (let a = 0x0; a < N; a++)
                if (bltvcQ['KqHdW'](i - A[a], 0x0))
                    dp[bltvcQ['sjFAi'](i, A[a])] = !![];
    }
    if (dp[0x0])
        console['log'](bltvcQ['Lgznj']);
    else
        console['log'](bltvcQ['NvLoO']);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));