'use strict';
const main = input => {
    const FgPyaF = {
        'UOTrm': function (x, y) {
            return x + y;
        },
        'OzBDn': function (x, y) {
            return x <= y;
        },
        'yilcB': function (x, y) {
            return x < y;
        }
    };
    input = input['split']('\x20')['map'](v => parseInt(v));
    const W = input[0x0];
    const a = input[0x1];
    const b = input[0x2];
    const aw = FgPyaF['UOTrm'](a, W);
    const bw = b + W;
    let arr = [];
    if (FgPyaF['OzBDn'](a, b)) {
        arr = [
            a,
            aw,
            b,
            bw
        ];
    } else {
        arr = [
            b,
            bw,
            a,
            aw
        ];
    }
    if (FgPyaF['yilcB'](arr[0x1], arr[0x2])) {
        console['log'](arr[0x2] - arr[0x1]);
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));