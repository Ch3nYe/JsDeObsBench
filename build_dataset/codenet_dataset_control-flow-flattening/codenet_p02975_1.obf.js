function Main(input) {
    var MtoADR = {
        'Oedqd': function (x, y) {
            return x < y;
        },
        'DsCsT': function (x, y) {
            return x - y;
        },
        'pguMk': function (x, y) {
            return x === y;
        },
        'PAQfU': function (x, y) {
            return x - y;
        },
        'Fnibh': function (x, y) {
            return x + y;
        },
        'FbZrF': 'Yes'
    };
    input = input['split']('\x0a');
    var N = input[0x0];
    var a = input[0x1]['split']('\x20');
    var flag = !![];
    a = a['map'](x => parseInt(x));
    for (var i = 0x0; MtoADR['Oedqd'](i, MtoADR['DsCsT'](N, 0x2)); i++) {
        var x = MtoADR['pguMk'](i, 0x0) ? MtoADR['DsCsT'](N, 0x1) : MtoADR['PAQfU'](i, 0x1);
        if ((a[MtoADR['Fnibh'](i, 0x1)] ^ a[x]) !== a[i]) {
            flag = ![];
            break;
        }
    }
    var str = MtoADR['pguMk'](flag, !![]) ? MtoADR['FbZrF'] : 'No';
    console['log']('%s', str);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));