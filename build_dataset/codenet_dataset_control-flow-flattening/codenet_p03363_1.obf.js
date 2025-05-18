'use strict';
const main = arg => {
    const BlafPW = {
        'ifWbZ': function (x, y) {
            return x / y;
        },
        'WsRnY': function (x, y) {
            return x * y;
        },
        'VnjXW': function (x, y) {
            return x - y;
        },
        'ihlBE': function (x, y) {
            return x * y;
        },
        'hXPey': function (x, y) {
            return x < y;
        },
        'mmRVi': function (x, y) {
            return x + y;
        },
        'ZTlnB': function (x, y) {
            return x - y;
        },
        'ZNcPh': function (x, y) {
            return x < y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = BlafPW['ihlBE'](arg[0x0], 0x1);
    const nums = arg[0x1]['split']('\x20')['map'](x => x * 0x1);
    const totalSum = new Array(N)['fill'](0x0);
    for (let i = 0x0; BlafPW['hXPey'](i, N); i++) {
        totalSum[i] += BlafPW['mmRVi'](totalSum[BlafPW['ZTlnB'](i, 0x1)] || 0x0, nums[i]);
    }
    let accumObj = {};
    accumObj[0x0] = 0x1;
    for (let i = 0x0; BlafPW['ZNcPh'](i, N); i++) {
        accumObj[totalSum[i]] = BlafPW['mmRVi'](accumObj[totalSum[i]] || 0x0, 0x1);
    }
    let ans = 0x0;
    Object['keys'](accumObj)['forEach'](x => {
        ans += BlafPW['ifWbZ'](BlafPW['WsRnY'](accumObj[x], BlafPW['VnjXW'](accumObj[x], 0x1)), 0x2);
    });
    console['log'](ans);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));