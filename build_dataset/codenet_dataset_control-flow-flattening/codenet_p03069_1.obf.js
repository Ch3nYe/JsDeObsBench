function Main(input) {
    'use strict';
    const iADzjZ = {
        'vfzeW': function (x, y) {
            return x < y;
        },
        'wOfYg': function (x, y) {
            return x === y;
        },
        'QgFtj': function (x, y) {
            return x === y;
        },
        'rxZUj': function (x, y) {
            return x === y;
        },
        'wlcOB': function (x, y) {
            return x <= y;
        }
    };
    const elements = input['split']('\x0a');
    let blackFlag = ![];
    let numBlack = 0x0;
    let numWhiteAfterBlack = 0x0;
    for (let i = 0x0; iADzjZ['vfzeW'](i, elements[0x0]); i++) {
        if (iADzjZ['wOfYg'](blackFlag, ![]) && iADzjZ['QgFtj'](elements[0x1][i], '#')) {
            blackFlag = !![];
        }
        if (iADzjZ['QgFtj'](blackFlag, !![]) && elements[0x1][i] === '.') {
            numWhiteAfterBlack++;
        }
        if (iADzjZ['QgFtj'](elements[0x1][i], '#')) {
            numBlack++;
        }
    }
    if (iADzjZ['wOfYg'](numWhiteAfterBlack, 0x0) && iADzjZ['rxZUj'](blackFlag, ![])) {
        console['log']('0');
    } else if (iADzjZ['QgFtj'](numWhiteAfterBlack, 0x0) && iADzjZ['rxZUj'](blackFlag, !![])) {
        console['log'](numBlack);
    } else if (iADzjZ['wlcOB'](numBlack, numWhiteAfterBlack)) {
        console['log'](numBlack);
    } else {
        console['log'](numWhiteAfterBlack);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));