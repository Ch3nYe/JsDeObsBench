'use strict';
function main(input) {
    const rajoIN = {
        'Gzzzt': function (callee, param1) {
            return callee(param1);
        },
        'PuERh': function (x, y) {
            return x < y;
        },
        'VoNCk': function (x, y) {
            return x ** y;
        }
    };
    let line = input['split'](/\r?\n/g);
    let arr = line[0x0]['split']('\x20');
    const N = rajoIN['Gzzzt'](parseInt, arr[0x0]), K = rajoIN['Gzzzt'](parseInt, arr[0x1]);
    let cnt = 0x1;
    while (rajoIN['PuERh'](rajoIN['VoNCk'](K, cnt), N))
        cnt++;
    console['log'](cnt);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));