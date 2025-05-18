function BFS() {
    var _0xb312a7 = (function () {
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
        _0xb312a7(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x39ef37('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x39ef37();
            }
        })();
    }());
    var bfs = [[
            s0,
            0x0
        ]];
    while (!![]) {
        if (bfs['length'] == 0x0)
            break;
        var [leaf, cnt] = bfs['shift']();
        if (leaf == s1) {
            flag = !![];
            console['log'](cnt);
            break;
        }
        ab['forEach'](v => {
            if (leaf['includes'](v[0x0])) {
                var re = new RegExp(v[0x0], 'g');
                var str = leaf['replace'](re, v[0x1]);
                if (str['length'] <= 0xa)
                    bfs['push']([
                        str,
                        cnt + 0x1
                    ]);
            }
        });
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ab = arr['slice'](0x0, n)['map'](v => v['split']('\x20'));
    ;
    arr = arr['slice'](n);
    var s0 = arr['shift']();
    var s1 = arr['shift']();
    var flag = ![];
    BFS();
    if (!flag)
        console['log'](-0x1);
}
function _0x39ef37(ret) {
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