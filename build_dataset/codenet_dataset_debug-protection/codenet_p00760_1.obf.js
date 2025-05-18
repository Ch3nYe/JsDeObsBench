const a0_0x3004df = (function () {
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
    a0_0x3004df(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x4a4eb8('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4a4eb8();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
const lines = input['trim']()['split']('\x0a');
const nextDay = (y, m, d) => {
    d = d + 0x1;
    if (y % 0x3 === 0x0) {
        if (d > 0x14) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                m = 0x1;
                y++;
            }
        }
    } else {
        if (d > 0x14) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                m = 0x1;
                y++;
            }
        } else if (d > 0x13 && m % 0x2 === 0x0) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                m = 0x1;
                y++;
            }
        }
    }
    return [
        y,
        m,
        d
    ];
};
lines['shift']();
lines['forEach'](line => {
    let [y, m, d] = line['trim']()['split']('\x20')['map'](Number);
    let count = 0x1;
    while (y !== 0x3e8 || m !== 0x1 || d !== 0x1) {
        [y, m, d] = nextDay(y, m, d);
        count++;
    }
    console['log'](count - 0x1);
});
function a0_0x4a4eb8(ret) {
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