'use strict';
const main = arg => {
    const NNDlnz = {
        'nwNMR': function (callee, param1) {
            return callee(param1);
        },
        'Jxvqk': function (x, y) {
            return x !== y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = NNDlnz['nwNMR'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const S = arg[0x1]['split']('');
    const charset = new Set(S);
    const chars = [...charset];
    let answer = 0x0;
    for (let i in S) {
        const first = S['slice'](0x0, i);
        const last = S['slice'](i, S['length']);
        let temp = 0x0;
        for (let j in chars) {
            if (NNDlnz['Jxvqk'](first['indexOf'](chars[j]), -0x1) && last['indexOf'](chars[j]) !== -0x1) {
                temp++;
            }
        }
        answer = Math['max'](answer, temp);
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));