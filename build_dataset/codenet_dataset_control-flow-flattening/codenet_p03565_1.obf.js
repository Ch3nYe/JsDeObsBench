'use strict';
function main(input) {
    const KUPUwk = {
        'PFazs': 'UNRESTORABLE',
        'jZtru': function (x, y) {
            return x - y;
        },
        'ZQSjW': function (x, y) {
            return x >= y;
        },
        'HvpMU': function (x, y) {
            return x == y;
        },
        'Jivti': function (x, y) {
            return x + y;
        },
        'oNtAe': function (x, y) {
            return x > y;
        },
        'cfDVW': function (x, y) {
            return x + y;
        },
        'ZZMlx': function (x, y) {
            return x < y;
        }
    };
    input = input['split'](/\n/);
    let S = input[0x0]['split']('');
    const T = input[0x1]['split']('');
    const us = KUPUwk['PFazs'];
    for (let i = KUPUwk['jZtru'](S['length'], T['length']); KUPUwk['ZQSjW'](i, 0x0); i--) {
        let x = 0x0;
        for (let j = 0x0; j < T['length']; j++) {
            if (S[i + j] == T[j] || KUPUwk['HvpMU'](S[KUPUwk['Jivti'](i, j)], '?')) {
            } else {
                x++;
                continue;
            }
        }
        if (KUPUwk['oNtAe'](x, 0x0))
            continue;
        for (let k = 0x0; k < T['length']; k++) {
            S[KUPUwk['cfDVW'](i, k)] = T[k];
        }
        for (let i = 0x0; KUPUwk['ZZMlx'](i, S['length']); i++) {
            S[i] = KUPUwk['HvpMU'](S[i], '?') ? 'a' : S[i];
        }
        console['log'](S = S['join'](''));
        return;
    }
    console['log'](us);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));