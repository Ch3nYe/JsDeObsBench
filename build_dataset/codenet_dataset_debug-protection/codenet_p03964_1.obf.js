function Main(input) {
    var _0x478459 = (function () {
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
        _0x478459(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xcc52b7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xcc52b7();
            }
        })();
    }());
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    t = new Array(n)['fill'](0x0);
    a = new Array(n)['fill'](0x0);
    for (i = 0x0; i < n; i++) {
        t[i] = parseInt(input[i + 0x1]['split']('\x20')[0x0]);
        a[i] = parseInt(input[i + 0x1]['split']('\x20')[0x1]);
    }
    var tvote = t[0x0];
    var avote = a[0x0];
    for (i = 0x1; i < n; i++) {
        if (Math['ceil'](tvote / t[i]) * t[i] / t[i] * a[i] >= avote) {
            tvote = Math['ceil'](tvote / t[i]) * t[i];
            avote = Math['ceil'](tvote / t[i]) * t[i] / t[i] * a[i];
        } else {
            tvote = Math['ceil'](avote / a[i]) * a[i] / a[i] * t[i];
            avote = Math['ceil'](avote / a[i]) * a[i];
        }
    }
    var ans = avote + tvote;
    console['log']('%s', ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xcc52b7(ret) {
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