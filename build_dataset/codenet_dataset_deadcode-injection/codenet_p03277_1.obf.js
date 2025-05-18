var a0_0x33fa9e = a0_0x25b6;
function gets(str) {
    this['_s'] = str['split']('\x0a');
    this['_y'] = 0x0;
}
;
gets[a0_0x33fa9e(0x0)] = {
    'a': function (f) {
        var _0x3c8a73 = a0_0x25b6;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === 'string')
            s[y] = s[y]['split']('\x20')[_0x3c8a73(0x1)]();
        r = s[y]['pop']();
        if (!s[y]['length'])
            this['_y']++;
        return f ? r : +r;
    },
    'l': function (f) {
        var _0x39e650 = a0_0x25b6;
        var s = this['_s'][this['_y']++][_0x39e650(0x2)]('\x20');
        return f ? s : s[_0x39e650(0x3)](a => +a);
    },
    'm': function (n, f) {
        var _0x462409 = a0_0x25b6;
        var s = this['_s'], y = this['_y'], r = [], i = 0x0;
        if (f)
            for (; i < n; i++)
                r[i] = s[y + i]['split']('\x20');
        else
            for (; i < n; i++)
                r[i] = s[y + i][_0x462409(0x2)]('\x20')[_0x462409(0x3)](a => +a);
        this['_y'] += n;
        return r;
    }
};
var o = new gets(require('fs')[a0_0x33fa9e(0x4)](a0_0x33fa9e(0x5), a0_0x33fa9e(0x6)));
console[a0_0x33fa9e(0x7)](main());
function a0_0x25b6(GCvtaC, key) {
    var stringArray = a0_0x13c2();
    a0_0x25b6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x25b6(GCvtaC, key);
}
function main() {
    var _0x36fd55 = a0_0x25b6;
    var n = o['a']();
    var a = o['l']();
    var b = [];
    if (n <= 0x2)
        return Math[_0x36fd55(0x8)](...a);
    for (var i = 0x0; i < n - 0x1; i++)
        a[n + i] = Math[_0x36fd55(0x8)](a[i], a[i + 0x1]);
    return middle(a);
    function middle(a) {
        var _0x3c8c1e = a0_0x25b6;
        if ('kbXSY' !== _0x3c8c1e(0x9)) {
            a[_0x3c8c1e(0xa)]((a, b) => a - b);
            return a[a[_0x3c8c1e(0xb)] >> 0x1];
        } else {
            this['_s'] = str[_0x3c8c1e(0x2)]('\x0a');
            this['_y'] = 0x0;
        }
    }
}
function a0_0x13c2() {
    var _0x56bcc5 = [
        'prototype',
        'reverse',
        'split',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'log',
        'max',
        'dmHDH',
        'sort',
        'length'
    ];
    a0_0x13c2 = function () {
        return _0x56bcc5;
    };
    return a0_0x13c2();
}