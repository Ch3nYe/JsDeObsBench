const a0_0x4548eb = (function () {
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
    a0_0x4548eb(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x42dbac('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x42dbac();
        }
    })();
}());
console['log']((args => {
    const [s, t] = args['trim']()['split']`\n`;
    const sl = s['length'], tl = t['length'];
    let i = -0x1, cyc = 0x0;
    T:
        for (let j = 0x0; j < tl; j++) {
            for (let k = i + 0x1; k < sl; k++) {
                if (s[k] === t[j]) {
                    i = k;
                    continue T;
                }
            }
            if (i === -0x1)
                return '-1';
            cyc++;
            i = -0x1;
            j--;
        }
    return '' + (cyc * sl + i + 0x1);
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x42dbac(ret) {
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