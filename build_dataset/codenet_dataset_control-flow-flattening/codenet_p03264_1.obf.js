function Main(input) {
    var eQPeWv = {
        'ytpxD': '3|1|4|2|0',
        'kqqcL': function (x, y) {
            return x * y;
        },
        'vxeSo': function (x, y) {
            return x == y;
        },
        'XMhTv': function (x, y) {
            return x % y;
        },
        'NixhG': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var lcbKLZ = eQPeWv['ytpxD']['split']('|');
    var XDfCPo = 0x0;
    while (!![]) {
        switch (lcbKLZ[XDfCPo++]) {
        case '0':
            console['log'](eQPeWv['kqqcL'](a, b));
            continue;
        case '1':
            var a = 0x0;
            continue;
        case '2':
            for (i = 0x1; i <= k; i++) {
                if (eQPeWv['vxeSo'](eQPeWv['XMhTv'](i, 0x2), 0x0)) {
                    a++;
                } else {
                    b++;
                }
            }
            continue;
        case '3':
            var k = eQPeWv['NixhG'](parseInt, input['split']('\x0a')[0x0], 0xa);
            continue;
        case '4':
            var b = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));