'use strict';
function main(input) {
    const rESqVk = {
        'aPcSg': function (x, y) {
            return x + y;
        },
        'cJAoZ': function (x, y) {
            return x + y;
        },
        'hyHPu': function (x, y) {
            return x <= y;
        }
    };
    input = input['split']('\x0a');
    input[0x0] = input[0x0]['split']('\x20')['map'](v => ~~v);
    const h = input[0x0][0x0];
    const w = input[0x0][0x1];
    let tmp = rESqVk['aPcSg']('#'['repeat'](rESqVk['cJAoZ'](w, 0x2)), '\x0a');
    for (let i = 0x1; rESqVk['hyHPu'](i, h); i++) {
        tmp += rESqVk['cJAoZ'](rESqVk['cJAoZ']('#', input[i]), '#\x0a');
    }
    tmp += '#'['repeat'](rESqVk['cJAoZ'](w, 0x2));
    console['log'](tmp);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));