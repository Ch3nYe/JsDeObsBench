(function main() {
    const _0x2a733e = (function () {
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
        _0x2a733e(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xc198ef('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xc198ef();
            }
        })();
    }());
    let lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    let [n, k] = lines['shift']()['split']('\x20')['map'](Number);
    let w = lines['map'](Number);
    const canAllStack = p => {
        let cnt = 0x0, sum = 0x0;
        for (let i = 0x0; i < k; i++) {
            for (sum = 0x0; sum + w[cnt] <= p;) {
                sum += w[cnt++];
                if (cnt === n)
                    return n;
            }
        }
        return cnt;
    };
    let mid, left = 0x0, right = 0x3b9aca00;
    while (right - left > 0x1) {
        mid = (right + left) / 0x2;
        if (canAllStack(mid) >= n)
            right = mid;
        else
            left = mid;
    }
    console['log'](Math['floor'](right));
}());
function _0xc198ef(ret) {
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