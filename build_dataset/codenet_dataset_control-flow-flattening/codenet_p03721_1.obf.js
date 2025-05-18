'use strict';
function main(input) {
    const HzzGxQ = {
        'BoKsx': function (x, y) {
            return x < y;
        },
        'DMSXS': function (x, y) {
            return x - y;
        }
    };
    const args = input['trim']()['split']('\x0a')['map'](_ => _['split']('\x20')['map'](x => parseInt(x, 0xa)));
    const k = args[0x0][0x1];
    const arr = args['slice'](0x1);
    let cnt = 0x0;
    let i = 0x0;
    while (HzzGxQ['BoKsx'](cnt, k)) {
        cnt += arr[i][0x1];
        i++;
    }
    console['log'](arr[HzzGxQ['DMSXS'](i, 0x1)][0x0]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));