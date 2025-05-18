'use strict';
function main(input) {
    const args = input['split']('\x0a');
    const num = args['map'](el => parseInt(el));
    const ans = [
        0x1,
        0x2,
        0x3
    ];
    let out = ans['filter'](el => el !== num[0x0]);
    out = out['find'](el => el !== num[0x1]);
    console['log'](out);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));