function main(input) {
    var nums = input['split']('\x0a')[0x1]['split']('\x20')['map'](n => parseInt(n, 0xa));
    var count = 0x0;
    while (nums['every'](n => n % 0x2 === 0x0)) {
        count++;
        nums = nums['map'](n => n / 0x2);
    }
    console['log'](count);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));