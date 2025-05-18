let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    lines['push'](line);
});
reader['on']('close', function () {
    const FNpILb = {
        'KItoT': function (x, y) {
            return x < y;
        },
        'rdRvr': function (x, y) {
            return x == y;
        },
        'YLpdV': function (x, y) {
            return x == y;
        },
        'xoAkw': function (x, y) {
            return x + y;
        },
        'bUrff': 'Yes'
    };
    let d1 = [];
    let d2 = [];
    const n = lines[0x0];
    let zorome = 'No';
    for (let i = 0x1; FNpILb['KItoT'](i, n); i++) {
        d1['push'](lines[i]['split']('\x20')[0x0]);
        d2['push'](lines[i]['split']('\x20')[0x1]);
    }
    for (let i = 0x0; FNpILb['KItoT'](i, n - 0x2); i++) {
        if (FNpILb['rdRvr'](d1[i], d2[i])) {
            if (FNpILb['YLpdV'](d1[FNpILb['xoAkw'](i, 0x1)], d2[FNpILb['xoAkw'](i, 0x1)])) {
                if (d1[FNpILb['xoAkw'](i, 0x2)] == d2[FNpILb['xoAkw'](i, 0x2)]) {
                    zorome = FNpILb['bUrff'];
                    break;
                }
            }
        }
    }
    console['log'](zorome);
});