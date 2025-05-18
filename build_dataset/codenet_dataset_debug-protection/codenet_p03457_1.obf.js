function Main(input) {
    var _0x285a85 = (function () {
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
        _0x285a85(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x18d0c0('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x18d0c0();
            }
        })();
    }());
    var args = input['split']('\x0a');
    var N = parseInt(args, 0xa);
    var history = args['slice'](0x1, N + 0x1);
    var answer;
    var flg = 0x1;
    var plan = [];
    plan[0x0] = [
        0x0,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N; i++) {
        plan[i + 0x1] = parser(history[i]);
    }
    for (var i = 0x1; i < plan['length']; i++) {
        var rec1 = plan[i - 0x1];
        var rec2 = plan[i];
        var dt = rec2[0x0] - rec1[0x0];
        var dist = Math['abs'](rec2[0x1] + rec2[0x2] - rec1[0x1] - rec1[0x2]);
        if (dt >= dist && dt % 0x2 === dist % 0x2) {
        } else {
            flg = 0x0;
        }
    }
    answer = flg ? 'Yes' : 'No';
    console['log'](answer);
}
function parser(record) {
    var args = record['split']('\x20');
    var return_val = [];
    return_val['push'](parseInt(args[0x0], 0xa));
    return_val['push'](parseInt(args[0x1], 0xa));
    return_val['push'](parseInt(args[0x2], 0xa));
    return return_val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x18d0c0(ret) {
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