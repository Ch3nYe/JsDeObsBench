function Main(input) {
    const KqJliT = {
        'LPwnL': function (callee, param1) {
            return callee(param1);
        },
        'DeQXY': function (callee, param1) {
            return callee(param1);
        },
        'uSIuK': function (x, y) {
            return x <= y;
        },
        'zhAHC': function (x, y) {
            return x === y;
        }
    };
    let inputs = input['split']('\x20');
    let K = KqJliT['LPwnL'](Number, inputs[0x0]);
    let S = KqJliT['DeQXY'](Number, inputs[0x1]);
    let count = 0x0;
    for (let X = 0x0; KqJliT['uSIuK'](X, K); X++) {
        for (let Y = 0x0; KqJliT['uSIuK'](Y, K); Y++) {
            for (let Z = 0x0; KqJliT['uSIuK'](Z, K); Z++) {
                if (KqJliT['zhAHC'](X + Y + Z, S)) {
                    count++;
                }
            }
        }
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));