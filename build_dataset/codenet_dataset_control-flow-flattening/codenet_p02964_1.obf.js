function Main(input) {
    const pXHrUA = {
        'rmbxd': function (callee, param1) {
            return callee(param1);
        },
        'wiIpC': function (callee, param1) {
            return callee(param1);
        },
        'eQDLJ': function (x, y) {
            return x < y;
        },
        'hrLSM': function (x, y) {
            return x != y;
        },
        'BirHz': function (x, y) {
            return x == y;
        },
        'WiJWK': function (x, y) {
            return x % y;
        },
        'EoVDF': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    input1 = input[0x0]['split']('\x20');
    const N = pXHrUA['rmbxd'](parseInt, input1[0x0]);
    const K = pXHrUA['wiIpC'](parseInt, input1[0x1]);
    const As = input[0x1]['split']('\x20');
    var filtered = [];
    var results = [''];
    for (i = 0x0; pXHrUA['eQDLJ'](i, K); i++) {
        for (j = 0x0; j < N; j++) {
            if (pXHrUA['hrLSM'](filtered['indexOf'](As[j]), -0x1)) {
                var id = filtered['indexOf'](As[j]);
                filtered = filtered['slice'](0x0, id);
            } else {
                filtered['push'](As[j]);
            }
        }
        if (results['indexOf'](filtered['join']('\x20')) == -0x1) {
            results['push'](filtered['join']('\x20'));
        } else {
            break;
        }
    }
    const roopstart = results['indexOf'](filtered['join']('\x20'));
    if (pXHrUA['BirHz'](roopstart, K)) {
        console['log'](results[roopstart]);
    } else {
        const roopId = pXHrUA['WiJWK'](pXHrUA['EoVDF'](K, roopstart), results['length'] - roopstart);
        console['log'](results[roopstart + roopId]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));