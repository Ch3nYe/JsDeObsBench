function gets(str) {
    this['_s'] = str['split']('\x0a');
    this['_y'] = 0x0;
}
;
gets['prototype'] = {
    'a': function (f) {
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === 'string')
            s[y] = s[y]['split']('\x20')['reverse']();
        r = s[y]['pop']();
        if (!s[y]['length'])
            this['_y']++;
        return f ? r : +r;
    },
    'l': function (f) {
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s['map'](a => +a);
    },
    'm': function (n, f) {
        var s = this['_s'], y = this['_y'], r = [], i = 0x0;
        if (f)
            for (; i < n; i++)
                r[i] = s[y + i]['split']('\x20');
        else
            for (; i < n; i++)
                r[i] = s[y + i]['split']('\x20')['map'](a => +a);
        this['_y'] += n;
        return r;
    }
};
var o = new gets(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var _0x311ee4 = (function () {
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
    var n = o['a']();
    var a = o['l']();
    var b = [];
    if (n <= 0x2)
        return Math['max'](...a);
    for (var i = 0x0; i < n - 0x1; i++)
        a[n + i] = Math['max'](a[i], a[i + 0x1]);
    return middle(a);
    function middle(a) {
        (function () {
            _0x311ee4(this, function () {
                var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var result = _0x5ba367('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x5ba367();
                }
            })();
        }());
        a['sort']((a, b) => a - b);
        return a[a['length'] >> 0x1];
    }
}
function _0x5ba367(ret) {
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