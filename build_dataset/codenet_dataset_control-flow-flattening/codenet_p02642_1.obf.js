function main(input) {
    var hSaqmV = {
        'NdIap': function (x, y) {
            return x + y;
        },
        'PCJtD': function (x, y) {
            return x ** y;
        },
        'AKSGU': function (x, y) {
            return x <= y;
        },
        'WEFsG': function (x, y) {
            return x === y;
        },
        'rCQYN': function (x, y) {
            return x + y;
        },
        'WChBU': function (x, y) {
            return x !== y;
        }
    };
    var a = input[0x1]['trim']()['split']('\x20')['map'](e => parseInt(e, 0xa));
    var a_max = hSaqmV['NdIap'](hSaqmV['PCJtD'](0xa, 0x6), 0x1);
    var dp = new Array(a_max + 0x1)['fill'](0x0);
    for (var i of a) {
        dp[i]++;
    }
    for (var i = 0x1; hSaqmV['AKSGU'](i, a_max); i++) {
        if (hSaqmV['WEFsG'](dp[i], 0x0)) {
            continue;
        }
        for (var j = hSaqmV['rCQYN'](i, i); j <= a_max; j += i) {
            if (hSaqmV['WChBU'](dp[j], 0x0)) {
                dp[j] = 0x0;
            }
        }
    }
    console['log'](dp['filter'](function (x) {
        return x == 0x1;
    })['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));