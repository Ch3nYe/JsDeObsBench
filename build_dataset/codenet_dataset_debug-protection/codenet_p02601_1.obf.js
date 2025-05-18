'use strict';
function main(input) {
    const _0x14e4b5 = (function () {
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
        _0x14e4b5(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x26543c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x26543c();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const line_one = input[0x0]['split']('\x20');
    const K = parseInt(input[0x1]);
    let line_one_arr = [];
    for (let i in line_one) {
        line_one_arr['push'](parseInt(line_one[i]));
    }
    for (let i = 0x0; i < K; i++) {
        if (line_one_arr[0x0] >= line_one_arr[0x1]) {
            line_one_arr[0x1] = line_one_arr[0x1] * 0x2;
            continue;
        }
        if (line_one_arr[0x1] >= line_one_arr[0x2]) {
            line_one_arr[0x2] = line_one_arr[0x2] * 0x2;
        }
    }
    if (line_one_arr[0x0] < line_one_arr[0x1] && line_one_arr[0x1] < line_one_arr[0x2]) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function _0x26543c(ret) {
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