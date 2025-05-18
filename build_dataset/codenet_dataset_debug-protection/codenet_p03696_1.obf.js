function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x16fcf4 = (function () {
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
        _0x16fcf4(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x42a59e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x42a59e();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    var tmpInput = JSON['parse'](JSON['stringify'](input[0x1]));
    var left = 0x0;
    var right = 0x0;
    while (tmpInput['indexOf']('()') != -0x1) {
        tmpInput = tmpInput['replace']('()', '');
    }
    for (var i = 0x0; i < tmpInput['length']; i++) {
        var tmp = tmpInput['slice'](i, i + 0x1);
        if (tmp == '(') {
            left++;
        } else if (tmp == ')') {
            right++;
        }
    }
    for (var i = 0x0; i < right; i++) {
        input[0x1] = '(' + input[0x1];
    }
    for (var i = 0x0; i < left; i++) {
        input[0x1] += ')';
    }
    myout(input[0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x42a59e(ret) {
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