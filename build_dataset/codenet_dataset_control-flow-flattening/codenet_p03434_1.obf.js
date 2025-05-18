function main(input) {
    const EjQGSf = {
        'ljbNm': function (x, y) {
            return x == y;
        },
        'xbiIt': function (x, y) {
            return x % y;
        },
        'vSBKF': function (x, y) {
            return x + y;
        },
        'CVBnh': function (x, y) {
            return x - y;
        }
    };
    const args = input['split']('\x0a');
    const N = parseInt(args[0x0], 0xa);
    const sorted = args[0x1]['split']('\x20')['map'](v => parseInt(v))['sort']((a, b) => b - a);
    var alice = 0x0;
    var bob = 0x0;
    sorted['forEach']((v, i) => {
        if (EjQGSf['ljbNm'](EjQGSf['xbiIt'](EjQGSf['vSBKF'](i, 0x1), 0x2), 0x0)) {
            bob += v;
        } else {
            alice += v;
        }
    });
    console['log'](EjQGSf['CVBnh'](alice, bob));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));