const a0_0x202c58 = (function () {
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
    a0_0x202c58(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x2169f7('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2169f7();
        }
    })();
}());
'use strict';
const main = input => {
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]);
    let X = [];
    let Y = [];
    let Z = [];
    input['slice'](0x1, N + 0x1)['forEach'](v => {
        let tmp = v['split']('\x20')['map'](j => parseInt(j));
        X['push'](tmp[0x0]);
        Y['push'](tmp[0x1]);
        Z['push'](tmp[0x2]);
    });
    const MAX = 0x64;
    for (let y = 0x0; y <= MAX; y++) {
        for (let x = 0x0; x <= MAX; x++) {
            let needH = -0x1;
            for (let i = 0x0; i < N; i++) {
                let tmp = Z[i] + Math['abs'](Y[i] - y) + Math['abs'](X[i] - x);
                if (needH === -0x1) {
                    needH = tmp;
                } else if (needH !== tmp) {
                    needH = -0x2;
                    break;
                }
            }
            if (needH === -0x2)
                continue;
            console['log']('%d\x20%d\x20%d', x, y, needH);
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function a0_0x2169f7(ret) {
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