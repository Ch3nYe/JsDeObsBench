'use strict';
const main = input => {
    let n = input[0x0]['split']('');
    console['log'](n['map'](val => val == '9' ? 0x1 + '' : 0x9 + '')['reduce']((acc, cur) => acc + cur));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));