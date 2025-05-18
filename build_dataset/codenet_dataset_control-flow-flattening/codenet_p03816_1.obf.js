'use strict';
function main(n, array) {
    const cMhNpr = {
        'TzcAX': function (x, y) {
            return x % y;
        },
        'eQkge': function (x, y) {
            return x + y;
        },
        'jhrfu': function (x, y) {
            return x === y;
        }
    };
    let counter = {};
    for (let a of array) {
        counter[a] = counter[a] || 0x0;
        counter[a]++;
    }
    let nums = Object['keys'](counter);
    let evenCount = nums['reduce']((count, num) => {
        if (cMhNpr['TzcAX'](counter[num], 0x2) === 0x0) {
            return cMhNpr['eQkge'](count, 0x1);
        } else {
            return count;
        }
    }, 0x0);
    let answer;
    if (cMhNpr['jhrfu'](evenCount % 0x2, 0x0)) {
        answer = nums['length'];
    } else {
        answer = nums['length'] - 0x1;
    }
    console['log'](answer);
}
function doMain() {
    const kdnubt = {
        'YomvI': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'lmDWq': 'utf8',
        'mZupd': 'data',
        'sFNKZ': 'end'
    };
    let input = '';
    process['stdin']['resume']();
    process['stdin']['setEncoding'](kdnubt['lmDWq']);
    process['stdin']['on'](kdnubt['mZupd'], chunk => {
        input += chunk;
    });
    process['stdin']['on'](kdnubt['sFNKZ'], () => {
        input = input['trim']()['split']('\x0a');
        let n = Number(input[0x0]);
        let array = input[0x1]['split']('\x20')['map'](a => Number(a));
        kdnubt['YomvI'](main, n, array);
    });
}
doMain();