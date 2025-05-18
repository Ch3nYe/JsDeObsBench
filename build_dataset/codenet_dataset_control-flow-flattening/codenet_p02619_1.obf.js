'use strict';
function Main(input) {
    const BQARAw = {
        'NfXQb': function (callee, param1) {
            return callee(param1);
        },
        'DyqKD': function (x, y) {
            return x - y;
        },
        'hEWfS': function (x, y) {
            return x < y;
        },
        'ftQgi': function (x, y) {
            return x === y;
        },
        'NDKEZ': function (x, y) {
            return x - y;
        },
        'QTEXm': function (x, y) {
            return x * y;
        },
        'YmPcE': function (x, y) {
            return x - y;
        }
    };
    const tmp = input['trim']()['split']('\x0a');
    const D = BQARAw['NfXQb'](Number, tmp[0x0]);
    const C = tmp[0x1]['split']('\x20')['map'](v => Number(v));
    const S = tmp['slice'](0x2, 0x7)['map'](v => v['split']('\x20')['map'](v => Number(v)));
    const T = tmp['slice'](-0x5)['map'](v => Number(v));
    let LastContestDays = Array(0x1a)['fill'](0x0);
    let currnetContestLebels = BQARAw['NfXQb'](Array, 0x1a)['fill'](0x0);
    let lebel = 0x0;
    for (let i = 0x1; i <= D; i++) {
        LastContestDays[T[BQARAw['DyqKD'](i, 0x1)] - 0x1] = i;
        for (let j = 0x0; BQARAw['hEWfS'](j, C['length']); j++) {
            if (BQARAw['ftQgi'](LastContestDays[j], i)) {
                currnetContestLebels[j] = S[BQARAw['NDKEZ'](i, 0x1)][j];
            } else {
                currnetContestLebels[j] = BQARAw['QTEXm'](C[j] * BQARAw['YmPcE'](i, LastContestDays[j]), -0x1);
            }
        }
        lebel += currnetContestLebels['reduce']((acc, cur) => acc + cur);
        console['log'](BQARAw['NfXQb'](String, lebel));
    }
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));