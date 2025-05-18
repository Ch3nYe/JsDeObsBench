'use strict;';
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));
function main(input) {
    const mwOJRb = {
        'KGyop': function (x, y) {
            return x > y;
        },
        'RuJVf': 'Yes'
    };
    input = input[0x0]['split']('');
    let num = 0x2;
    let isSame = !![];
    while (mwOJRb['KGyop'](num, 0x0)) {
        if (input[num] !== input[0x0]) {
            isSame = ![];
            break;
        }
        num--;
    }
    console['log'](isSame ? 'No' : mwOJRb['RuJVf']);
}