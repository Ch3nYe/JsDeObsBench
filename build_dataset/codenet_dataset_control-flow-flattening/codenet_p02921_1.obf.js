'use strict';
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const Nums = input['split']('\x0a');
const S = Nums[0x0]['split']('');
const T = Nums[0x1]['split']('');
let ans = 0x0;
S['forEach']((x, i) => {
    const zgBlED = {
        'qiidi': function (x, y) {
            return x == y;
        }
    };
    if (zgBlED['qiidi'](x, T[i])) {
        ans++;
    }
});
console['log'](ans);