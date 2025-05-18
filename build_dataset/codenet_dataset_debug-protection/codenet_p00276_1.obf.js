Main(function (input) {
    input = input['trim']()['split']('\x0a');
    input['shift']();
    input['forEach'](function (line) {
        var tmp = line['split']('\x20');
        var c = +tmp[0x0];
        var a = +tmp[0x1];
        var n = +tmp[0x2];
        var ans = 0x0;
        var min;
        min = Math['min'](c, a, n);
        c -= min;
        a -= min;
        n -= min;
        ans += min;
        min = Math['min'](Math['floor'](c / 0x2), a);
        c -= min * 0x2;
        a -= min;
        ans += min;
        ans += Math['floor'](c / 0x3);
        console['log'](ans);
    });
});
function Main(main) {
    var _0x115cbd = (function () {
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
        _0x115cbd(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x5ac04d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5ac04d();
            }
        })();
    }());
    var input = '';
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on']('data', function (chunk) {
        input += chunk;
    });
    process['stdin']['on']('end', function () {
        main(input);
    });
}
;
function _0x5ac04d(ret) {
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