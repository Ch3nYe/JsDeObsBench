function main(input) {
    const _0x4f5314 = (function () {
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
        _0x4f5314(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x15f552('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x15f552();
            }
        })();
    }());
    const list = input['split']('\x0a')['slice'](0x1)['map'](s => Array['from'](s)['sort']()['join'](''));
    let totalCount = 0x0;
    const map = new Map();
    for (let i = 0x0; i < list['length']; i++) {
        if (!map['has'](list[i])) {
            map['set'](list[i], 0x1);
            continue;
        }
        totalCount += map['get'](list[i]);
        map['set'](list[i], map['get'](list[i]) + 0x1);
    }
    console['log'](totalCount);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x15f552(ret) {
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