function Main(input) {
    const _0x5d3ec6 = (function () {
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
        _0x5d3ec6(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0xbe22b1('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xbe22b1();
            }
        })();
    }());
    let [l, ...valArr] = input['split']('\x0a');
    valArr = valArr['map'](e => parseFloat(e));
    let result = [];
    for (let ele of valArr) {
        let temp = valArr['map'](e => {
            if (e !== ele && e * ele % 0x1 === 0x0 && ele < e) {
                return [
                    ele,
                    e
                ];
            }
        });
        temp = temp['filter'](e => e !== undefined);
        if (temp['length']) {
            result = [
                ...result,
                ...temp
            ];
        }
    }
    console['log'](result['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xbe22b1(ret) {
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