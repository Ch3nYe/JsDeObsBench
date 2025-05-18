function Main(input) {
    const skavdF = {
        'GpcFU': function (callee, param1) {
            return callee(param1);
        },
        'HHAZs': function (x, y) {
            return x <= y;
        },
        'oPoYW': function (x, y) {
            return x ** y;
        },
        'uSdjH': function (x, y) {
            return x > y;
        },
        'ctfHG': function (x, y) {
            return x + y;
        },
        'DiJHK': function (x, y) {
            return x <= y;
        },
        'hLZmP': function (x, y) {
            return x ** y;
        },
        'BQSzk': function (x, y) {
            return x ** y;
        },
        'ueJdn': function (x, y) {
            return x * y;
        },
        'BrBAG': function (x, y) {
            return x * y;
        },
        'obbrb': function (x, y) {
            return x - y;
        }
    };
    const N = skavdF['GpcFU'](Number, input);
    let fn = new Array(N)['fill'](0x0);
    for (let x = 0x1; skavdF['HHAZs'](skavdF['oPoYW'](x, 0x2), N); x++) {
        for (let y = 0x1; skavdF['HHAZs'](skavdF['oPoYW'](y, 0x2), N); y++) {
            if (skavdF['uSdjH'](skavdF['ctfHG'](x, y), N))
                break;
            for (let z = 0x1; skavdF['DiJHK'](skavdF['hLZmP'](z, 0x2), N); z++) {
                const i = skavdF['ctfHG'](skavdF['ctfHG'](skavdF['ctfHG'](skavdF['ctfHG'](skavdF['ctfHG'](skavdF['hLZmP'](x, 0x2), skavdF['hLZmP'](y, 0x2)), skavdF['BQSzk'](z, 0x2)), skavdF['ueJdn'](x, y)), skavdF['BrBAG'](y, z)), skavdF['ueJdn'](z, x));
                if (i > N)
                    break;
                fn[skavdF['obbrb'](i, 0x1)]++;
            }
        }
    }
    console['log'](fn['join']('\x0a'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));