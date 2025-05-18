'use strict';
function main(inp) {
    const jqkXiw = {
        'bhkPl': function (x, y) {
            return x === y;
        },
        'UpRHO': function (x, y) {
            return x === y;
        },
        'uOwrQ': 'Yes'
    };
    let ans = 'No';
    if (jqkXiw['bhkPl'](inp[0x2], inp[0x3]) && jqkXiw['UpRHO'](inp[0x4], inp[0x5])) {
        ans = jqkXiw['uOwrQ'];
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));