function Main(input) {
    const NdxOPd = {
        'fsKRd': function (callee, param1) {
            return callee(param1);
        },
        'TOcOa': function (x, y) {
            return x < y;
        },
        'QPyRn': function (x, y) {
            return x % y;
        },
        'vPbQr': function (x, y) {
            return x % y;
        },
        'ELkip': function (x, y) {
            return x / y;
        },
        'cSMjt': function (x, y) {
            return x * y;
        },
        'wchdJ': function (x, y) {
            return x - y;
        },
        'DMQyK': function (x, y) {
            return x + y;
        },
        'cXDDf': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    const input1 = input[0x0]['split']('\x20');
    const N = parseInt(input1[0x0]);
    const K = NdxOPd['fsKRd'](parseInt, input1[0x1]);
    const As = input[0x1]['split']('\x20')['map'](x => parseInt(x));
    var count = 0x0;
    for (i = 0x0; NdxOPd['TOcOa'](i, N); i++) {
        const uWHaCa = '2|3|4|1|0'['split']('|');
        let TsqFpc = 0x0;
        while (!![]) {
            switch (uWHaCa[TsqFpc++]) {
            case '0':
                count = NdxOPd['QPyRn'](count, 0x3b9aca00 + 0x7);
                continue;
            case '1':
                count += NdxOPd['vPbQr'](NdxOPd['ELkip'](NdxOPd['cSMjt'](NdxOPd['cSMjt'](v, NdxOPd['wchdJ'](K, 0x1)), K), 0x2), NdxOPd['DMQyK'](0x3b9aca00, 0x7));
                continue;
            case '2':
                var u = As['slice'](NdxOPd['DMQyK'](i, 0x1))['filter'](x => x < As[i])['length'];
                continue;
            case '3':
                var v = As['filter'](x => x < As[i])['length'];
                continue;
            case '4':
                count += NdxOPd['vPbQr'](NdxOPd['cSMjt'](u, K), NdxOPd['cXDDf'](0x3b9aca00, 0x7));
                continue;
            }
            break;
        }
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));