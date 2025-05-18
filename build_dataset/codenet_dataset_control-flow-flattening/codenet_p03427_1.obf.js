'use strict';
const main = input => {
    const wzAOOE = {
        'TTwrx': function (x, y) {
            return x === y;
        },
        'jPPXj': function (x, y) {
            return x - y;
        },
        'McymV': function (x, y) {
            return x - y;
        },
        'coNBH': function (callee, param1) {
            return callee(param1);
        },
        'elBwH': function (x, y) {
            return x + y;
        },
        'hITgC': function (x, y) {
            return x * y;
        }
    };
    const lines = input['split']('\x0a');
    if (wzAOOE['TTwrx'](lines[0x0]['length'], 0x1)) {
        console['log'](lines[0x0]);
        return;
    }
    const len9 = wzAOOE['jPPXj'](lines[0x0]['length'], 0x1);
    const head = wzAOOE['McymV'](wzAOOE['coNBH'](parseInt, lines[0x0][0x0]), 0x1);
    console['log'](wzAOOE['elBwH'](head, wzAOOE['hITgC'](len9, 0x9)));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));