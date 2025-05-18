function Main(input) {
    'use strict';
    const FLgchY = {
        'hwXsZ': function (x, y) {
            return x < y;
        },
        'QDLCR': function (x, y) {
            return x > y;
        },
        'rIBdk': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'lOMZR': function (x, y) {
            return x + y;
        }
    };
    const temp = input['split']('\x0a');
    const n = FLgchY['rIBdk'](parseInt, temp['shift'](), 0xa);
    for (let i = 0x0; i < n; i++) {
        temp[i] = temp[i]['split']('\x20');
        temp[i]['push'](FLgchY['lOMZR'](i, 0x1));
        temp[i][0x1] = parseInt(temp[i][0x1], 0xa);
    }
    temp['sort']((a, b) => b[0x1] - a[0x1]);
    temp['sort']((a, b) => {
        if (FLgchY['hwXsZ'](a[0x0], b[0x0]))
            return -0x1;
        else if (FLgchY['QDLCR'](a[0x0], b[0x0]))
            return 0x1;
        else
            0x0;
    });
    const ans = temp['map'](e => e[0x2]);
    console['log'](ans['join']('\x0a'));
    return ![];
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));