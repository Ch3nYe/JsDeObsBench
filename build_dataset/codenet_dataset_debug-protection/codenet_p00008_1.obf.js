config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const MAX = 0x32;
map0 = [];
for (i = 0x0; i <= MAX; i++)
    map0['push'](0x0);
map1 = []['concat'](map0);
map2 = []['concat'](map1);
map3 = []['concat'](map2);
for (i = 0x0; i <= 0x9; i++)
    map0[i] = 0x1;
function expand_map(map, smaller) {
    var _0x3f05a5 = (function () {
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
        _0x3f05a5(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x349410('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x349410();
            }
        })();
    }());
    for (var i = 0x0; i < MAX; i++) {
        for (var j = Math['max'](0x0, i - 0x9); j <= i; j++) {
            map[i] += smaller[j];
        }
    }
}
expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);
require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['forEach'](function (line) {
    console['log'](map3[parseInt(line)]);
});
function _0x349410(ret) {
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