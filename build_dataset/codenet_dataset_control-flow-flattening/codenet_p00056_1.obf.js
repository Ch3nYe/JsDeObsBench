function main() {
    var JwAwSx = {
        'ZhcHI': function (x, y) {
            return x < y;
        },
        'ePUOf': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'vhhSt': function (x, y) {
            return x === y;
        },
        'YboFT': function (x, y) {
            return x % y;
        },
        'nzFlR': function (x, y) {
            return x / y;
        },
        'xcpLc': function (x, y) {
            return x <= y;
        },
        'HrmXu': function (x, y) {
            return x !== y;
        },
        'kEDDg': function (x, y) {
            return x - y;
        }
    };
    var i, j, n, m, x, len = input['length'];
    for (i = 0x0; JwAwSx['ZhcHI'](i, len); i++) {
        n = JwAwSx['ePUOf'](parseInt, input[i], 0xa);
        if (JwAwSx['vhhSt'](n, 0x0))
            break;
        if (JwAwSx['vhhSt'](JwAwSx['YboFT'](n, 0x2), 0x1)) {
            console['log'](0x0);
            continue;
        }
        m = ~~JwAwSx['nzFlR'](n, 0x2);
        for (x = 0x0, j = 0x0; JwAwSx['xcpLc'](primes[j], m); j++) {
            if (JwAwSx['HrmXu'](primes['indexOf'](JwAwSx['kEDDg'](n, primes[j])), -0x1))
                x++;
        }
        console['log'](x);
    }
}
var primes = function (n) {
    var JUQJme = {
        'DQExK': function (x, y) {
            return x < y;
        },
        'bhWos': function (x, y) {
            return x <= y;
        },
        'nLmcy': function (x, y) {
            return x * y;
        },
        'KPdRF': function (x, y) {
            return x == y;
        },
        'lgIvo': function (x, y) {
            return x % y;
        }
    };
    var i, j, flag, primes = [0x2];
    if (JUQJme['DQExK'](n, 0x2))
        return [];
    for (i = 0x3; JUQJme['bhWos'](i, n); i += 0x2) {
        flag = !![];
        for (j = 0x0; JUQJme['DQExK'](primes[j], JUQJme['nLmcy'](i, i)); j++) {
            if (JUQJme['KPdRF'](JUQJme['lgIvo'](i, primes[j]), 0x0)) {
                flag = ![];
                break;
            }
        }
        if (flag) {
            primes['push'](i);
        }
    }
    return primes;
}(0xc350);
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var qTTcRt = {
        'lUOSd': function (callee) {
            return callee();
        }
    };
    input = input['split']('\x0a');
    qTTcRt['lUOSd'](main);
});