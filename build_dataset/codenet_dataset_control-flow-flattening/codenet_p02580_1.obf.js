'use strict';
function Main(input) {
    const bHcJvj = {
        'DsudQ': function (x, y) {
            return x - y;
        },
        'ruPSa': function (x, y) {
            return x <= y;
        },
        'aQVRy': function (x, y) {
            return x + y;
        }
    };
    const tmp = input['trim']()['split']('\x0a');
    const [H, W, M] = tmp['shift']()['split']('\x20')['map'](v => Number(v));
    const hw = tmp['map'](v => v['split']('\x20')['map'](v => Number(v)));
    let result = 0x0;
    for (let i = 0x1; i <= H; i++) {
        const harr = hw['filter'](v => v[0x0] !== i);
        const hlen = bHcJvj['DsudQ'](hw['length'], harr['length']);
        for (let j = 0x1; bHcJvj['ruPSa'](j, W); j++) {
            const warr = harr['filter'](v => v[0x1] === j);
            if (result < hlen + warr['length']) {
                result = bHcJvj['aQVRy'](hlen, warr['length']);
            }
        }
    }
    console['log'](result);
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));