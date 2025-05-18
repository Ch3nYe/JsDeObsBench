function Main(input) {
    const TSNvPR = {
        'nGmfp': function (callee, param1) {
            return callee(param1);
        },
        'Rhwgn': function (x, y) {
            return x === y;
        },
        'rmcYa': function (x, y) {
            return x % y;
        },
        'HeBOY': 'Yes',
        'gXjvX': function (x, y) {
            return x - y;
        },
        'nBRTf': function (x, y) {
            return x <= y;
        }
    };
    const array = input['split']('\x20');
    let takahashi = TSNvPR['nGmfp'](Number, array[0x0]);
    let aoki = Number(array[0x2]);
    let count = 0x0;
    let bool = !![];
    while (bool) {
        if (TSNvPR['Rhwgn'](TSNvPR['rmcYa'](count, 0x2), 0x0)) {
            aoki = aoki - Number(array[0x1]);
            if (aoki <= 0x0) {
                console['log'](TSNvPR['HeBOY']);
                bool = ![];
            }
        } else {
            takahashi = TSNvPR['gXjvX'](takahashi, TSNvPR['nGmfp'](Number, array[0x3]));
            if (TSNvPR['nBRTf'](takahashi, 0x0)) {
                console['log']('No');
                bool = ![];
            }
        }
        count++;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));