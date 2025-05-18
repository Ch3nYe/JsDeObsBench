function Main(input) {
    var _0x54b61c = (function () {
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
        _0x54b61c(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2e2111('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2e2111();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    var H = parseInt(input[0x0][0x0], 0xa);
    var W = parseInt(input[0x0][0x1], 0xa);
    var ans = calc(H, W);
    console['log'](ans);
}
function calc(H, W) {
    if (H % 0x3 === 0x0 || W % 0x3 === 0x0)
        return 0x0;
    var result = H * W;
    var tmp;
    var oldtmp = result;
    for (var i = 0x0; i <= W; i++) {
        tmp = Math['max'](Math['abs'](i * H - (W - i) * Math['ceil'](H / 0x2)), Math['abs'](i * H - (W - i) * Math['floor'](H / 0x2)), H % 0x2 * (W - i));
        result = Math['min'](result, tmp);
        if (tmp > oldtmp)
            break;
        oldtmp = tmp;
    }
    [W, H] = [
        H,
        W
    ];
    oldtmp = H * W;
    for (var i = 0x0; i <= W; i++) {
        tmp = Math['max'](Math['abs'](i * H - (W - i) * Math['ceil'](H / 0x2)), Math['abs'](i * H - (W - i) * Math['floor'](H / 0x2)), H % 0x2 * (W - i));
        result = Math['min'](result, tmp);
        if (tmp > oldtmp)
            break;
        oldtmp = tmp;
    }
    return Math['min'](result, H, W);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2e2111(ret) {
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