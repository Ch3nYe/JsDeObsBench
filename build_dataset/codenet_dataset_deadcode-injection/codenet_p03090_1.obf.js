function a0_0x5c62() {
    var _0xf75588 = [
        'INojn',
        'VNBAU',
        'string',
        'split',
        'reverse',
        'pop',
        'length',
        'ggqRE',
        'prototype',
        'IChmr',
        'WIVBn',
        'NAank',
        'Fsvdj',
        'slice',
        'map',
        'log',
        'BuDuW',
        'IdoKF',
        'oqIul',
        'push',
        'join'
    ];
    a0_0x5c62 = function () {
        return _0xf75588;
    };
    return a0_0x5c62();
}
function a0_0x38c6(xKnzFR, key) {
    var stringArray = a0_0x5c62();
    a0_0x38c6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38c6(xKnzFR, key);
}
var a0_0x14665e = a0_0x38c6;
var GET = (function () {
    var _0x958857 = a0_0x38c6;
    function f(s) {
        var _0x4d08bd = a0_0x38c6;
        if (_0x4d08bd(0x0) === _0x4d08bd(0x1)) {
            var s = this['_s'], y = this['_y'], r;
            if (typeof s[y] === _0x4d08bd(0x2))
                s[y] = s[y][_0x4d08bd(0x3)]('\x20')[_0x4d08bd(0x4)]();
            r = s[y][_0x4d08bd(0x5)]();
            if (!s[y][_0x4d08bd(0x6)])
                this['_y']++;
            return f ? r : +r;
        } else {
            return new g(s);
        }
    }
    function g(s) {
        var _0x140afb = a0_0x38c6;
        if (_0x140afb(0x7) === 'ggqRE') {
            this['_s'] = s['trim']()[_0x140afb(0x3)]('\x0a');
            this['_y'] = 0x0;
        } else {
            return new g(s);
        }
    }
    g[_0x958857(0x8)]['a'] = function (f) {
        var _0x111d8c = a0_0x38c6;
        if (_0x111d8c(0x9) === _0x111d8c(0xa)) {
            this['_s'] = s['trim']()[_0x111d8c(0x3)]('\x0a');
            this['_y'] = 0x0;
        } else {
            var s = this['_s'], y = this['_y'], r;
            if (typeof s[y] === _0x111d8c(0x2))
                s[y] = s[y]['split']('\x20')[_0x111d8c(0x4)]();
            r = s[y][_0x111d8c(0x5)]();
            if (!s[y][_0x111d8c(0x6)])
                this['_y']++;
            return f ? r : +r;
        }
    };
    g[_0x958857(0x8)]['l'] = function (f) {
        var _0x222c9b = a0_0x38c6;
        if (_0x222c9b(0xb) === _0x222c9b(0xc)) {
            var r = this['_s'][_0x222c9b(0xd)](this['_y'], this['_y'] += n);
            return f ? r : r[_0x222c9b(0xe)](a => +a);
        } else {
            var s = this['_s'][this['_y']++][_0x222c9b(0x3)]('\x20');
            return f ? s : s[_0x222c9b(0xe)](a => +a);
        }
    };
    g[_0x958857(0x8)]['m'] = function (n, f) {
        var _0x282465 = a0_0x38c6;
        var r = this['_s'][_0x282465(0xd)](this['_y'], this['_y'] += n)[_0x282465(0xe)](a => a[_0x282465(0x3)]('\x20'));
        return f ? r : r[_0x282465(0xe)](a => a[_0x282465(0xe)](a => +a));
    };
    g['prototype']['r'] = function (n, f) {
        var _0x1adc09 = a0_0x38c6;
        var r = this['_s'][_0x1adc09(0xd)](this['_y'], this['_y'] += n);
        return f ? r : r[_0x1adc09(0xe)](a => +a);
    };
    return f;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console[a0_0x14665e(0xf)](main());
function main() {
    var _0xe07afc = a0_0x38c6;
    var n = o['a']();
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        if (_0xe07afc(0x10) === _0xe07afc(0x11)) {
            var s = this['_s'][this['_y']++]['split']('\x20');
            return f ? s : s[_0xe07afc(0xe)](a => +a);
        } else {
            for (var j = i + 0x1; j <= n; j++) {
                if ('oqIul' !== _0xe07afc(0x12)) {
                    var r = this['_s'][_0xe07afc(0xd)](this['_y'], this['_y'] += n)[_0xe07afc(0xe)](a => a[_0xe07afc(0x3)]('\x20'));
                    return f ? r : r[_0xe07afc(0xe)](a => a[_0xe07afc(0xe)](a => +a));
                } else {
                    if (n % 0x2 && i + j === n)
                        continue;
                    if (n % 0x2 === 0x0 && i + j === n + 0x1)
                        continue;
                    ans[_0xe07afc(0x13)](i + '\x20' + j);
                }
            }
        }
    }
    console[_0xe07afc(0xf)](ans[_0xe07afc(0x6)]);
    return ans[_0xe07afc(0x14)]('\x0a');
}