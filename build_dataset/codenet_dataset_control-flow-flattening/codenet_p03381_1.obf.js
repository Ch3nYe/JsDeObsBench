function Main(input) {
    const RnaKyA = {
        'OMLme': function (x, y) {
            return x - y;
        },
        'riaIb': function (x, y) {
            return x <= y;
        },
        'vybVc': function (callee, param1) {
            return callee(param1);
        },
        'lzZNu': function (x, y) {
            return x - y;
        },
        'IbTNq': function (x, y) {
            return x / y;
        },
        'twGgM': function (x, y) {
            return x / y;
        }
    };
    const lines = input['split']('\x0a');
    let N = RnaKyA['vybVc'](parseInt, lines[0x0]);
    let a = lines[0x1]['split']('\x20')['map'](function (i) {
        return parseInt(i);
    });
    let sortedA = a['slice']()['sort'](function (a, b) {
        return RnaKyA['OMLme'](a, b);
    });
    const med1 = sortedA[RnaKyA['lzZNu'](RnaKyA['IbTNq'](N, 0x2), 0x1)];
    const med2 = sortedA[RnaKyA['twGgM'](N, 0x2)];
    a['forEach'](function (i) {
        console['log'](RnaKyA['riaIb'](i, med1) ? med2 : med1);
    });
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));