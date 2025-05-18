'use strict';
function I(t, i) {
    this['_s'] = t['split']('\x0a'), this['_c'] = 0x0, this['_l'] = 0x0, this['_f'] = i || Number;
}
I['prototype']['a'] = function (t) {
    var i = this['_s'][this['_l']];
    if (i) {
        var s = i['trim']()['split']('\x20'), h = s[this['_c']];
        return this['_c']++, s['length'] === this['_c'] && (this['_c'] = 0x0, this['_l']++), t ? t(h) : this['_f'](h);
    }
}, I['prototype']['l'] = function (t) {
    var i = this['_s'][this['_l']];
    if (i)
        return this['_c'] = 0x0, this['_l']++, i['split']('\x20')['map'](t || this['_f']);
}, module['exports'] = I;
function main(input) {
    var _0x1d0424 = (function () {
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
        _0x1d0424(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x43b93e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x43b93e();
            }
        })();
    }());
    var o = new I(input);
    var q = o['a']();
    var c = 0x0;
    var sorted = [];
    for (var i = 0x0; i < q; i++) {
        var q1 = o['a']();
        if (q1 === 0x1) {
            var a = o['a']();
            var b = o['a']();
            c += b;
            sorted['push'](a);
        } else {
            sorted = sorted['sort']((a, b) => a - b);
            var mid = sorted[Math['floor']((sorted['length'] - 0x1) / 0x2)];
            var ans = sorted['map'](x => Math['abs'](x - mid))['reduce']((acc, cur) => acc + cur) + c;
            console['log'](mid, ans);
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x43b93e(ret) {
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