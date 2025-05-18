function Main(input) {
    var _0x58ee86 = (function () {
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
        _0x58ee86(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x53f2b9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x53f2b9();
            }
        })();
    }());
    input = input['split']('\x0a');
    var N = parseInt(input[0x0]);
    var ans = 0x0;
    var set = new Set();
    var N2 = N;
    for (var i = 0x2; i < Math['sqrt'](N); i++) {
        var x = i;
        for (var j = 0x1; x < N; j++) {
            if (N2 % Math['pow'](i, j) == 0x0) {
                ans++;
                N2 = N2 / Math['pow'](i, j);
            } else {
                break;
            }
            x = Math['pow'](i, j + 0x1);
        }
    }
    if (ans == 0x0 && N != 0x1) {
        ans = 0x1;
    }
    console['log']('%s', ans);
    return ans;
}
function debug(n) {
    var input = document['getElementById']('input' + n)['value'];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document['getElementById']('output' + n)['value']['split']('\x0a')[0x0]) {
        result = 'AC';
    }
    document['getElementById']('result' + n)['innerHTML'] = result;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x53f2b9(ret) {
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