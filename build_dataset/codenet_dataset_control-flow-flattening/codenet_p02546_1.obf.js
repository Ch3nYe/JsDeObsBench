function Main(input) {
    const VZAZFJ = {
        'zEbtC': function (x, y) {
            return x === y;
        }
    };
    input = input['split']('\x0a');
    input = input[0x0];
    const last = input['slice'](-0x1);
    const sufix = VZAZFJ['zEbtC'](last, 's') ? 'es' : 's';
    console['log']('' + input + sufix);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));