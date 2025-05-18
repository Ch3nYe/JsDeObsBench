'use strict';
const main = arg => {
    const uXHQmC = {
        'SBWJB': function (callee, param1) {
            return callee(param1);
        },
        'LowbR': function (x, y) {
            return x <= y;
        },
        'MSgyH': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = uXHQmC['SBWJB'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    let H = uXHQmC['SBWJB'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    let ab = arg['slice'](0x1, N + 0x1)['map'](n => n['split']('\x20')['map'](l => parseInt(l)));
    ab['sort']((a, b) => b[0x0] - a[0x0]);
    const aMax = ab[0x0][0x0];
    ab = ab['sort']((a, b) => b[0x1] - a[0x1])['filter'](n => n[0x1] > aMax);
    let damage = 0x0;
    let throwAttack = 0x0;
    for (let i in ab) {
        H -= ab[i][0x1];
        throwAttack++;
        if (uXHQmC['LowbR'](H, 0x0)) {
            console['log'](throwAttack);
            return;
        }
    }
    const directAttack = Math['ceil'](H / aMax);
    console['log'](uXHQmC['MSgyH'](throwAttack, directAttack));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));