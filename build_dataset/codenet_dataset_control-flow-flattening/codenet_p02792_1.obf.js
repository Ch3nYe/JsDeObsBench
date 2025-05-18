'use strict';
const main = arg => {
    const wwWLUM = {
        'qjeRw': function (x, y) {
            return x < y;
        },
        'ozADJ': function (callee, param1) {
            return callee(param1);
        },
        'YcVBg': function (callee, param1) {
            return callee(param1);
        },
        'VXvDw': function (x, y) {
            return x - y;
        },
        'hCOYf': function (x, y) {
            return x < y;
        },
        'BdFkb': function (x, y) {
            return x * y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const cnt = [];
    for (let i = 0x0; wwWLUM['qjeRw'](i, 0xa); i++) {
        cnt['push'](new Array(0xa)['fill'](0x0));
    }
    for (let i = 0x1; i <= N; i++) {
        const S = String(i);
        const head = wwWLUM['ozADJ'](parseInt, S[0x0]);
        const tail = wwWLUM['YcVBg'](parseInt, S[wwWLUM['VXvDw'](S['length'], 0x1)]);
        cnt[head][tail]++;
    }
    let answer = 0x0;
    for (let i = 0x0; i < 0xa; i++) {
        for (let j = 0x0; wwWLUM['hCOYf'](j, 0xa); j++) {
            answer += wwWLUM['BdFkb'](cnt[i][j], cnt[j][i]);
        }
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));