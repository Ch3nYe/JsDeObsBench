function Main(input) {
    const ANfbJS = {
        'mrOis': function (x, y) {
            return x + y;
        },
        'aOVBh': 'Left',
        'WjrOq': 'Right',
        'wTHmp': 'Balanced'
    };
    const numbers = input['split']('\x20')['map'](n => Number(n));
    const l = ANfbJS['mrOis'](numbers[0x0], numbers[0x1]);
    const r = numbers[0x2] + numbers[0x3];
    if (l > r) {
        console['log'](ANfbJS['aOVBh']);
    } else if (l < r) {
        console['log'](ANfbJS['WjrOq']);
    } else {
        console['log'](ANfbJS['wTHmp']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));