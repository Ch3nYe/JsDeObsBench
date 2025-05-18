'use strict';
function main(input) {
    const JAYyAJ = {
        'WdXUK': function (x, y) {
            return x / y;
        }
    };
    input = input['split']('\x0a');
    const a = parseInt(input[0x0], 0xa);
    console['log'](Math['round'](JAYyAJ['WdXUK'](a, 0x2)));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));