function main(input) {
    const PeiMZs = {
        'mzzYZ': function (x, y) {
            return x >= y;
        },
        'CYRys': function (x, y) {
            return x / y;
        }
    };
    const nums = input['split']('\x20')['map'](num => parseInt(num, 0xa));
    console['log'](PeiMZs['mzzYZ'](nums[0x0], 0xd) ? nums[0x1] : nums[0x0] >= 0x6 ? PeiMZs['CYRys'](nums[0x1], 0x2) : 0x0);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));