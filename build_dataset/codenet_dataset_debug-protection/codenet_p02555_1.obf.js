const a0_0x12795c = (function () {
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
    a0_0x12795c(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x451c70('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x451c70();
        }
    })();
}());
const main = input => {
    const mod = 0xa ** 0x9 + 0x7;
    const s = Number(input['trim']());
    const dp = [
        0x1,
        ...new Array(s)['fill'](0x0)
    ];
    for (let x = 0x3; x < dp['length']; x++) {
        let sum = 0x0;
        for (let i = x - 0x3; i >= 0x0; i--) {
            sum = (sum + dp[i]) % mod;
        }
        dp[x] = sum;
    }
    return console['log']((dp[s] % mod + mod) % mod);
};
process['env']['MYTEST'] ? process['env']['MYTEST'] === 'test' ? test() : main(require('fs')['readFileSync']('dev/stdin', 'utf8')) : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x451c70(ret) {
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