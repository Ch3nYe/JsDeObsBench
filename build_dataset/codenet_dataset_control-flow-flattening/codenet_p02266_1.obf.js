const calc = str => {
    const MqlYzk = {
        'xMjsp': function (x, y) {
            return x === y;
        },
        'ZpNrx': function (x, y) {
            return x > y;
        },
        'YeNaY': function (x, y) {
            return x - y;
        },
        'cqIjJ': function (x, y) {
            return x - y;
        },
        'NXRGe': function (x, y) {
            return x > y;
        },
        'Thyzp': function (x, y) {
            return x > y;
        },
        'LfMPS': function (x, y) {
            return x - y;
        },
        'oVUTL': function (x, y) {
            return x - y;
        }
    };
    const areas = [];
    const depthIndexes = [];
    let sum = 0x0;
    for (let i = 0x0; i < str['length']; i++) {
        const char = str[i];
        if (MqlYzk['xMjsp'](char, '\x5c')) {
            depthIndexes['push'](i);
            continue;
        }
        if (char === '/' && MqlYzk['ZpNrx'](depthIndexes['length'], 0x0)) {
            const j = depthIndexes['pop']();
            sum += MqlYzk['YeNaY'](i, j);
            let currentArea = MqlYzk['cqIjJ'](i, j);
            while (MqlYzk['NXRGe'](areas['length'], 0x0) && MqlYzk['Thyzp'](areas[MqlYzk['LfMPS'](areas['length'], 0x1)]['depth'], j)) {
                currentArea += areas[MqlYzk['oVUTL'](areas['length'], 0x1)]['area'];
                areas['pop']();
            }
            areas['push']({
                'depth': j,
                'area': currentArea
            });
        }
    }
    console['log'](sum);
    if (MqlYzk['xMjsp'](areas['length'], 0x0)) {
        console['log'](0x0);
        return;
    }
    console['log'](areas['length'] + '\x20' + areas['map'](obj => obj['area'])['join']('\x20'));
};
let inputStr = '';
process['stdin']['on']('data', input => {
    inputStr += String['raw']`${ input }`;
});
process['stdin']['on']('end', () => {
    calc(inputStr);
});