function Main(input) {
    var _0x4e7bd9 = (function () {
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
        _0x4e7bd9(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x71adc5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x71adc5();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const M = input[0x0]['split']('\x20')[0x1] - 0x0;
    var direct = [];
    for (var i = 0x0; i <= N; i++) {
        direct['push']([]);
    }
    for (var i = 0x1; i < input['length']; i++) {
        direct[input[i]['split']('\x20')[0x0] - 0x0]['push'](input[i]['split']('\x20')[0x1] - 0x0);
    }
    var memo = [];
    for (var i = 0x1; i <= N; i++) {
        memo['push']([i]);
    }
    var temp;
    var str;
    while (memo['length'] > 0x0) {
        str = '';
        temp = [];
        memo['forEach'](e => {
            direct[e[e['length'] - 0x1]]['forEach'](f => {
                temp['push'](e['concat']([f]));
            });
        });
        memo = temp['slice']();
        memo['forEach'](e => {
            if (e[e['length'] - 0x1] === e[0x0]) {
                temp = e['slice']();
                temp['shift']();
                str = temp['length'] + '\x0a' + temp['join']('\x0a');
            }
        });
        if (str !== '') {
            console['log'](str);
            return;
        }
    }
    console['log'](-0x1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x71adc5(ret) {
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