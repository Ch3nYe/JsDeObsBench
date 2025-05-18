function Main(input) {
    var NiLWsq = {
        'qrStj': 'SUN',
        'vFmak': 'TUE',
        'laliG': 'WED',
        'dTwHO': 'THU',
        'NSmcU': 'FRI',
        'gkMft': 'SAT'
    };
    var result;
    switch (input) {
    case NiLWsq['qrStj']:
        result = '7';
        break;
    case 'MON':
        result = '6';
        break;
    case NiLWsq['vFmak']:
        result = '5';
        break;
    case NiLWsq['laliG']:
        result = '4';
        break;
    case NiLWsq['dTwHO']:
        result = '3';
        break;
    case NiLWsq['NSmcU']:
        result = '2';
        break;
    case NiLWsq['gkMft']:
        result = '1';
        break;
    }
    console['log'](result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));