function Main(input) {
    const JVGwJh = {
        'DMFMP': function (x, y) {
            return x + y;
        },
        'ntswX': function (x, y) {
            return x <= y;
        },
        'iOIBT': function (x, y) {
            return x % y;
        },
        'zDSAi': function (x, y) {
            return x !== y;
        }
    };
    inputs = input['split']('\x0a');
    const N = Number(inputs[0x0]);
    const arr = [];
    for (let i = 0x1; JVGwJh['ntswX'](i, N); i++) {
        if (JVGwJh['iOIBT'](i, 0x3) !== 0x0 && JVGwJh['zDSAi'](JVGwJh['iOIBT'](i, 0x5), 0x0)) {
            arr['push'](i);
        }
    }
    const sum = arr['reduce']((prev, current) => {
        return JVGwJh['DMFMP'](prev, current);
    });
    console['log'](sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));