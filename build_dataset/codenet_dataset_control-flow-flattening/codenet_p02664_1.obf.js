function Main(str) {
    const yQBCYI = {
        'vhnyt': function (x, y) {
            return x - y;
        },
        'tdmEA': function (x, y) {
            return x - y;
        },
        'WEySO': function (x, y) {
            return x + y;
        },
        'ISTZG': function (x, y) {
            return x + y;
        }
    };
    let newString = '';
    for (let i = 0x0; i < str['length']; i++) {
        if (str[i] === '?' && (str[yQBCYI['vhnyt'](i, 0x1)] && str[yQBCYI['tdmEA'](i, 0x1)] === 'P' || str[yQBCYI['WEySO'](i, 0x1)] && str[yQBCYI['WEySO'](i, 0x1)] === 'P')) {
            newString = yQBCYI['WEySO'](newString, 'D');
        } else if (str[i] == '?') {
            newString = yQBCYI['WEySO'](newString, 'P');
        } else {
            newString = yQBCYI['ISTZG'](newString, str[i]);
        }
    }
    console['log'](newString);
}
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
Main(input);