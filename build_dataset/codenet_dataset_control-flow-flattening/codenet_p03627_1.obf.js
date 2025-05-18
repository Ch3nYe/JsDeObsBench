'use strict';
const main = arg => {
    const HdFNKv = {
        'lFuQi': function (callee, param1) {
            return callee(param1);
        },
        'QqauY': function (x, y) {
            return x === y;
        },
        'lerKm': function (callee, param1) {
            return callee(param1);
        },
        'QHuzi': function (x, y) {
            return x * y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = HdFNKv['lFuQi'](parseInt, arg[0x0]);
    const A = arg[0x1]['split']('\x20')['map'](n => parseInt(n))['sort']((a, b) => a - b);
    let pairNums = [];
    for (let i in A) {
        if (HdFNKv['QqauY'](A[i], A[HdFNKv['lerKm'](parseInt, i) + 0x1])) {
            pairNums['push'](A[i]);
        }
    }
    pairNums['sort']((a, b) => b - a);
    const set = new Set(pairNums);
    console['log'](pairNums['length'] ? HdFNKv['QHuzi']([...set][0x0], [...set][0x1]) : 0x0);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));