function max(array) {
    const PTvBCF = {
        'CAyaC': function (x, y) {
            return x * y;
        },
        'pShUy': function (x, y) {
            return x < y;
        }
    };
    var result = PTvBCF['CAyaC'](-0x1, Infinity);
    for (num of array) {
        if (PTvBCF['pShUy'](result, num)) {
            result = num;
        }
    }
    return result;
}
function main(input) {
    const AeSiLR = {
        'VQiTC': function (callee, param1) {
            return callee(param1);
        },
        'QmEhV': function (x, y) {
            return x <= y;
        },
        'WZxbv': function (x, y) {
            return x < y;
        },
        'GZtjn': function (x, y) {
            return x == y;
        },
        'CqmKL': function (x, y) {
            return x * y;
        },
        'dhrbK': function (x, y) {
            return x * y;
        },
        'UTIpr': function (x, y) {
            return x < y;
        },
        'ZcqpX': function (x, y) {
            return x - y;
        },
        'DUKzW': function (x, y) {
            return x < y;
        },
        'GSPao': function (x, y) {
            return x > y;
        }
    };
    const lines = input['split']('\x0a');
    const nums = lines['map'](line => line['split']('\x20')['map'](x => parseInt(x)));
    var n_c = nums['shift']();
    const N = n_c[0x0];
    const C = n_c[0x1];
    const t = AeSiLR['VQiTC'](Array, 0x30d42);
    const max_recorders = AeSiLR['VQiTC'](Array, 0x30d42);
    max_recorders['fill'](0x0);
    for (var c = 0x1; AeSiLR['QmEhV'](c, C); c++) {
        t['fill'](0x0);
        for (var n = 0x0; AeSiLR['WZxbv'](n, N); n++) {
            if (AeSiLR['GZtjn'](nums[n][0x2], c)) {
                t[AeSiLR['CqmKL'](nums[n][0x0], 0x2) - 0x1]++;
                t[AeSiLR['dhrbK'](nums[n][0x1], 0x2)]--;
            }
        }
        for (var i = 0x1; AeSiLR['UTIpr'](i, 0x30d42); i++) {
            t[i] += t[AeSiLR['ZcqpX'](i, 0x1)];
        }
        for (var i = 0x1; AeSiLR['DUKzW'](i, 0x30d42); i++) {
            if (AeSiLR['GSPao'](t[i], 0x0)) {
                max_recorders[i]++;
            }
        }
    }
    console['log'](AeSiLR['VQiTC'](max, max_recorders));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));