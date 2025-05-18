function Main(input) {
    var _0x4efe4a = (function () {
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
        _0x4efe4a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x419e90('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x419e90();
            }
        })();
    }());
    var s, K, ref;
    ref = input['split']('\x0a'), s = ref[0x0], K = parseInt(ref[0x1]);
    console['log'](Array['from'](s)['map']((v, i, arr) => {
        var code = v['charCodeAt']();
        if (i === arr['length'] - 0x1) {
            code += K % 0x1a;
            code -= code > 0x7a ? 0x1a : 0x0;
            return String['fromCharCode'](code);
        } else {
            if (v === 'a')
                return v;
            return 0x7b - code <= K ? (K -= 0x7b - code, 'a') : v;
        }
    })['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x419e90(ret) {
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