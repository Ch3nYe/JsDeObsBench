(function (input) {
    var _0x2cca1e = (function () {
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
        _0x2cca1e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1df163('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1df163();
            }
        })();
    }());
    var inputs = input['replace'](/\r/g, '')['split']('\x0a');
    while (!![]) {
        var cards = [], line = inputs['shift']()['split']('\x20'), n = parseInt(line[0x0]), r = parseInt(line[0x1]);
        if (n === 0x0 && r === 0x0)
            break;
        for (var i = n; i > 0x0; i--) {
            cards['push'](i);
        }
        while (r--) {
            var line = inputs['shift']()['split']('\x20'), p = parseInt(line[0x0]) - 0x1, c = parseInt(line[0x1]), tmp;
            tmp = cards['splice'](p, c);
            cards = tmp['concat'](cards);
        }
        console['log'](cards['shift']());
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x1df163(ret) {
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