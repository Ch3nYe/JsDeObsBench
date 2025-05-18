function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x12d355 = (function () {
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
        _0x12d355(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x548a4a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x548a4a();
            }
        })();
    }());
    input = parseInt(input);
    var output = 0x3b9aca00;
    for (var i = 0x1; i <= 0xa; i++) {
        var tmp = (input * i)['toString']()['split']('')['map'](a => Number(a));
        var check = 0x0;
        for (var j = 0x0; j < tmp['length']; j++) {
            check += tmp[j];
        }
        output = Math['min'](output, check);
    }
    myout(output);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x548a4a(ret) {
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