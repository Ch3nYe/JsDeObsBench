const collatz = n => {
    const rWMSGE = {
        'QHHSt': function (x, y) {
            return x === y;
        },
        'zqCQD': function (x, y) {
            return x + y;
        },
        'BmmSb': function (x, y) {
            return x * y;
        }
    };
    if (rWMSGE['QHHSt'](n % 0x2, 0x0)) {
        n /= 0x2;
    } else {
        n = rWMSGE['zqCQD'](rWMSGE['BmmSb'](0x3, n), 0x1);
    }
    return n;
};
const main = stdin => {
    const PQuICZ = {
        'ZjzAu': function (callee, param1) {
            return callee(param1);
        },
        'xXLpH': function (x, y) {
            return x === y;
        },
        'TCOsL': function (x, y) {
            return x === y;
        },
        'PttOA': function (x, y) {
            return x === y;
        },
        'VDnfg': function (x, y) {
            return x !== y;
        }
    };
    const input = stdin['trim']()['split']('\x0a');
    const s = PQuICZ['ZjzAu'](parseInt, input[0x0]);
    if (PQuICZ['xXLpH'](s, 0x1) || PQuICZ['TCOsL'](s, 0x2) || PQuICZ['TCOsL'](s, 0x4)) {
        console['log'](0x4);
        return;
    }
    let tmp = s;
    let first = 0x0;
    let second = 0x0;
    for (let i = 0x1;; i++) {
        if (PQuICZ['xXLpH'](tmp, 0x4) && first === 0x0) {
            first = i;
        } else if (PQuICZ['PttOA'](tmp, 0x4) && PQuICZ['VDnfg'](first, 0x0)) {
            second = i;
            break;
        }
        tmp = collatz(tmp);
    }
    console['log'](second);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));