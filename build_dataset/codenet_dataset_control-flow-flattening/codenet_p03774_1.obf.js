'use strict';
const main = input => {
    const IPvnEj = {
        'NXGHR': function (x, y) {
            return x - y;
        },
        'CjaMD': function (callee, param1) {
            return callee(param1);
        },
        'XGKVz': function (x, y) {
            return x + y;
        },
        'lzosh': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]['split']('\x20')[0x0]);
    const M = IPvnEj['CjaMD'](parseInt, input[0x0]['split']('\x20')[0x1]);
    let arr = input['slice'](0x1, IPvnEj['XGKVz'](N, 0x1));
    let points = input['slice'](IPvnEj['lzosh'](N, 0x1), IPvnEj['XGKVz'](M, N) + 0x1);
    const parse = v => {
        let temp = v['split']('\x20')['map'](vv => parseInt(vv));
        return {
            'x': temp[0x0],
            'y': temp[0x1]
        };
    };
    arr = arr['map'](parse);
    points = points['map'](parse);
    let indexArr = [];
    arr['forEach']((v, i) => {
        let minDist = 0x3b9aca00;
        let index = 0x0;
        points['forEach']((w, j) => {
            let dist = Math['abs'](v['x'] - w['x']) + Math['abs'](IPvnEj['NXGHR'](v['y'], w['y']));
            if (dist < minDist) {
                minDist = dist;
                index = j;
            }
        });
        indexArr['push'](index);
    });
    indexArr['forEach'](v => console['log'](v + 0x1));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));