'use strict';
const main = arg => {
    const XiwUoa = {
        'eXDmT': function (x, y) {
            return x === y;
        },
        'Gziyw': function (x, y) {
            return x === y;
        },
        'cOsjX': 'Yes'
    };
    arg = arg['trim']()['split']('\x0a');
    const S = arg[0x0]['split']('');
    let previous = null;
    for (let i in S) {
        if (XiwUoa['eXDmT'](previous, 'A') && XiwUoa['Gziyw'](S[i], 'C')) {
            console['log'](XiwUoa['cOsjX']);
            return;
        }
        previous = S[i];
    }
    console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));