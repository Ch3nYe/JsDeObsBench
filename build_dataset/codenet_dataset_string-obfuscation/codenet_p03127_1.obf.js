var a0_0x599f82 = a0_0x2169;
function a0_0x2169(DxxUEz, key) {
    var stringArray = a0_0x54bc();
    a0_0x2169 = function (index, key) {
        index = index - 0x1d6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2169(DxxUEz, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1bbae8 = a0_0x2169;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1bbae8(0x1db)) / 0x1 * (parseInt(_0x1bbae8(0x1d7)) / 0x2) + parseInt(_0x1bbae8(0x1e8)) / 0x3 + parseInt(_0x1bbae8(0x1e7)) / 0x4 + -parseInt(_0x1bbae8(0x1d8)) / 0x5 * (-parseInt(_0x1bbae8(0x1d9)) / 0x6) + parseInt(_0x1bbae8(0x1e9)) / 0x7 * (parseInt(_0x1bbae8(0x1e3)) / 0x8) + parseInt(_0x1bbae8(0x1ea)) / 0x9 + parseInt(_0x1bbae8(0x1e1)) / 0xa * (-parseInt(_0x1bbae8(0x1ec)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x54bc, 0x2cdb9));
var GET = (function () {
    var _0x53b6d3 = a0_0x2169;
    function f(s) {
        return new g(s);
    }
    function g(s) {
        var _0x353b9c = a0_0x2169;
        this['_s'] = s[_0x353b9c(0x1dc)]()['split']('\x0a');
        this['_y'] = 0x0;
    }
    g[_0x53b6d3(0x1df)]['a'] = function (f) {
        var _0x45f9bb = _0x53b6d3;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === _0x45f9bb(0x1e4))
            s[y] = s[y][_0x45f9bb(0x1eb)]('\x20')[_0x45f9bb(0x1dd)]();
        r = s[y][_0x45f9bb(0x1da)]();
        if (!s[y][_0x45f9bb(0x1de)])
            this['_y']++;
        return f ? r : +r;
    };
    g['prototype']['l'] = function (f) {
        var _0xcb5536 = _0x53b6d3;
        var s = this['_s'][this['_y']++][_0xcb5536(0x1eb)]('\x20');
        return f ? s : s[_0xcb5536(0x1e0)](a => +a);
    };
    g[_0x53b6d3(0x1df)]['m'] = function (n, f) {
        var _0x277751 = _0x53b6d3;
        var r = this['_s'][_0x277751(0x1d6)](this['_y'], this['_y'] += n)[_0x277751(0x1e0)](a => a[_0x277751(0x1eb)]('\x20'));
        return f ? r : r[_0x277751(0x1e0)](a => a[_0x277751(0x1e0)](a => +a));
    };
    g['prototype']['r'] = function (n, f) {
        var _0x5dfb87 = _0x53b6d3;
        var r = this['_s'][_0x5dfb87(0x1d6)](this['_y'], this['_y'] += n);
        return f ? r : r[_0x5dfb87(0x1e0)](a => +a);
    };
    return f;
}());
var o = GET(require('fs')[a0_0x599f82(0x1e5)](a0_0x599f82(0x1e6), 'utf8'));
function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
console[a0_0x599f82(0x1e2)](main());
function main() {
    var n = o['a']();
    var a = o['l']();
    var ans = a[0x0];
    for (var i = 0x1; i < n; i++) {
        ans = gcd(ans, a[i]);
    }
    return ans;
}
function a0_0x54bc() {
    var _0x22dd0c = [
        'string',
        'readFileSync',
        '/dev/stdin',
        '279904alGOQG',
        '233547uFbQjq',
        '4487bHKsUz',
        '532476nfxkRI',
        'split',
        '11fEKrmL',
        'slice',
        '8TTfTnH',
        '5oakvJX',
        '107730QIvVZg',
        'pop',
        '45259IibAhn',
        'trim',
        'reverse',
        'length',
        'prototype',
        'map',
        '5017190YfWgtM',
        'log',
        '3488KnHBjn'
    ];
    a0_0x54bc = function () {
        return _0x22dd0c;
    };
    return a0_0x54bc();
}