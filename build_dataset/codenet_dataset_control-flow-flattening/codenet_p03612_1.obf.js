'use strict';
const main = arg => {
    const RfjpIW = {
        'UvVbD': function (callee, param1) {
            return callee(param1);
        },
        'rOoPl': function (x, y) {
            return x === y;
        },
        'HtvMg': function (x, y) {
            return x + y;
        },
        'sfgRs': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = RfjpIW['UvVbD'](parseInt, arg[0x0]);
    const P = arg[0x1]['split']('\x20')['map'](n => parseInt(n));
    let answer = 0x0;
    for (let i in P) {
        if (RfjpIW['rOoPl'](RfjpIW['HtvMg'](RfjpIW['UvVbD'](parseInt, i), 0x1), P[i])) {
            let temp = P[i];
            P[i] = P[RfjpIW['HtvMg'](RfjpIW['UvVbD'](parseInt, i), 0x1)];
            P[RfjpIW['sfgRs'](RfjpIW['UvVbD'](parseInt, i), 0x1)] = temp;
            answer++;
        }
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));