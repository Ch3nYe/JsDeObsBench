'use strict';
function Main(input) {
    const UFcCnG = {
        'optRr': 'dream',
        'PWHyo': 'dreamer',
        'aKCIG': 'erase',
        'bDFZb': 'eraser',
        'Exlft': function (callee, param1) {
            return callee(param1);
        },
        'pNAOM': function (x, y) {
            return x > y;
        },
        'EKHUj': function (x, y) {
            return x == y;
        },
        'BkGmH': function (x, y) {
            return x <= y;
        },
        'MoEUU': 'YES'
    };
    const arr = [
        UFcCnG['optRr'],
        UFcCnG['PWHyo'],
        UFcCnG['aKCIG'],
        UFcCnG['bDFZb']
    ];
    for (let i in arr) {
        arr[i] = UFcCnG['Exlft'](reverse, arr[i]);
    }
    input = UFcCnG['Exlft'](reverse, input);
    while (UFcCnG['pNAOM'](input['length'], 0x0)) {
        let flag = ![];
        for (let s of arr) {
            if (UFcCnG['EKHUj'](input['slice'](0x0, s['length']), s)) {
                input = input['substr'](s['length']);
                flag = !![];
            }
        }
        if (UFcCnG['EKHUj'](flag, ![]))
            break;
    }
    if (UFcCnG['BkGmH'](input['length'], 0x0)) {
        console['log'](UFcCnG['MoEUU']);
    } else {
        console['log']('NO');
    }
}
function reverse(str) {
    return str['split']('')['reverse']()['join']('');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));