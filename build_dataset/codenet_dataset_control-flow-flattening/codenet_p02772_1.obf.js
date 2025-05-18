function Main(input) {
    const rhiONX = {
        'LWgyU': function (x, y) {
            return x % y;
        },
        'vTRAD': function (x, y) {
            return x != y;
        },
        'lgUyg': function (x, y) {
            return x % y;
        }
    };
    input = input['split']('\x0a');
    const N = input['shift']();
    const A = input['map'](v => parseInt(v));
    f = ![];
    for (i = 0x0; i < A['length']; i++) {
        if (rhiONX['LWgyU'](A[i], 0x2) == 0x0) {
            if (rhiONX['vTRAD'](A[i] % 0x3, 0x0) && rhiONX['vTRAD'](rhiONX['lgUyg'](A[i], 0x5), 0x0)) {
                f = !![];
            }
        }
    }
    if (f) {
        console['log']('DENIED');
    } else {
        console['log']('APPROVED');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));