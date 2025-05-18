'use strict';
function I(s, f) {
    this['_s'] = s;
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = f || Number;
}
I['prototype']['a'] = function () {
    var l = this['_s']['split']('\x0a')[this['_l']];
    if (!l)
        return;
    var t = l['trim']()['split']('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t['length'] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
I['prototype']['l'] = function () {
    var l = this['_s']['split']('\x0a')[this['_l']];
    this['_c'] = 0x0;
    this['_l']++;
    return l['split']('\x20')['map'](this['_f']);
};
function main(input) {
    var _0x967720 = (function () {
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
        _0x967720(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x541227('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x541227();
            }
        })();
    }());
    const o = new I(input);
    const arr = Array(0x4)['fill'](0x0);
    for (let i = 0x0; i < 0x3; i++) {
        let a = o['a']();
        let b = o['a']();
        arr[a - 0x1]++;
        arr[b - 0x1]++;
    }
    if (arr['sort']((a, b) => a - b)['join']('\x20') === '1\x201\x202\x202') {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x541227(ret) {
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