function Main(input) {
    var _0x1e80b0 = (function () {
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
        _0x1e80b0(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x257371('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x257371();
            }
        })();
    }());
    var line = input['split']('\x0a');
    var tmp = line[0x0]['split']('\x20');
    var N = Number(tmp[0x0]);
    var M = Number(tmp[0x1]);
    var L = [];
    var R = [];
    var D = [];
    for (var i = 0x1; i <= M; i++) {
        var tmp = line[i]['split']('\x20');
        L['push'](Number(tmp[0x0]));
        R['push'](Number(tmp[0x1]));
        D['push'](Number(tmp[0x2]));
    }
    var pos = [];
    var ans;
    loopj:
        for (var j = 0x0; j < M; j++) {
            if (j === 0x0)
                pos[L[j] - 0x1] = 0x1;
            var rightpos = pos[L[j] - 0x1] + D[j];
            if (!pos[R[j] - 0x1]) {
                pos[R[j] - 0x1] = rightpos;
            } else {
                if (pos[R[j] - 0x1] !== rightpos) {
                    ans = 'No';
                    break loopj;
                }
            }
        }
    if (!ans)
        ans = 'Yes';
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x257371(ret) {
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