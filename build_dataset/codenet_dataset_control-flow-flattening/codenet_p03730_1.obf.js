'use strict';
const main = arg => {
    const KTEvBu = {
        'TAcve': function (x, y) {
            return x == y;
        },
        'fvHCj': 'YES'
    };
    let Nums = arg['split']('\x0a')[0x0]['split']('\x20')['map'](n => Number(n));
    let A = Nums[0x0], B = Nums[0x1], C = Nums[0x2];
    let ans = 'NO';
    for (let i = 0x1; i <= B; i++) {
        if (KTEvBu['TAcve'](A * i % B, C)) {
            ans = KTEvBu['fvHCj'];
        }
    }
    console['log'](ans);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));