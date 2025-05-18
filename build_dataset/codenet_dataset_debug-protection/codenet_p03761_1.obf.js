function main(input) {
    var _0x311c55 = (function () {
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
        _0x311c55(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x446b37('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x446b37();
            }
        })();
    }());
    var n = input[0x0] - 0x0;
    var lists = [];
    var ansmap = {};
    for (var i = 0x1; i <= n; i++) {
        var str = input[i];
        var map = {};
        for (var j = 0x0; j < str['length']; j++) {
            map[str[j]] = map[str[j]] ? map[str[j]] + 0x1 : 0x1;
            ansmap[str[j]] = 0x3c;
        }
        lists['push'](map);
    }
    var keys = Object['keys'](ansmap)['sort']((a, b) => a > b ? 0x1 : -0x1);
    for (var i = 0x0; i < n; i++) {
        var list = lists[i];
        for (var j = 0x0; j < keys['length']; j++) {
            ansmap[keys[j]] = Math['min'](ansmap[keys[j]], list[keys[j]] || 0x0);
        }
    }
    var ans = '';
    keys['forEach'](key => {
        for (var i = 0x0; i < ansmap[key]; i++)
            ans += key;
    });
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
function _0x446b37(ret) {
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