'use strict';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf-8');
let inputString = '';
let currentLine = 0x0;
process['stdin']['on']('data', inputStdin => {
    inputString += inputStdin;
});
process['stdin']['on']('end', _ => {
    const ZTotLw = {
        'TNbWo': function (callee) {
            return callee();
        }
    };
    inputString = inputString['split']('\x0a');
    ZTotLw['TNbWo'](main);
});
function readLine() {
    return inputString[currentLine++];
}
function F(N, A, B) {
    const eHYXSM = {
        'ZrMJa': function (callee, param1) {
            return callee(param1);
        },
        'WyIVe': function (x, y) {
            return x + y;
        },
        'nTynF': function (x, y) {
            return x <= y;
        },
        'uQGhw': function (x, y) {
            return x < y;
        },
        'xcAwz': function (x, y) {
            return x >= y;
        },
        'Xwsxh': function (x, y) {
            return x - y;
        }
    };
    let dp = eHYXSM['ZrMJa'](Array, eHYXSM['WyIVe'](N, 0x1))['fill'](0x0);
    for (let n = 0x0; eHYXSM['nTynF'](n, N); n++) {
        let x = n;
        for (let j = 0x0; eHYXSM['uQGhw'](j, 0x3); j++) {
            if (eHYXSM['xcAwz'](n, A[j])) {
                let y = eHYXSM['WyIVe'](dp[eHYXSM['Xwsxh'](n, A[j])], B[j]);
                if (eHYXSM['uQGhw'](x, y)) {
                    x = y;
                }
            }
        }
        dp[n] = x;
    }
    return dp[N];
}
function main() {
    const WrBquk = {
        'WFqLv': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'bdKWq': function (callee) {
            return callee();
        },
        'fWYXP': function (callee) {
            return callee();
        },
        'yzXUA': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const n = WrBquk['WFqLv'](parseInt, WrBquk['bdKWq'](readLine), 0xa);
    const a = WrBquk['fWYXP'](readLine)['split']('\x20')['map'](_ => parseInt(_, 0xa));
    const b = WrBquk['fWYXP'](readLine)['split']('\x20')['map'](_ => parseInt(_, 0xa));
    let n1 = F(n, a, b);
    let n2 = WrBquk['yzXUA'](F, n1, b, a);
    console['log'](n2);
}