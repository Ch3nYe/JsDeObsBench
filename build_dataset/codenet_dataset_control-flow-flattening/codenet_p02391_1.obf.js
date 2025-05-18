function main(input) {
    const IjHMAs = {
        'XitaZ': function (x, y) {
            return x > y;
        },
        'frIog': 'a\x20>\x20b',
        'MSxrY': function (x, y) {
            return x < y;
        },
        'bPeOI': 'a\x20<\x20b',
        'AYOJa': 'a\x20==\x20b'
    };
    let nums = input['split']('\x20')['map'](item => parseInt(item));
    if (IjHMAs['XitaZ'](nums[0x0], nums[0x1])) {
        console['log'](IjHMAs['frIog']);
    } else if (IjHMAs['MSxrY'](nums[0x0], nums[0x1])) {
        console['log'](IjHMAs['bPeOI']);
    } else {
        console['log'](IjHMAs['AYOJa']);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));