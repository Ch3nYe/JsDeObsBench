function Main(input) {
    var _0x2d1403 = (function () {
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
        _0x2d1403(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1fda5c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1fda5c();
            }
        })();
    }());
    var ary = [];
    for (var i = 0x0; i < input['split']('\x0a')[0x0]['split']('\x20')[0x0]; i++) {
        ary['push'](0x1);
    }
    var str = input['split']('\x0a')[0x1];
    for (var i = 0x2; i < input['split']('\x0a')['length']; i++) {
        var jumon = input['split']('\x0a')[i]['split']('\x20');
        var newAry = [];
        for (var j = 0x0; j < ary['length']; j++) {
            newAry['push'](0x0);
        }
        if (jumon[0x1] == 'L') {
            for (var j = 0x0; j < str['length']; j++) {
                if (j != 0x0 || str[j] != jumon[0x0])
                    newAry[str[j] == jumon[0x0] ? j - 0x1 : j] += ary[j];
            }
        } else {
            for (var j = 0x0; j < str['length']; j++) {
                if (j != ary['length'] - 0x1 || str[j] != jumon[0x0])
                    newAry[str[j] == jumon[0x0] ? j + 0x1 : j] += ary[j];
            }
        }
        ary = newAry['concat']();
    }
    var golems = 0x0;
    for (var i of ary)
        golems += i;
    console['log'](golems);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1fda5c(ret) {
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