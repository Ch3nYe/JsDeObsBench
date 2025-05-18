'use strict';
function a0_0x141b(NKGUzM, key) {
    const stringArray = a0_0x1d8a();
    a0_0x141b = function (index, key) {
        index = index - 0x90;
        let value = stringArray[index];
        return value;
    };
    return a0_0x141b(NKGUzM, key);
}
const a0_0x59bb17 = a0_0x141b;
(function (stringArrayFunction, comparisonValue) {
    const _0x4eaff8 = a0_0x141b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4eaff8(0x9a)) / 0x1 + -parseInt(_0x4eaff8(0x93)) / 0x2 + -parseInt(_0x4eaff8(0x94)) / 0x3 * (-parseInt(_0x4eaff8(0x97)) / 0x4) + -parseInt(_0x4eaff8(0x9c)) / 0x5 * (-parseInt(_0x4eaff8(0x9f)) / 0x6) + -parseInt(_0x4eaff8(0x9d)) / 0x7 + -parseInt(_0x4eaff8(0x91)) / 0x8 + parseInt(_0x4eaff8(0xa1)) / 0x9 * (parseInt(_0x4eaff8(0xa0)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d8a, 0xe607a));
function Main(input) {
    const _0x8b4a5f = a0_0x141b;
    const params = input[_0x8b4a5f(0x95)]()[_0x8b4a5f(0x98)]('\x0a');
    const N = Number(params[0x0][_0x8b4a5f(0x95)]());
    const M = Number(params[N + 0x1][_0x8b4a5f(0x95)]());
    const blueCards = params[_0x8b4a5f(0x99)](0x1, N + 0x1);
    const redCards = params['slice'](N + 0x2);
    let cardCount = {};
    for (const card of blueCards) {
        const c = card[_0x8b4a5f(0x95)]();
        if (cardCount[_0x8b4a5f(0x96)](c)) {
            cardCount[c] = cardCount[c] + 0x1;
        } else {
            cardCount[c] = 0x1;
        }
    }
    for (const card of redCards) {
        const c = card['trim']();
        if (cardCount[_0x8b4a5f(0x96)](c)) {
            cardCount[c] = cardCount[c] - 0x1;
        } else {
            cardCount[c] = 0x1;
        }
    }
    let maxMoney = 0x0;
    for (const [key, money] of Object[_0x8b4a5f(0x92)](cardCount)) {
        if (maxMoney < money) {
            maxMoney = money;
        }
    }
    console[_0x8b4a5f(0x9b)](maxMoney);
}
function a0_0x1d8a() {
    const _0x4f3d71 = [
        'utf8',
        '1970856VMAiVH',
        'entries',
        '3028704glLiTE',
        '409515ETtFEU',
        'trim',
        'hasOwnProperty',
        '24mOlPKl',
        'split',
        'slice',
        '1440051HMuZrh',
        'log',
        '15ByFQap',
        '11474925lHfcUE',
        '/dev/stdin',
        '2696010TXXWxf',
        '1000zjrWwI',
        '66159NXufZv'
    ];
    a0_0x1d8a = function () {
        return _0x4f3d71;
    };
    return a0_0x1d8a();
}
Main(require('fs')['readFileSync'](a0_0x59bb17(0x9e), a0_0x59bb17(0x90)));