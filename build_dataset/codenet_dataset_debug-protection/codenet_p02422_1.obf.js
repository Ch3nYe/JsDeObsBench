'use strict';
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['replace'](/\r?\n$/, '')['split'](/\r?\n/));
function main(lines) {
    var _0x46ba22 = (function () {
        var firstCall = !![];
        return function (context, fn) {
            var rfn = firstCall ? function () {
                if (fn) {
                    var res = fn['apply'](context, arguments);
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
        _0x46ba22(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1c3517('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1c3517();
            }
        })();
    }());
    var str = lines['shift']();
    lines['shift']();
    var code;
    while (code = lines['shift']()) {
        code = code['split']('\x20');
        var from = +code[0x1], to = +code[0x2];
        switch (code[0x0]) {
        case 'print':
            console['log'](str['slice'](from, to + 0x1));
            break;
        case 'replace':
            str = str['slice'](0x0, from) + code[0x3] + str['slice'](to + 0x1);
            break;
        case 'reverse':
            str = str['slice'](0x0, from) + str['slice'](from, to + 0x1)['split']('')['reverse']()['join']('') + str['slice'](to + 0x1);
            break;
        }
    }
}
function _0x1c3517(ret) {
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