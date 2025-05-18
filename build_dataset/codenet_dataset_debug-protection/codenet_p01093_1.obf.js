const a0_0x40dbfa = (function () {
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
    a0_0x40dbfa(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1be114('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1be114();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['trim']()['split']('\x0a');
while (line = lines['shift']()) {
    const numbers = line['split']('\x20')['map'](Number);
    if (numbers['length'] > 0x1) {
        const diffList = [];
        numbers['map']((num1, ind1) => {
            numbers['map']((num2, ind2) => {
                if (ind1 !== ind2) {
                    const diff = Math['abs'](num1 - num2);
                    const pair = num1 + '\x20' + num2;
                    diffList['push']([
                        pair,
                        diff
                    ]);
                }
            });
        });
        const sorted = diffList['sort']((p1, p2) => p1[0x1] - p2[0x1])[0x0];
        console['log'](sorted[0x1]);
    }
}
function a0_0x1be114(ret) {
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