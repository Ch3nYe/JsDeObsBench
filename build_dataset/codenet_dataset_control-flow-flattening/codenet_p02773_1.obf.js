'use strict';
const main = arg => {
    const ZISajQ = {
        'UZznX': function (x, y) {
            return x < y;
        },
        'GpEhs': function (x, y) {
            return x > y;
        },
        'Kemui': function (x, y) {
            return x == y;
        },
        'KClBu': function (x, y) {
            return x * y;
        }
    };
    const rows = arg['trim']()['split']('\x0a');
    const N = rows['shift']();
    let wordsObj = {};
    rows['forEach'](row => {
        if (wordsObj[row]) {
            wordsObj[row]++;
        } else {
            wordsObj[row] = 0x1;
        }
    });
    let ansArr = [];
    let max = 0x0;
    let output = w => {
        console['log'](w);
    };
    for (let i = 0x0; ZISajQ['UZznX'](i, Object['keys'](wordsObj)['length']); i++) {
        if (wordsObj[Object['keys'](wordsObj)[i]] < max) {
            continue;
        } else if (ZISajQ['GpEhs'](wordsObj[Object['keys'](wordsObj)[i]], max)) {
            ansArr = [];
            ansArr['push'](Object['keys'](wordsObj)[i]);
            max = wordsObj[Object['keys'](wordsObj)[i]];
        } else if (ZISajQ['Kemui'](ZISajQ['KClBu'](wordsObj[Object['keys'](wordsObj)[i]], 0x1), max)) {
            ansArr['push'](Object['keys'](wordsObj)[i]);
        }
    }
    ansArr['sort']();
    ansArr['forEach'](output);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));