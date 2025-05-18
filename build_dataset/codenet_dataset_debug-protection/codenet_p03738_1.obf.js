function rec(a, b) {
    if (a[0x0] > b[0x0]) {
        return 'GREATER';
    } else if (a[0x0] < b[0x0]) {
        return 'LESS';
    } else if (a['length'] == 0x1) {
        return 'EQUAL';
    } else {
        return rec(a['slice'](0x1), b['slice'](0x1));
    }
}
function main(s) {
    var _0x28079b = (function () {
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
        _0x28079b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x343801('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x343801();
            }
        })();
    }());
    s = s['split']('\x0a');
    if (s[0x0]['length'] > s[0x1]['length']) {
        console['log']('GREATER');
    } else if (s[0x0]['length'] < s[0x1]['length']) {
        console['log']('LESS');
    } else {
        console['log']('%s', rec(s[0x0]['slice'](0x1), s[0x1]['slice'](0x1)));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x343801(ret) {
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