const a0_0x38820f = (function () {
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
    a0_0x38820f(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x41103c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x41103c();
        }
    })();
}());
'use strict';
const main = input => {
    input = input['trim']()['split']('\x0a');
    const K = parseInt(input[0x0]['split']('\x20')[0x0]);
    const T = parseInt(input[0x0]['split']('\x20')[0x1]);
    let a = input[0x1]['split']('\x20')['map'](el => {
        return parseInt(el);
    });
    let max = a['reduce'](function (previous, current) {
        return previous > current ? previous : current;
    });
    if (max - 0x1 - (K - max) > 0x0) {
        console['log'](max - 0x1 - (K - max));
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x41103c(ret) {
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