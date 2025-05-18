'use strict';
function main(input) {
    const _0x2c6afa = (function () {
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
        _0x2c6afa(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x38c9af('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x38c9af();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const N = Number(input[0x0]);
    const line2_arr = input[0x1]['split']('\x20');
    let ans = 0x0;
    for (let i = 0x0; i < N; i++) {
        if (Number(line2_arr[i]) == 0x0)
            continue;
        for (let j = i + 0x1; j < N; j++) {
            ans = ans + Number(line2_arr[i]) * Number(line2_arr[j]);
        }
    }
    console['log'](ans % 0x3b9aca07);
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function _0x38c9af(ret) {
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