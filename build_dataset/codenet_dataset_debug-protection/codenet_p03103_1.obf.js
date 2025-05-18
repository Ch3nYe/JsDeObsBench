function Main(input) {
    var _0x170162 = (function () {
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
        _0x170162(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x408a4d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x408a4d();
            }
        })();
    }());
    input = input['split']('\x0a');
    inputStr = input[0x0]['split']('\x20');
    var N = Number['parseInt'](inputStr[0x0]);
    var M = Number['parseInt'](inputStr[0x1]);
    var tmp = [];
    var array = [];
    var buycnt = 0x0;
    var okane = 0x0;
    var mokori = M;
    for (i = 0x0; i < N; i++) {
        tmp = input[i + 0x1]['split']('\x20');
        array[i] = tmp['map'](tmp => parseInt(tmp, 0xa));
        array[i][0x0] = ('0000000000' + array[i][0x0])['substr'](-0xa);
    }
    array['sort']();
    for (i = 0x0; i < N; i++) {
        if (mokori > parseInt(array[i][0x1])) {
            okane += parseInt(array[i][0x0]) * parseInt(array[i][0x1]);
            mokori -= parseInt(array[i][0x1]);
        } else {
            okane += parseInt(array[i][0x0]) * mokori;
            break;
        }
    }
    console['log'](okane);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x408a4d(ret) {
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