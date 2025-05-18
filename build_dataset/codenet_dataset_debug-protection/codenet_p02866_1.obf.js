function main(arg) {
    var _0x95330b = (function () {
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
        _0x95330b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x179373('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x179373();
            }
        })();
    }());
    var arg2 = arg['split']('\x0a')[0x1]['split'](/\s/g);
    var kazoe = [];
    for (i = 0x0; i < arg['split']('\x0a')[0x0]; i++) {
        if (!kazoe[arg2[i]]) {
            kazoe[arg2[i]] = 0x0;
        }
        kazoe[arg2[i]] += 0x1;
    }
    var ans = 0x1;
    for (j = 0x0; j < kazoe['length']; j++) {
        if (j > 0x1) {
            ans = ans * Math['pow'](kazoe[j - 0x1], kazoe[j]);
        }
        if (!kazoe[j]) {
            ans = 0x0;
            break;
        }
    }
    console['log'](ans % 0x3b800001);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x179373(ret) {
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