function Main(input) {
    const _0x2dc812 = (function () {
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
        _0x2dc812(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4b9dd8('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4b9dd8();
            }
        })();
    }());
    tmp = input['split']('\x0a');
    tmp2 = tmp[0x0]['split']('\x20');
    var n = parseInt(tmp2[0x0], 0xa);
    var k = parseInt(tmp2[0x1], 0xa);
    tmp['shift']();
    arry = tmp['slice']();
    list = [];
    count = 0x0;
    tmp3 = [];
    for (let i = 0x0; i < arry['length']; i++) {
        if (i % 0x2 !== 0x0) {
            arry[i] = arry[i]['split']('\x20');
            tmp3 = arry[i]['map'](Number);
            for (let index = 0x0; index < tmp3['length']; index++) {
                list['push'](tmp3[index]);
            }
        }
    }
    for (let i = 0x1; i <= n; i++) {
        if (list['indexOf'](i) >= 0x0) {
        } else {
            count += 0x1;
        }
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4b9dd8(ret) {
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