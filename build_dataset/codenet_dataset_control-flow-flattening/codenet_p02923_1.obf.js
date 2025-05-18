'use strict';
function Main(input) {
    const FevhfV = {
        'vsDlt': function (callee, param1) {
            return callee(param1);
        },
        'jdqag': function (x, y) {
            return x + y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const N = FevhfV['vsDlt'](Number, input[0x0]);
    const H = input[0x1]['trim']()['split']('\x20')['map'](Number);
    let ret = 0x0;
    let move = 0x0;
    for (let i = 0x0; i < N; i++) {
        if (H[i] >= H[FevhfV['jdqag'](i, 0x1)]) {
            move += 0x1;
        } else {
            ret = Math['max'](ret, move);
            move = 0x0;
        }
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));