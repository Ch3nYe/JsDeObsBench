function main(input) {
    const EoTKYv = {
        'BeejC': function (x, y) {
            return x - y;
        },
        'VMQOg': function (x, y) {
            return x - y;
        },
        'vnenk': function (x, y) {
            return x < y;
        },
        'dpNEy': function (x, y) {
            return x - y;
        }
    };
    const lines = input['split']('\x0a');
    const NZW = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const N = NZW[0x0];
    const Z = NZW[0x1];
    const W = NZW[0x2];
    const A = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const initial = Math['abs'](EoTKYv['BeejC'](Z, W));
    var fetch_n_1 = Math['abs'](A[EoTKYv['BeejC'](N, 0x1)] - A[EoTKYv['VMQOg'](N, 0x2)]);
    if (EoTKYv['vnenk'](N, 0x2)) {
        fetch_n_1 = 0x0;
    }
    const fetch_n = Math['abs'](EoTKYv['VMQOg'](A[EoTKYv['dpNEy'](N, 0x1)], W));
    const result = Math['max'](initial, fetch_n_1, fetch_n);
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));