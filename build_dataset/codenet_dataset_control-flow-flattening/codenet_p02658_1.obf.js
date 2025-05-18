function Main(input) {
    const NdaUeS = {
        'xsTaz': function (x, y) {
            return x < y;
        },
        'lAtrT': function (callee, param1) {
            return callee(param1);
        },
        'qFcgp': function (x, y) {
            return x > y;
        },
        'huPNF': function (callee, param1) {
            return callee(param1);
        },
        'wtIBk': function (x, y) {
            return x * y;
        },
        'sdmmI': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['split']('\x0a');
    const N = input[0x0]['trim']();
    const values = input[0x1]['split']('\x20');
    for (let i = 0x0; NdaUeS['xsTaz'](i, N); i++) {
        if (values[i] == 0x0) {
            console['log']('0');
            return;
        }
    }
    let result = NdaUeS['lAtrT'](BigInt, 0x1);
    for (let i = 0x0; NdaUeS['xsTaz'](i, N); i++) {
        const nextVal = NdaUeS['lAtrT'](BigInt, values[i]);
        if (NdaUeS['qFcgp'](nextVal, NdaUeS['huPNF'](BigInt, 0xde0b6b3a7640000))) {
            console['log']('-1');
            return;
        }
        result = NdaUeS['wtIBk'](result, nextVal);
        if (NdaUeS['qFcgp'](result, NdaUeS['sdmmI'](BigInt, 0xde0b6b3a7640000))) {
            console['log']('-1');
            return;
        }
    }
    console['log'](NdaUeS['huPNF'](Number, result)['toString']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));