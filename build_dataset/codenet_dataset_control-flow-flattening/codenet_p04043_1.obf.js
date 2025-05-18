function main(input) {
    const DCvXJX = {
        'cAbcQ': function (x, y) {
            return x != y;
        },
        'kSmRV': function (x, y) {
            return x == y;
        }
    };
    const nums = input['split']('\x20');
    if (DCvXJX['cAbcQ'](nums['indexOf']('5'), -0x1)) {
        nums['splice'](nums['indexOf']('5'), 0x1);
    }
    if (nums['indexOf']('5') != -0x1) {
        nums['splice'](nums['indexOf']('5'), 0x1);
    }
    if (nums['indexOf']('7') != -0x1) {
        nums['splice'](nums['indexOf']('7'), 0x1);
    }
    console['log'](DCvXJX['kSmRV'](nums[0x0], null) ? 'YES' : 'NO');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));