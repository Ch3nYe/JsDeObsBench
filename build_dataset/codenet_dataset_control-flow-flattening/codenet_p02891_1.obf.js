'use strict';
const main = arg => {
    const cLYzoI = {
        'vDmql': function (callee, param1) {
            return callee(param1);
        },
        'kMYmk': function (x, y) {
            return x < y;
        },
        'FBnyK': function (x, y) {
            return x === y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const S = arg[0x0]['split']('');
    const K = cLYzoI['vDmql'](parseInt, arg[0x1]);
    let streakS = 0x0;
    for (let i = 0x1; cLYzoI['kMYmk'](i, S['length']); i++) {
        if (cLYzoI['FBnyK'](S[i], S[i - 0x1])) {
            streakS++;
            S[i] = '@';
        }
    }
    console['log'](S['length'] === 0x1 ? Math['floor'](K / 0x2) : streakS * K);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));