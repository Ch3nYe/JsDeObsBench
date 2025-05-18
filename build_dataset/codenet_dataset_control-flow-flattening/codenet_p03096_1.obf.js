'use strict';
function Main(input) {
    var JMGdkc = {
        'FyrgH': function (x, y) {
            return x < y;
        },
        'MIuXc': 'not\x20yet',
        'DJmJJ': function (x, y) {
            return x + y;
        },
        'TiUWt': function (x, y) {
            return x === y;
        },
        'JAqVa': function (x, y) {
            return x - y;
        },
        'YBPeb': function (x, y) {
            return x % y;
        }
    };
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    var N = input['shift']();
    var last = [];
    for (let i = 0x0; JMGdkc['FyrgH'](i, 0x1e8480); i++)
        last[i] = JMGdkc['MIuXc'];
    last[input[0x0]] = 0x0;
    var dp = [0x1];
    var M = JMGdkc['DJmJJ'](Math['pow'](0xa, 0x9), 0x7);
    for (let i = 0x1; JMGdkc['FyrgH'](i, N); i++) {
        let c = input[i];
        if (JMGdkc['TiUWt'](last[c], 'not\x20yet') || JMGdkc['TiUWt'](last[c], i - 0x1)) {
            last[c] = i;
            dp[i] = dp[JMGdkc['JAqVa'](i, 0x1)];
            continue;
        }
        dp[i] = JMGdkc['YBPeb'](JMGdkc['DJmJJ'](dp[JMGdkc['JAqVa'](i, 0x1)], dp[last[c]]), M);
        last[c] = i;
    }
    console['log'](dp['pop']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));