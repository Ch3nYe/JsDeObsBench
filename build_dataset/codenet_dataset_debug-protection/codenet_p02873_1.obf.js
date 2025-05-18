function Main(input) {
    var _0xa0294e = (function () {
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
        _0xa0294e(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xed4455('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xed4455();
            }
        })();
    }());
    var S = input['split']('');
    var Slong = S['length'];
    var Muki = '>';
    var Out = 0x1;
    var V = [];
    var Left = 0x0;
    var Right = 0x0;
    var Sum = 0x0;
    for (var i = 0x0; i < Slong; i++) {
        if (S[i] == Muki) {
            if (Muki == '>') {
                Left++;
            } else {
                Right++;
            }
            Out = 0x0;
        } else {
            if (Muki == '<') {
                V['push']({
                    'L': Left,
                    'R': Right
                });
                Muki = '>';
                Left = 0x0;
                Right = 0x0;
                Left++;
                Out = 0x1;
            } else {
                Muki = '<';
                Right++;
                Out = 0x0;
            }
        }
    }
    if (Out == 0x0) {
        V['push']({
            'L': Left,
            'R': Right
        });
    }
    for (var i = 0x1; i < V['length']; i++) {
        if (V[i - 0x1]['R'] < V[i]['L']) {
            V[i - 0x1]['R']--;
        } else {
            V[i]['L']--;
        }
    }
    for (var i = 0x0; i < V['length']; i++) {
        Sum += V[i]['L'] * (V[i]['L'] + 0x1) / 0x2;
        Sum += V[i]['R'] * (V[i]['R'] + 0x1) / 0x2;
    }
    console['log'](Sum);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xed4455(ret) {
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