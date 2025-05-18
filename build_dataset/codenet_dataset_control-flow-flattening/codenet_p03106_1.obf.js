function main(input) {
    var cYWKEe = {
        'aCIMJ': function (callee, param1) {
            return callee(param1);
        },
        'gALYY': function (callee, param1) {
            return callee(param1);
        },
        'UbaEZ': function (x, y) {
            return x / y;
        },
        'PJIbK': function (x, y) {
            return x === y;
        }
    };
    const args = input['split']('\x20');
    var A = Number(args[0x0]);
    var B = cYWKEe['aCIMJ'](Number, args[0x1]);
    var K = cYWKEe['gALYY'](Number, args[0x2]);
    var cu = 0x0;
    var sum;
    var count = 0x0;
    for (cu = A; cu > 0x0; --cu) {
        if (Number['isInteger'](cYWKEe['UbaEZ'](A, cu)) && Number['isInteger'](B / cu)) {
            count++;
            if (cYWKEe['PJIbK'](count, K)) {
                sum = cu;
                break;
            }
        }
    }
    console['log'](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));