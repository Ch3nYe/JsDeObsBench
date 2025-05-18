var line;
var S;
var MOD = Math['pow'](0xa, 0x9) + 0x7;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    line = x;
});
rl['on']('close', function () {
    var aUrgXt = {
        'vtMcA': function (callee, param1) {
            return callee(param1);
        },
        'fJYmx': function (x, y) {
            return x <= y;
        },
        'cvPTi': function (x, y) {
            return x + y;
        },
        'DfLVm': function (x, y) {
            return x >= y;
        },
        'VShbk': function (x, y) {
            return x === y;
        },
        'gOfzw': function (x, y) {
            return x * y;
        },
        'MmdRd': function (x, y) {
            return x + y;
        },
        'hibtZ': function (x, y) {
            return x < y;
        },
        'fpgmu': function (x, y) {
            return x === y;
        },
        'ZICox': 'ABC'
    };
    S = line['split']('');
    dp = aUrgXt['vtMcA'](Array, S['length'] + 0x1);
    for (var i = 0x0; aUrgXt['fJYmx'](i, S['length']); i++) {
        dp[i] = Array(aUrgXt['cvPTi'](0x3, 0x1))['fill'](0x0);
    }
    for (var i = S['length']; aUrgXt['DfLVm'](i, 0x0); i--) {
        for (var j = 0x3; aUrgXt['DfLVm'](j, 0x0); j--) {
            if (i === S['length']) {
                dp[i][j] = aUrgXt['VShbk'](j, 0x3) ? 0x1 : 0x0;
            } else {
                dp[i][j] = aUrgXt['gOfzw'](dp[aUrgXt['MmdRd'](i, 0x1)][j], aUrgXt['VShbk'](S[i], '?') ? 0x3 : 0x1);
                if (aUrgXt['hibtZ'](j, 0x3) && (aUrgXt['VShbk'](S[i], '?') || aUrgXt['fpgmu'](S[i], aUrgXt['ZICox'][j]))) {
                    dp[i][j] += dp[i + 0x1][aUrgXt['MmdRd'](j, 0x1)];
                }
                dp[i][j] %= MOD;
            }
        }
    }
    console['log'](dp[0x0][0x0]);
});