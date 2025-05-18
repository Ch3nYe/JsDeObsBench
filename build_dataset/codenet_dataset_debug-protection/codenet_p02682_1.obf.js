'use strict';
function main(arg) {
    const _0x195523 = (function () {
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
        _0x195523(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x51e14c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x51e14c();
            }
        })();
    }());
    let getInt = arg['trim']()['split']('\x20')[0x3];
    let oneCount = arg['trim']()['split']('\x20')[0x0];
    let zeroCnt = arg['trim']()['split']('\x20')[0x1];
    let minusCnt = arg['trim']()['split']('\x20')[0x2];
    let result = 0x0;
    if (oneCount == 0x0 && zeroCnt == 0x0 && minusCnt == 0x0) {
        console['log'](0x0);
        return;
    }
    if (getInt > 0x0) {
        if (getInt > oneCount) {
            result = oneCount * 0x1;
        } else {
            result = getInt * 0x1;
        }
        getInt = getInt - oneCount;
    }
    if (getInt > 0x0) {
        getInt = getInt - zeroCnt;
    }
    if (getInt > 0x0) {
        result = result + getInt * -0x1;
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x51e14c(ret) {
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