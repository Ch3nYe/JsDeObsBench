function Main(input) {
    var _0x47c7d6 = (function () {
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
        _0x47c7d6(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1190e5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1190e5();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    var N = parseInt(input[0x0]);
    var SasStr = input[0x1];
    var ans = 0x0;
    var x1, x2, x3, xTmp, x1i, x2i, x3i, sTmp;
    for (var i = 0x3e8; i < 0x7d0; i++) {
        xTmp = String(i);
        x1 = xTmp['substr'](0x1, 0x1);
        x2 = xTmp['substr'](0x2, 0x1);
        x3 = xTmp['substr'](0x3, 0x1);
        x1i = SasStr['indexOf'](x1);
        if (x1i !== -0x1) {
            sTmp = SasStr['substr'](x1i + 0x1);
            x2i = sTmp['indexOf'](x2);
            if (x2i !== -0x1) {
                sTmp = sTmp['substr'](x2i + 0x1);
                x3i = sTmp['indexOf'](x3);
                if (x3i !== -0x1) {
                    ans++;
                }
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1190e5(ret) {
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