function main() {
    var i, j, n, m, x, len = input['length'];
    for (i = 0x0; i < len; i++) {
        n = parseInt(input[i], 0xa);
        if (n === 0x0)
            break;
        if (n % 0x2 === 0x1) {
            console['log'](0x0);
            continue;
        }
        m = ~~(n / 0x2);
        for (x = 0x0, j = 0x0; primes[j] <= m; j++) {
            if (primes['indexOf'](n - primes[j]) !== -0x1)
                x++;
        }
        console['log'](x);
    }
}
var primes = function (n) {
    var _0x441999 = (function () {
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
        _0x441999(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x501ed7('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x501ed7();
            }
        })();
    }());
    var i, j, flag, primes = [0x2];
    if (n < 0x2)
        return [];
    for (i = 0x3; i <= n; i += 0x2) {
        flag = !![];
        for (j = 0x0; primes[j] < i * i; j++) {
            if (i % primes[j] == 0x0) {
                flag = ![];
                break;
            }
        }
        if (flag) {
            primes['push'](i);
        }
    }
    return primes;
}(0xc350);
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});
function _0x501ed7(ret) {
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