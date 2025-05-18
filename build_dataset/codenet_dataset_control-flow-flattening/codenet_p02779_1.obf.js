'use strict';
function Main(input) {
    const GUZIVR = {
        'zvVId': function (callee, param1) {
            return callee(param1);
        },
        'hyXIY': function (x, y) {
            return x + y;
        },
        'UKfCD': function (x, y) {
            return x !== y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const N = GUZIVR['zvVId'](Number, input[0x0]['trim']());
    const A = input[0x1]['trim']()['split']('\x20')['map'](Number);
    let ret = 'YES';
    for (let i = 0x0; i < N; i++) {
        let tmp = A['slice'](GUZIVR['hyXIY'](i, 0x1));
        let r = tmp['indexOf'](A[i]);
        if (GUZIVR['UKfCD'](r, -0x1)) {
            ret = 'NO';
            break;
        }
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));