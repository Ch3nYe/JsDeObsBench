function fillZero(l, num) {
    num = String(num);
    for (var i = num['length']; i < l; i++) {
        num = '0' + num;
    }
    return num;
}
function main(arg) {
    var _0x12531d = (function () {
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
        _0x12531d(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x22a97d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x22a97d();
            }
        })();
    }());
    arg = arg['trim']()['split']('\x0a');
    arg[0x0] = arg[0x0]['split']('\x20');
    var N = Number(arg[0x0][0x0]);
    var M = Number(arg[0x0][0x1]);
    arg['shift']();
    var p_master = {};
    for (var i = 0x0; i < arg['length']; i++) {
        var tmp = arg[i]['split']('\x20')['map'](e => Number(e));
        arg[i] = tmp;
        if (!p_master[tmp[0x0]]) {
            p_master[tmp[0x0]] = [];
        }
        p_master[tmp[0x0]]['push'](tmp[0x1]);
    }
    for (key in p_master) {
        p_master[key]['sort']();
    }
    for (var i = 0x0; i < arg['length']; i++) {
        var _p = arg[i][0x0];
        var j = 0x0;
        for (var j = 0x0; j < p_master[_p]['length']; j++) {
            if (p_master[_p][j] === arg[i][0x1]) {
                break;
            }
        }
        console['log'](fillZero(0x6, _p) + fillZero(0x6, j + 0x1));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x22a97d(ret) {
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