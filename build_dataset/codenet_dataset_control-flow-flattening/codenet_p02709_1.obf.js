'use strict';
const main = arg => {
    const vAHfyV = {
        'Ijmoa': function (x, y) {
            return x > y;
        },
        'PwWWB': function (x, y) {
            return x - y;
        },
        'eWOlW': function (x, y) {
            return x + y;
        },
        'vFDrm': function (x, y) {
            return x * y;
        },
        'QyuLh': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'KpruK': function (x, y) {
            return x - y;
        },
        'QJHbg': function (callee, param1) {
            return callee(param1);
        },
        'xJDJe': function (x, y) {
            return x - y;
        }
    };
    const input = arg['trim']()['split']('\x0a');
    const n = vAHfyV['QJHbg'](parseInt, input[0x0]);
    const arr = input[0x1]['split']('\x20')['map'](n => parseInt(n));
    function cal(i, dst) {
        if (i === -0x1)
            return 0x0;
        const results = [];
        for (const j of dst) {
            const next_dst = dst['filter'](v => v !== j);
            const abs = vAHfyV['Ijmoa'](i, j) ? vAHfyV['PwWWB'](i, j) : vAHfyV['PwWWB'](j, i);
            const val = vAHfyV['eWOlW'](vAHfyV['vFDrm'](arr[i], abs), vAHfyV['QyuLh'](cal, vAHfyV['KpruK'](i, 0x1), next_dst));
            results['push'](val);
        }
        return Math['max'](...results);
    }
    console['log'](vAHfyV['QyuLh'](cal, vAHfyV['xJDJe'](n, 0x1), [...vAHfyV['QJHbg'](Array, n)['keys']()]));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));