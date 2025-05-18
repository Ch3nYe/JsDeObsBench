'use strict';
function main(s) {
    const kMRbJW = {
        'hatWb': function (x, y) {
            return x < y;
        },
        'IqPAw': function (x, y) {
            return x + y;
        }
    };
    s = s['split']('\x0a');
    const o = s[0x0]['split']('');
    const e = s[0x1]['split']('');
    let ans = '';
    for (let i = 0x0; kMRbJW['hatWb'](i, kMRbJW['IqPAw'](o['length'], e['length'])); i++) {
        if (o[i])
            ans += o[i];
        if (e[i])
            ans += e[i];
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));