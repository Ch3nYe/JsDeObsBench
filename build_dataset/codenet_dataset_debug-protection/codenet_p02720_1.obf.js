'use strict';
function main(input) {
    const _0x1e28f4 = (function () {
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
        _0x1e28f4(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xa48cf('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xa48cf();
            }
        })();
    }());
    const k = parseInt(input[0x0]);
    let i = 0x1;
    let runruncounter = 0x0;
    while (!![]) {
        const j = (i + '')['split']('')['map'](a => parseInt(a));
        let judge = !![];
        for (let l = 0x1; l < j['length']; l++) {
            if (Math['abs'](j[l] - j[l - 0x1]) > 0x1) {
                judge = ![];
                if (j[l] === 0x9) {
                    j[l - 0x1] += 0x1;
                    j[l] = 0x0;
                } else {
                    j[l] += 0x1;
                }
                i = parseInt(j['join'](''));
                break;
            }
        }
        if (judge) {
            runruncounter++;
            if (runruncounter === k) {
                console['log'](i);
                break;
            }
            i++;
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0xa48cf(ret) {
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