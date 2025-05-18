process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
const lines = [];
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    const Rcpaer = {
        'flxHR': function (callee, param1) {
            return callee(param1);
        },
        'DTbyp': function (x, y) {
            return x < y;
        },
        'iMDMz': function (x, y) {
            return x + y;
        },
        'Xkxhw': function (callee, param1) {
            return callee(param1);
        },
        'Vwjek': function (callee, param1) {
            return callee(param1);
        },
        'hvuYL': function (x, y) {
            return x - y;
        },
        'VJyTb': function (x, y) {
            return x <= y;
        },
        'XADUd': function (x, y) {
            return x !== y;
        },
        'GpBgF': function (x, y) {
            return x - y;
        },
        'buoXl': function (x, y) {
            return x - y;
        },
        'JDoUD': function (x, y) {
            return x - y;
        },
        'sxAQn': function (x, y) {
            return x * y;
        }
    };
    const inputLength = Rcpaer['flxHR'](Number, lines[0x0]);
    const inputString = lines[0x1];
    const inputArray = inputString['split']('');
    const rArray = inputArray['filter'](element => element === 'R');
    const gArray = inputArray['filter'](element => element === 'G');
    const bArray = inputArray['filter'](element => element === 'B');
    let sum = 0x0;
    for (let i = 0x1; Rcpaer['DTbyp'](i, Rcpaer['iMDMz'](Rcpaer['Xkxhw'](Number, inputLength), 0x1)); i++) {
        for (let j = Rcpaer['iMDMz'](i, 0x1); Rcpaer['DTbyp'](j, Rcpaer['iMDMz'](Rcpaer['Vwjek'](Number, inputLength), 0x1)); j++) {
            const k = Rcpaer['hvuYL'](Rcpaer['iMDMz'](j, j), i);
            if (Rcpaer['VJyTb'](k, inputLength) && Rcpaer['XADUd'](inputArray[Rcpaer['GpBgF'](i, 0x1)], inputArray[Rcpaer['buoXl'](j, 0x1)]) && Rcpaer['XADUd'](inputArray[j - 0x1], inputArray[Rcpaer['JDoUD'](k, 0x1)]) && Rcpaer['XADUd'](inputArray[Rcpaer['hvuYL'](i, 0x1)], inputArray[Rcpaer['GpBgF'](k, 0x1)])) {
                sum = Rcpaer['iMDMz'](sum, 0x1);
            }
        }
    }
    console['log'](Rcpaer['GpBgF'](Rcpaer['sxAQn'](rArray['length'], gArray['length']) * bArray['length'], sum));
});