function Main(input) {
    const zBnBrr = {
        'OQeFx': function (x, y) {
            return x > y;
        },
        'czNxy': function (x, y) {
            return x % y;
        },
        'ucmkd': function (x, y) {
            return x < y;
        },
        'DFUub': function (x, y) {
            return x + y;
        },
        'bdWWc': function (x, y) {
            return x < y;
        },
        'HbvRw': function (x, y) {
            return x + y;
        },
        'Ntdxi': function (x, y) {
            return x % y;
        },
        'Dycuo': function (x, y) {
            return x * y;
        },
        'MmyPC': function (x, y) {
            return x === y;
        },
        'uUsym': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x0a');
    inputStr = input[0x0]['split']('\x20');
    const L = Number['parseInt'](inputStr[0x0]);
    const R = Number['parseInt'](inputStr[0x1]);
    var min = 0x7e2;
    if (zBnBrr['OQeFx'](L * R, 0x7e3)) {
        if (R - L < 0x7e3) {
            const L2 = zBnBrr['czNxy'](L, 0x7e3);
            const R2 = R % 0x7e3;
            for (var i1 = L2; zBnBrr['ucmkd'](i1, R2); i1++) {
                for (var i2 = zBnBrr['DFUub'](i1, 0x1); zBnBrr['bdWWc'](i2, zBnBrr['HbvRw'](R2, 0x1)); i2++) {
                    min = Math['min'](min, zBnBrr['Ntdxi'](zBnBrr['Dycuo'](i1, i2), 0x7e3));
                    if (zBnBrr['MmyPC'](min, 0x0)) {
                        break;
                    }
                }
            }
            console['log'](min);
        } else {
            console['log'](0x0);
        }
    } else {
        console['log'](zBnBrr['uUsym'](L, zBnBrr['HbvRw'](L, 0x1)));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));