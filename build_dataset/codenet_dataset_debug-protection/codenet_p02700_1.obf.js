function Main(input) {
    const _0x43f07c = (function () {
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
        _0x43f07c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4bf616('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4bf616();
            }
        })();
    }());
    const array = input['split']('\x20');
    let takahashi = Number(array[0x0]);
    let aoki = Number(array[0x2]);
    let count = 0x0;
    let bool = !![];
    while (bool) {
        if (count % 0x2 === 0x0) {
            aoki = aoki - Number(array[0x1]);
            if (aoki <= 0x0) {
                console['log']('Yes');
                bool = ![];
            }
        } else {
            takahashi = takahashi - Number(array[0x3]);
            if (takahashi <= 0x0) {
                console['log']('No');
                bool = ![];
            }
        }
        count++;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4bf616(ret) {
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