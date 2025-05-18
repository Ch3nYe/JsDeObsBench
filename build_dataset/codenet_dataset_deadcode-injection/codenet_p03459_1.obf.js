var a0_0x44374d = a0_0x27d6;
var GET = (function () {
    var _0x155f0b = a0_0x27d6;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x4c0299 = a0_0x27d6;
        if (_0x4c0299(0x0) === 'lFdgQ') {
            this['_s'] = s[_0x4c0299(0x1)]()[_0x4c0299(0x2)]('\x0a');
            this['_y'] = 0x0;
        } else {
            return new g(s);
        }
    }
    g[_0x155f0b(0x3)]['a'] = function (f) {
        var _0x1e7d42 = a0_0x27d6;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x1e7d42(0x4))
            s[y] = s[y][_0x1e7d42(0x2)]('\x20')['reverse']();
        r = s[y]['pop']();
        if (!s[y]['length'])
            this['_y']++;
        return f ? r : +r;
    };
    g[_0x155f0b(0x3)]['l'] = function (f) {
        var _0x22abf0 = a0_0x27d6;
        var s = this['_s'][this['_y']++][_0x22abf0(0x2)]('\x20');
        return f ? s : s[_0x22abf0(0x5)](a => +a);
    };
    g[_0x155f0b(0x3)]['m'] = function (n, f) {
        var _0x559af1 = a0_0x27d6;
        var r = this['_s']['slice'](this['_y'], this['_y'] += n)[_0x559af1(0x5)](a => a['split']('\x20'));
        return f ? r : r['map'](a => a[_0x559af1(0x5)](a => +a));
    };
    g[_0x155f0b(0x3)]['r'] = function (n, f) {
        var _0x4c4dfe = a0_0x27d6;
        if (_0x4c4dfe(0x6) !== _0x4c4dfe(0x6)) {
            this['_s'] = s[_0x4c4dfe(0x1)]()[_0x4c4dfe(0x2)]('\x0a');
            this['_y'] = 0x0;
        } else {
            var r = this['_s'][_0x4c4dfe(0x7)](this['_y'], this['_y'] += n);
            return f ? r : r[_0x4c4dfe(0x5)](a => +a);
        }
    };
    return f;
}());
var o = GET(require('fs')['readFileSync'](a0_0x44374d(0x8), a0_0x44374d(0x9)));
function a0_0x27d6(wapJWd, key) {
    var stringArray = a0_0x56b5();
    a0_0x27d6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x27d6(wapJWd, key);
}
console[a0_0x44374d(0xa)](main());
function a0_0x56b5() {
    var _0x5d124a = [
        'lFdgQ',
        'trim',
        'split',
        'prototype',
        'string',
        'map',
        'GAZTV',
        'slice',
        '/dev/stdin',
        'utf8',
        'log',
        'bshkw',
        'pop',
        'length',
        'abs',
        'Yes'
    ];
    a0_0x56b5 = function () {
        return _0x5d124a;
    };
    return a0_0x56b5();
}
function main() {
    var _0xa6d3c = a0_0x27d6;
    var n = o['a']();
    var m = o['m'](n);
    var t = 0x0, x = 0x0, y = 0x0;
    for (var i = 0x0; i < n; i++) {
        if (_0xa6d3c(0xb) !== _0xa6d3c(0xb)) {
            var s = this['_s'], y = this['_y'], r;
            if (typeof s[y] === _0xa6d3c(0x4))
                s[y] = s[y]['split']('\x20')['reverse']();
            r = s[y][_0xa6d3c(0xc)]();
            if (!s[y][_0xa6d3c(0xd)])
                this['_y']++;
            return f ? r : +r;
        } else {
            var dxy = Math[_0xa6d3c(0xe)](x - m[i][0x1]);
            dxy += Math[_0xa6d3c(0xe)](y - m[i][0x2]);
            var dt = m[i][0x0] - t;
            if (dxy > dt || dxy % 0x2 !== dt % 0x2)
                return 'No';
            x = m[i][0x1];
            y = m[i][0x2];
            t = m[i][0x0];
        }
    }
    return _0xa6d3c(0xf);
}