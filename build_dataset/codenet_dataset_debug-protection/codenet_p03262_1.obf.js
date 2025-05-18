const a0_0x52a341 = (function () {
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
    a0_0x52a341(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1c7261('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1c7261();
        }
    })();
}());
'use strict';
const main = input => {
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]['split']('\x20')[0x0]);
    const X = parseInt(input[0x0]['split']('\x20')[0x1]);
    const arr = input[0x1]['split']('\x20')['map'](v => parseInt(v))['sort']((a, b) => a - b);
    let mostNear = 0x174876e800;
    arr['forEach'](v => {
        let dist = Math['abs'](X - v);
        if (dist < mostNear) {
            mostNear = dist;
        }
    });
    for (let i = mostNear; i >= 0x0; i--) {
        for (let v of arr) {
            let diff = Math['abs'](v - X);
            if (diff % mostNear !== 0x0) {
                break;
            }
            console['log'](i);
            return;
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function a0_0x1c7261(ret) {
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