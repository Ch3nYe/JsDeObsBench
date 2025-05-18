function Main(input) {
    const _0x3ab93f = (function () {
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
        _0x3ab93f(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xe03a47('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xe03a47();
            }
        })();
    }());
    input = input['split']('\x0a');
    let target = parseInt(input[0x0]['split']('\x20')[0x0]);
    let zerocheck = parseInt(input[0x0]['split']('\x20')[0x1]);
    if (zerocheck == 0x0) {
        console['log'](target);
    } else {
        let str = input[0x1]['split']('\x20');
        for (let i = 0x0; i < str['length']; i++) {
            let num = parseInt(str[i]);
            str[i] = target - num;
        }
        for (let ite = 0x1; ite <= 0x64; ite++) {
            const isp = str['indexOf'](ite);
            const isn = str['indexOf'](-ite);
            if (isp == -0x1) {
                console['log'](target - ite);
                break;
            }
            if (isn == -0x1) {
                console['log'](target + ite);
                break;
            }
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xe03a47(ret) {
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