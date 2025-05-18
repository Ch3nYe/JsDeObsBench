function Main(input) {
    var _0x43e008 = (function () {
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
        _0x43e008(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x3f5c4c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f5c4c();
            }
        })();
    }());
    input = input['split']('\x0a');
    var [n, q] = input[0x0]['split']('\x20')['map'](a => parseInt(a, 0xa));
    var colors = input[0x1]['split']('\x20');
    for (var i = 0x0; i < q; i++) {
        var [start, end] = input[i + 0x2]['split']('\x20')['map'](a => parseInt(a, 0xa));
        var cs = [];
        for (var j = start - 0x1; j < end; j++) {
            var color = colors[j];
            if (cs['indexOf'](color) === -0x1) {
                cs['push'](color);
            }
        }
        console['log'](cs['length']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3f5c4c(ret) {
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