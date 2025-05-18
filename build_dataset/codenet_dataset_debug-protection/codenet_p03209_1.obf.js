function Main(input) {
    var _0x17a114 = (function () {
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
        _0x17a114(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x36880e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x36880e();
            }
        })();
    }());
    input = input['split']('\x0a');
    var N = parseInt(input[0x0]['split']('\x20')[0x0]);
    var X = parseInt(input[0x0]['split']('\x20')[0x1]);
    bans = new Array(0x32);
    all = new Array(0x32);
    bans[0x0] = 0x1;
    all[0x0] = 0x1;
    var ans = 0x0;
    for (i = 0x1; i <= 0x32; i++) {
        bans[i] = bans[i - 0x1] * 0x2 + 0x1;
        all[i] = all[i - 0x1] * 0x2 + 0x3;
    }
    var full = all[N];
    var bs = bans[N];
    var flag = 0x0;
    if (X % 0x2 == 0x0) {
        X = all[N] - X;
        flag = 0x1;
    }
    while (X > 0x0) {
        if (X > (full - 0x1) / 0x2) {
            X = X - (full - 0x1) / 0x2 - 0x1;
            ans = ans + (bs - 0x1) / 0x2 + 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        } else {
            X = X - 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        }
    }
    if (flag == 0x1) {
        ans = bans[N] - ans;
    }
    console['log']('%s', ans);
}
function debug() {
    var input = document['getElementById']('input')['value'];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x36880e(ret) {
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