function Main(input) {
    const TwlLho = {
        'tbMfZ': function (x, y) {
            return x % y;
        },
        'iDnra': function (x, y) {
            return x + y;
        },
        'zoYWQ': function (x, y) {
            return x + y;
        }
    };
    const k = input[0x0][0x1];
    const as = input[0x1]['map'](Number);
    const answer = as['reduce']((total, cv, ci) => {
        const LFOyHg = {
            'DFRDC': function (x, y) {
                return TwlLho['tbMfZ'](x, y);
            },
            'PNUfe': function (x, y) {
                return TwlLho['iDnra'](x, y);
            },
            'kXiHn': function (x, y) {
                return TwlLho['iDnra'](x, y);
            }
        };
        var result = 0x0;
        as['slice'](ci)['reduce']((pv, value, index) => {
            const remainder = LFOyHg['DFRDC'](LFOyHg['PNUfe'](pv, value), k);
            if (remainder === LFOyHg['kXiHn'](index, 0x1)) {
                result++;
            }
            return remainder;
        }, 0x0);
        return TwlLho['zoYWQ'](total, result);
    }, null);
    console['log'](answer);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](line => line['split']('\x20')));