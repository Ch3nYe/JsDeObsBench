const a0_0x15eff9 = (function () {
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
    a0_0x15eff9(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x5f377b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5f377b();
        }
    })();
}());
const Main = input => {
    ABN = input['split']('\x20')['map'](item => parseInt(item));
    console['log'](F(ABN[0x0], ABN[0x1], ABN[0x2]));
};
const F = (A, B, N) => {
    max = 0x0;
    count = 0x0;
    count0 = 0x0;
    for (x = 0x0; x <= N; x++) {
        result = Math['floor'](A * x / B) - A * Math['floor'](x / B);
        if (result == 0x0) {
            count0++;
        }
        if (count0 > 0x2) {
            break;
        }
        if (result > max) {
            max = result;
            count = x;
        }
    }
    return max;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x5f377b(ret) {
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