const a0_0x540c95 = (function () {
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
    a0_0x540c95(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x424308('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x424308();
        }
    })();
}());
'use strict';
const main = arg => {
    const input = arg['trim']()['split']('\x0a');
    let N = Number(input[0x0]['split']('\x20')[0x0]);
    let x = Number(input[0x0]['split']('\x20')[0x1]);
    let As = input[0x1]['split']('\x20')['map'](n => Number(n));
    let manip = 0x0;
    for (let i = 0x0; i < N; i++) {
        let exceed = As[i] - x;
        if (exceed > 0x0) {
            As[i] = x;
            manip += exceed;
        }
    }
    for (let i = 0x1; i < N - 0x1; i++) {
        let left = As[i - 0x1];
        let current = As[i];
        let right = As[i + 0x1];
        if (left + current > x && current + right > x) {
            As[i] = x - left;
            manip += current - (x - left);
        }
    }
    for (let i = 0x0; i < N - 0x1; i++) {
        let current = As[i];
        let right = As[i + 0x1];
        if (current + right > x) {
            As[i] = x - right;
            manip += current - (x - right);
        }
    }
    console['log'](manip);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x424308(ret) {
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