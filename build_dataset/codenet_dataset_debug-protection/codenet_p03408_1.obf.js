'use strict';
function Main(input) {
    const _0x42b4c5 = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
                    fn = null;
                    return res;
                }
            } : function () {
            };
            firstCall = ![];
            return rfn;
        };
    }());
    (function () {
        _0x42b4c5(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x8ae9a3('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x8ae9a3();
            }
        })();
    }());
    const params = input['trim']()['split']('\x0a');
    const N = Number(params[0x0]['trim']());
    const M = Number(params[N + 0x1]['trim']());
    const blueCards = params['slice'](0x1, N + 0x1);
    const redCards = params['slice'](N + 0x2);
    let cardCount = {};
    for (const card of blueCards) {
        const c = card['trim']();
        if (cardCount['hasOwnProperty'](c)) {
            cardCount[c] = cardCount[c] + 0x1;
        } else {
            cardCount[c] = 0x1;
        }
    }
    for (const card of redCards) {
        const c = card['trim']();
        if (cardCount['hasOwnProperty'](c)) {
            cardCount[c] = cardCount[c] - 0x1;
        } else {
            cardCount[c] = 0x1;
        }
    }
    let maxMoney = 0x0;
    for (const [key, money] of Object['entries'](cardCount)) {
        if (maxMoney < money) {
            maxMoney = money;
        }
    }
    console['log'](maxMoney);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x8ae9a3(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}