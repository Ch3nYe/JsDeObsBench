'use strict';
function main(input) {
    const _0x29b94f = (function () {
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
        _0x29b94f(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x7772fb('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x7772fb();
            }
        })();
    }());
    const inputRows = input['split']('\x0a');
    const d = parseInt(inputRows[0x0]);
    let cStrArray = inputRows[0x1]['split']('\x20');
    const c = cStrArray['map'](str => parseInt(str));
    let s = [];
    for (let i = 0x2; i < inputRows['length']; i++) {
        s['push']([]);
        const tmpRow = inputRows[i]['split']('\x20');
        for (let j = 0x0; j < tmpRow['length']; j++) {
            s[i - 0x2]['push'](parseInt(tmpRow[j]));
        }
    }
    let t = [];
    for (let i = 0x0; i < s['length']; i++) {
        let tmpMax = s[i][0x0];
        let index = 0x0;
        for (let j = 0x1; j < s[i]['length']; j++) {
            if (s[i][j] > tmpMax) {
                index = j;
                tmpMax = s[i][j];
            }
        }
        t['push'](index + 0x1);
    }
    for (let i = 0x0; i < t['length']; i++) {
        console['log'](t[i]);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
main(input);
function _0x7772fb(ret) {
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