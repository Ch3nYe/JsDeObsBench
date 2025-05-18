'use strict';
const a0_0x238d8a = a0_0x26b2;
function a0_0x26b2(MnHcLm, key) {
    const stringArray = a0_0x402f();
    a0_0x26b2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x26b2(MnHcLm, key);
}
function a0_0x402f() {
    const _0x3f305a = [
        'trim',
        'split',
        'slice',
        'Pefuo',
        'hasOwnProperty',
        'Yzftn',
        'TtoDy',
        'HAMUy',
        'PNCdQ',
        'entries',
        'PrxcF',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x402f = function () {
        return _0x3f305a;
    };
    return a0_0x402f();
}
function Main(input) {
    const _0x529898 = a0_0x26b2;
    const params = input[_0x529898(0x0)]()[_0x529898(0x1)]('\x0a');
    const N = Number(params[0x0][_0x529898(0x0)]());
    const M = Number(params[N + 0x1][_0x529898(0x0)]());
    const blueCards = params[_0x529898(0x2)](0x1, N + 0x1);
    const redCards = params[_0x529898(0x2)](N + 0x2);
    let cardCount = {};
    for (const card of blueCards) {
        const c = card[_0x529898(0x0)]();
        if (cardCount['hasOwnProperty'](c)) {
            cardCount[c] = cardCount[c] + 0x1;
        } else {
            if ('sOHtP' === 'sOHtP') {
                cardCount[c] = 0x1;
            } else {
                if (maxMoney < money) {
                    maxMoney = money;
                }
            }
        }
    }
    for (const card of redCards) {
        if (_0x529898(0x3) !== _0x529898(0x3)) {
            const c = card['trim']();
            if (cardCount[_0x529898(0x4)](c)) {
                cardCount[c] = cardCount[c] - 0x1;
            } else {
                cardCount[c] = 0x1;
            }
        } else {
            const c = card['trim']();
            if (cardCount['hasOwnProperty'](c)) {
                if (_0x529898(0x5) === _0x529898(0x6)) {
                    maxMoney = money;
                } else {
                    cardCount[c] = cardCount[c] - 0x1;
                }
            } else {
                if (_0x529898(0x7) === _0x529898(0x8)) {
                    const c = card[_0x529898(0x0)]();
                    if (cardCount[_0x529898(0x4)](c)) {
                        cardCount[c] = cardCount[c] + 0x1;
                    } else {
                        cardCount[c] = 0x1;
                    }
                } else {
                    cardCount[c] = 0x1;
                }
            }
        }
    }
    let maxMoney = 0x0;
    for (const [key, money] of Object[_0x529898(0x9)](cardCount)) {
        if (_0x529898(0xa) !== _0x529898(0xa)) {
            cardCount[c] = 0x1;
        } else {
            if (maxMoney < money) {
                maxMoney = money;
            }
        }
    }
    console[_0x529898(0xb)](maxMoney);
}
Main(require('fs')[a0_0x238d8a(0xc)]('/dev/stdin', a0_0x238d8a(0xd)));