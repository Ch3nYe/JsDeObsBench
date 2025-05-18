function Main(input) {
    const IbUSJY = {
        'TMvEG': function (x, y) {
            return x <= y;
        },
        'UbYwe': function (x, y) {
            return x % y;
        },
        'qDWId': function (x, y) {
            return x === y;
        },
        'wakLT': function (x, y) {
            return x % y;
        },
        'ZrVqL': function (x, y) {
            return x === y;
        },
        'kCerU': function (x, y) {
            return x % y;
        },
        'Pjfki': function (callee, param1) {
            return callee(param1);
        },
        'zbNLY': function (x, y) {
            return x <= y;
        },
        'NwCJC': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const k = input;
    let sum = 0x0;
    const dv = n => {
        const divisors = [];
        const s = Math['sqrt'](n);
        for (let i = 0x1; IbUSJY['TMvEG'](i, s); i++) {
            if (IbUSJY['UbYwe'](n, i) === 0x0) {
                if (i === n / i) {
                    divisors['push'](i);
                } else {
                    divisors['push'](i, n / i);
                }
            }
        }
        return divisors;
    };
    const gcd = (a, b, c) => {
        const min = Math['min'](a, b, c);
        const dvmin = IbUSJY['Pjfki'](dv, min);
        const candidate = [];
        dvmin['forEach'](i => {
            if (IbUSJY['qDWId'](IbUSJY['wakLT'](a, i), 0x0) && IbUSJY['ZrVqL'](IbUSJY['kCerU'](b, i), 0x0) && c % i === 0x0) {
                candidate['push'](i);
            }
        });
        return Math['max'](...candidate);
    };
    for (let a = 0x1; IbUSJY['zbNLY'](a, k); a++) {
        for (let b = 0x1; IbUSJY['TMvEG'](b, k); b++) {
            for (let c = 0x1; c <= k; c++) {
                sum += IbUSJY['NwCJC'](gcd, a, b, c);
            }
        }
    }
    console['log'](sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));