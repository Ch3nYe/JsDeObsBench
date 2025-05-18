function Main(input) {
    const fDtypi = {
        'qRCXn': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'YkcUs': function (x, y) {
            return x > y;
        },
        'didoJ': function (x, y) {
            return x / y;
        },
        'EVEks': function (x, y) {
            return x == y;
        },
        'JeAgM': function (x, y) {
            return x < y;
        },
        'PhONx': function (x, y) {
            return x / y;
        },
        'eIhvL': function (x, y) {
            return x < y;
        },
        'CjqsX': function (x, y) {
            return x / y;
        },
        'UgIsP': function (x, y) {
            return x % y;
        },
        'LIyrD': function (x, y) {
            return x < y;
        },
        'DDyum': function (x, y) {
            return x % y;
        },
        'yYHvc': function (x, y) {
            return x / y;
        },
        'KTsIK': function (x, y) {
            return x < y;
        },
        'KgvCu': 'Yes'
    };
    input = input['split']('\x20');
    const num = fDtypi['qRCXn'](parseInt, input[0x0], 0xa);
    if (fDtypi['YkcUs'](num, 0x51)) {
        console['log']('No');
        return;
    }
    if (num % 0x2 == 0x0 && fDtypi['didoJ'](num, 0x2) < 0xa || fDtypi['EVEks'](num % 0x3, 0x0) && fDtypi['JeAgM'](num / 0x3, 0xa) || num % 0x4 == 0x0 && fDtypi['JeAgM'](fDtypi['PhONx'](num, 0x4), 0xa) || fDtypi['EVEks'](num % 0x5, 0x0) && fDtypi['eIhvL'](fDtypi['CjqsX'](num, 0x5), 0xa) || fDtypi['EVEks'](fDtypi['UgIsP'](num, 0x6), 0x0) && fDtypi['eIhvL'](fDtypi['CjqsX'](num, 0x6), 0xa) || fDtypi['EVEks'](fDtypi['UgIsP'](num, 0x7), 0x0) && fDtypi['LIyrD'](num / 0x7, 0xa) || fDtypi['EVEks'](fDtypi['DDyum'](num, 0x8), 0x0) && fDtypi['eIhvL'](fDtypi['yYHvc'](num, 0x8), 0xa) || fDtypi['UgIsP'](num, 0x9) == 0x0 && fDtypi['KTsIK'](fDtypi['yYHvc'](num, 0x9), 0xa)) {
        console['log'](fDtypi['KgvCu']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));