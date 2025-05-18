'use strict';
function main(input) {
    const SjrgfT = {
        'tAmFZ': function (x, y) {
            return x <= y;
        },
        'EKmPy': function (x, y) {
            return x - y;
        },
        'jkNxb': function (x, y) {
            return x < y;
        },
        'uSBuL': function (x, y) {
            return x >= y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const NK = input['shift']()['split']('\x20')['map'](val => Number(val));
    const count = Math['min'](...NK);
    input = input[0x0]['split']('\x20')['map'](val => Number(val));
    const ans = [];
    for (let l = 0x0; SjrgfT['tAmFZ'](l, count); l++) {
        for (let r = 0x0; SjrgfT['tAmFZ'](r, SjrgfT['EKmPy'](count, l)); r++) {
            let temp = [
                ...input['slice'](0x0, l),
                ...input['slice'](NK[0x0] - r)
            ]['sort']((a, b) => a - b);
            let remain = SjrgfT['EKmPy'](NK[0x1], l) - r;
            for (let i = 0x0; SjrgfT['jkNxb'](i, remain); i++) {
                if (SjrgfT['uSBuL'](temp[i], 0x0))
                    break;
                temp[i] = 0x0;
            }
            ans['push'](temp['reduce']((p, c) => p + c, 0x0));
        }
    }
    console['log'](Math['max'](...ans));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));