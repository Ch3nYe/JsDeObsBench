function Main(input) {
    const LnjgkL = {
        'jDfYA': function (x, y) {
            return x === y;
        }
    };
    const numbers = input['split']('\x20')['map'](n => Number(n));
    const a = numbers[0x0];
    const b = numbers[0x1];
    const c = numbers[0x2];
    if (LnjgkL['jDfYA'](a, b)) {
        console['log'](c);
    } else if (LnjgkL['jDfYA'](b, c)) {
        console['log'](a);
    } else {
        console['log'](b);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));