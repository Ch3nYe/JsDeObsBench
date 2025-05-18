function Main(input) {
    const _0x63d120 = (function () {
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
        _0x63d120(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x19eee5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x19eee5();
            }
        })();
    }());
    input = input['split']('\x0a');
    const s = input[0x0];
    const t = input[0x1];
    const match = [];
    for (i = 0x0; i < s['length']; i++) {
        if ((s + t)['slice'](i, i + t['length']) == t) {
            match['push'](!![]);
        } else {
            match['push'](![]);
        }
    }
    max = 0x0;
    for (i = 0x0; i < s['length']; i++) {
        isInf = ![];
        now = i;
        getted = [];
        while (match[now]) {
            getted['push'](now);
            now = (now + t['length']) % s['length'];
            if (getted['indexOf'](now) != -0x1) {
                isInf = !![];
                break;
            }
        }
        if (isInf) {
            max = -0x1;
            break;
        } else {
            if (max < getted['length'])
                max = getted['length'];
        }
    }
    console['log'](max);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x19eee5(ret) {
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