function Main(input) {
    var _0x2ea62b = (function () {
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
        _0x2ea62b(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1a519e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1a519e();
            }
        })();
    }());
    input = input['split']('\x0a');
    var S = 'abcdefghijklmnopqrstuvwxyz'['split']('');
    var array = new Array(0x1a);
    array['fill'](0x0);
    var temp;
    for (var i = 0x1; i < input['length']; i++) {
        temp = new Array(0x1a);
        temp['fill'](0x0);
        for (var j = 0x0; j < input[i]['length']; j++) {
            temp[S['findIndex'](e => {
                return e === input[i][j];
            })]++;
        }
        for (var j = 0x0; j < 0x1a; j++) {
            if (array[j] > temp[j] || i === 0x1) {
                array[j] = temp[j];
            }
        }
    }
    var ret = '';
    array['forEach']((e, i) => {
        ret += S[i]['repeat'](e);
    });
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1a519e(ret) {
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