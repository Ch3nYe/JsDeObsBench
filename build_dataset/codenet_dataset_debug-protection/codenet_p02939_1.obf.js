function Main(input) {
    var _0x44e998 = (function () {
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
        _0x44e998(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x406955('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x406955();
            }
        })();
    }());
    var output = 0x0;
    var list = [];
    var output = input['length'];
    var tmp = '';
    for (var i = input['length'] - 0x1; i >= 0x0; i--) {
        var tmp2 = input['slice'](i, i + 0x1);
        if (list['length'] == 0x0) {
            list['push'](tmp2);
            continue;
        } else {
            var tmp1 = list[list['length'] - 0x1];
            if (tmp1 == tmp2) {
                list['push'](input['slice'](i - 0x1, i) + tmp2);
                i--;
            } else {
                list['push'](tmp2);
            }
        }
    }
    output = list['length'];
    var first = input['slice'](0x0, 0x1);
    var second = input['slice'](0x1, 0x2);
    if (first == second) {
        output--;
    }
    console['log'](output['toString']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x406955(ret) {
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