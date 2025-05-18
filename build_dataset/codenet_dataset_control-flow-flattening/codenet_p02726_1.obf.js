function main(input) {
    const zmgqlo = {
        'GhKqx': function (x, y) {
            return x - y;
        },
        'RBhKA': function (x, y) {
            return x + y;
        },
        'QkLTM': function (x, y) {
            return x - y;
        },
        'wioUY': function (x, y) {
            return x < y;
        },
        'Tpmsm': function (x, y) {
            return x < y;
        },
        'TvfpQ': function (x, y) {
            return x + y;
        },
        'lcyFn': function (x, y) {
            return x <= y;
        },
        'BDkMN': function (x, y) {
            return x == y;
        },
        'UrqFz': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    function dist(a, b) {
        return Math['min'](zmgqlo['GhKqx'](b, a), zmgqlo['RBhKA'](zmgqlo['RBhKA'](Math['abs'](zmgqlo['QkLTM'](x, a)), Math['abs'](zmgqlo['QkLTM'](y, b))), 0x1));
    }
    const inp = input['split']('\x20');
    const n = inp[0x0];
    const x = inp[0x1];
    const y = inp[0x2];
    for (var i = 0x1; zmgqlo['wioUY'](i, n); i++) {
        var cnt = 0x0;
        for (var a = 0x1; zmgqlo['Tpmsm'](a, n); a++)
            for (var b = zmgqlo['TvfpQ'](a, 0x1); zmgqlo['lcyFn'](b, n); b++)
                if (zmgqlo['BDkMN'](zmgqlo['UrqFz'](dist, a, b), i))
                    cnt++;
        console['log'](cnt);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));