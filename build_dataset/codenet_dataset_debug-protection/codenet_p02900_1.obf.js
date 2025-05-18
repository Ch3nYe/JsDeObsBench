function Main(input) {
    var _0x54f964 = (function () {
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
    input = input['split']('\x20')['map'](x => x * 0x1);
    function gcd(a1, a2) {
        (function () {
            _0x54f964(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x3483d7('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x3483d7();
                }
            })();
        }());
        return a2 == 0x0 ? a1 : gcd(a2, a1 % a2);
    }
    var result = gcd(input[0x0], input[0x1]);
    var answer = 0x1;
    for (var i = 0x2; i * i < result; i++) {
        if (result % i === 0x0) {
            answer++;
            while (result % i === 0x0) {
                result /= i;
            }
        }
    }
    if (result !== 0x1) {
        answer++;
    }
    console['log'](answer);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function _0x3483d7(ret) {
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