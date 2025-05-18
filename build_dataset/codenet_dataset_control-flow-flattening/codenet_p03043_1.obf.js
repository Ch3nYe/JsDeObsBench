function main(input) {
    var TousCe = {
        'XKekH': function (x, y) {
            return x <= y;
        },
        'dFExz': function (x, y) {
            return x / y;
        },
        'NJeuG': function (x, y) {
            return x < y;
        }
    };
    input = input['split']('\x20')['map'](Number);
    const N = input[0x0];
    const K = input[0x1];
    var result = 0x0;
    for (i = 0x1; TousCe['XKekH'](i, N); i++) {
        var tmp = TousCe['dFExz'](0x1, N);
        var now = i;
        while (TousCe['NJeuG'](now, K)) {
            now *= 0x2;
            tmp /= 0x2;
        }
        result += tmp;
    }
    console['log'](result['toString']()['slice'](0x0, 0xe));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));