'use strict';
const main = arg => {
    const uArrvg = {
        'izdWw': function (callee, param1) {
            return callee(param1);
        },
        'KRmyG': function (x, y) {
            return x * y;
        },
        'PPybq': function (x, y) {
            return x + y;
        },
        'Ajmag': function (x, y) {
            return x !== y;
        },
        'phXji': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const D = uArrvg['izdWw'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const N = uArrvg['izdWw'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    let temp = [...Array(uArrvg['KRmyG'](D, 0x2))]['fill'](0x0);
    let answer = uArrvg['izdWw'](parseInt, uArrvg['PPybq'](N, String(temp['join'](''))));
    let plus = uArrvg['izdWw'](parseInt, uArrvg['PPybq'](0x1, uArrvg['izdWw'](String, temp['join'](''))));
    console['log'](uArrvg['Ajmag'](N, 0x64) ? answer : uArrvg['phXji'](answer, plus));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));