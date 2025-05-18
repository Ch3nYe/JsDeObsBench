'use strict';
function Main(input) {
    const VvjiAJ = {
        'Uqyqs': function (x, y) {
            return x + y;
        },
        'UmPzB': function (x, y) {
            return x + y;
        },
        'fJefh': function (x, y) {
            return x + y;
        },
        'GkYAO': function (x, y) {
            return x + y;
        },
        'TrfLL': function (x, y) {
            return x - y;
        },
        'GyFQM': function (x, y) {
            return x < y;
        }
    };
    const params = input['trim']()['split']('\x0a');
    const N = Number(params[0x0]['trim']());
    const M = Number(params[VvjiAJ['Uqyqs'](N, 0x1)]['trim']());
    const blueCards = params['slice'](0x1, VvjiAJ['UmPzB'](N, 0x1));
    const redCards = params['slice'](VvjiAJ['fJefh'](N, 0x2));
    let cardCount = {};
    for (const card of blueCards) {
        const c = card['trim']();
        if (cardCount['hasOwnProperty'](c)) {
            cardCount[c] = VvjiAJ['GkYAO'](cardCount[c], 0x1);
        } else {
            cardCount[c] = 0x1;
        }
    }
    for (const card of redCards) {
        const c = card['trim']();
        if (cardCount['hasOwnProperty'](c)) {
            cardCount[c] = VvjiAJ['TrfLL'](cardCount[c], 0x1);
        } else {
            cardCount[c] = 0x1;
        }
    }
    let maxMoney = 0x0;
    for (const [key, money] of Object['entries'](cardCount)) {
        if (VvjiAJ['GyFQM'](maxMoney, money)) {
            maxMoney = money;
        }
    }
    console['log'](maxMoney);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));