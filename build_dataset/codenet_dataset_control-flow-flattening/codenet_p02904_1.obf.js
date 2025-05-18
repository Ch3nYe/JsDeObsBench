function Main(arg) {
    var QHwllm = {
        'oHRcf': function (x, y) {
            return x - y;
        },
        'rpyww': function (x, y) {
            return x - y;
        },
        'dFned': function (x, y) {
            return x < y;
        },
        'LETgG': function (x, y) {
            return x + y;
        },
        'ryDCt': function (x, y) {
            return x - y;
        },
        'yXRvL': function (x, y) {
            return x + y;
        }
    };
    var bAZGQB = '5|2|0|3|6|1|4'['split']('|');
    var RRoHSM = 0x0;
    while (!![]) {
        switch (bAZGQB[RRoHSM++]) {
        case '0':
            var P = arg['split']('\x0a')[0x1]['split']('\x20')['map'](v => v - 0x0);
            continue;
        case '1':
            var aa = new Set(ans);
            continue;
        case '2':
            var K = QHwllm['oHRcf'](arg['split']('\x0a')[0x0]['split']('\x20')[0x1], 0x0);
            continue;
        case '3':
            var ans = [];
            continue;
        case '4':
            console['log'](aa['size']);
            continue;
        case '5':
            var N = QHwllm['rpyww'](arg['split']('\x0a')[0x0]['split']('\x20')[0x0], 0x0);
            continue;
        case '6':
            for (var i = 0x0; QHwllm['dFned'](i, QHwllm['LETgG'](QHwllm['ryDCt'](N, K), 0x1)); i++) {
                var tmp = P['slice'](i, QHwllm['yXRvL'](i, K));
                tmp['sort'](compareNumbers);
                ans[i] = P['slice'](0x0, i)['concat'](tmp)['concat'](P['slice'](QHwllm['yXRvL'](i, K)))['toString']();
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function compareNumbers(a, b) {
    return a - b;
}