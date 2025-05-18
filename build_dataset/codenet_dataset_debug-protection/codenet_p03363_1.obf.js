const a0_0x39e1ba = (function () {
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
    a0_0x39e1ba(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x97e1d7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x97e1d7();
        }
    })();
}());
'use strict';
const main = arg => {
    arg = arg['trim']()['split']('\x0a');
    const N = arg[0x0] * 0x1;
    const nums = arg[0x1]['split']('\x20')['map'](x => x * 0x1);
    const totalSum = new Array(N)['fill'](0x0);
    for (let i = 0x0; i < N; i++) {
        totalSum[i] += (totalSum[i - 0x1] || 0x0) + nums[i];
    }
    let accumObj = {};
    accumObj[0x0] = 0x1;
    for (let i = 0x0; i < N; i++) {
        accumObj[totalSum[i]] = (accumObj[totalSum[i]] || 0x0) + 0x1;
    }
    let ans = 0x0;
    Object['keys'](accumObj)['forEach'](x => {
        ans += accumObj[x] * (accumObj[x] - 0x1) / 0x2;
    });
    console['log'](ans);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x97e1d7(ret) {
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