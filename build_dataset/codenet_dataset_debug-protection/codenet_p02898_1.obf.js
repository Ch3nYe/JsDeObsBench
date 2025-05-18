'use strict';
function main(input) {
    const _0x1f9b9a = (function () {
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
        _0x1f9b9a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x17f532('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x17f532();
            }
        })();
    }());
    let pass_friend_num = parseInt(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const pass_height = parseInt(input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const friend_height_data = input['split']('\x0a')[0x1]['split']('\x20');
    for (let i = 0x0; i < friend_height_data['length']; i++) {
        if (pass_height > parseInt(friend_height_data[i])) {
            pass_friend_num--;
        }
    }
    console['log'](pass_friend_num);
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));
function _0x17f532(ret) {
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