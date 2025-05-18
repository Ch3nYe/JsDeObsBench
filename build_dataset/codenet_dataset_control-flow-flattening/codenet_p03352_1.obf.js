'use strict';
function main(s) {
    const WbrQhf = {
        'ILaln': function (callee, param1) {
            return callee(param1);
        },
        'kyVMw': function (x, y) {
            return x < y;
        },
        'BnnWK': function (x, y) {
            return x - y;
        }
    };
    const x = WbrQhf['ILaln'](Number, s);
    const nums = [...WbrQhf['ILaln'](Array, 0x1f)]['map']((x, i) => i + 0x1);
    nums['shift']();
    const max_ary = [0x1];
    for (let i = 0x0; WbrQhf['kyVMw'](i, nums['length']); i++) {
        let j = 0x2;
        let n = nums[i];
        let max = Math['pow'](n, j);
        if (max > x)
            continue;
        while (max <= x) {
            j += 0x1;
            max = Math['pow'](n, j);
        }
        max = Math['pow'](n, WbrQhf['BnnWK'](j, 0x1));
        max_ary['push'](max);
    }
    const ans = Math['max'](...max_ary);
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));