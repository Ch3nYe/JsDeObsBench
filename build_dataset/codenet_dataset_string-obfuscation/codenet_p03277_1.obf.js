var a0_0x1e9b5a = a0_0x58da;
function a0_0x58da(PlkUxU, key) {
    var stringArray = a0_0x4f16();
    a0_0x58da = function (index, key) {
        index = index - 0xa8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58da(PlkUxU, key);
}
function a0_0x4f16() {
    var _0x9cd3e2 = [
        '2114cZVNie',
        '518627MNNslh',
        '/dev/stdin',
        '4758485SjvQGk',
        '42595820swpfdC',
        'map',
        'pop',
        '2598noQpgg',
        'max',
        'readFileSync',
        '2869264eJYmQo',
        '18wsbGDS',
        '6903MwhCRa',
        '2439032mxfTdA',
        'reverse',
        'length',
        'utf8',
        'split',
        '782hAXUpy',
        'sort'
    ];
    a0_0x4f16 = function () {
        return _0x9cd3e2;
    };
    return a0_0x4f16();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x58a454 = a0_0x58da;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x58a454(0xb0)) / 0x1 + parseInt(_0x58a454(0xad)) / 0x2 * (-parseInt(_0x58a454(0xbb)) / 0x3) + -parseInt(_0x58a454(0xb9)) / 0x4 + -parseInt(_0x58a454(0xb2)) / 0x5 + -parseInt(_0x58a454(0xb6)) / 0x6 * (-parseInt(_0x58a454(0xaf)) / 0x7) + -parseInt(_0x58a454(0xa8)) / 0x8 * (parseInt(_0x58a454(0xba)) / 0x9) + parseInt(_0x58a454(0xb3)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f16, 0xa940b));
function gets(str) {
    this['_s'] = str['split']('\x0a');
    this['_y'] = 0x0;
}
;
gets['prototype'] = {
    'a': function (f) {
        var _0x4cef09 = a0_0x58da;
        var s = this['_s'], y = this['_y'], r;
        if (typeof s[y] === 'string')
            s[y] = s[y][_0x4cef09(0xac)]('\x20')[_0x4cef09(0xa9)]();
        r = s[y][_0x4cef09(0xb5)]();
        if (!s[y]['length'])
            this['_y']++;
        return f ? r : +r;
    },
    'l': function (f) {
        var s = this['_s'][this['_y']++]['split']('\x20');
        return f ? s : s['map'](a => +a);
    },
    'm': function (n, f) {
        var _0x521428 = a0_0x58da;
        var s = this['_s'], y = this['_y'], r = [], i = 0x0;
        if (f)
            for (; i < n; i++)
                r[i] = s[y + i][_0x521428(0xac)]('\x20');
        else
            for (; i < n; i++)
                r[i] = s[y + i][_0x521428(0xac)]('\x20')[_0x521428(0xb4)](a => +a);
        this['_y'] += n;
        return r;
    }
};
var o = new gets(require('fs')[a0_0x1e9b5a(0xb8)](a0_0x1e9b5a(0xb1), a0_0x1e9b5a(0xab)));
console['log'](main());
function main() {
    var _0x4fbedb = a0_0x1e9b5a;
    var n = o['a']();
    var a = o['l']();
    var b = [];
    if (n <= 0x2)
        return Math[_0x4fbedb(0xb7)](...a);
    for (var i = 0x0; i < n - 0x1; i++)
        a[n + i] = Math[_0x4fbedb(0xb7)](a[i], a[i + 0x1]);
    return middle(a);
    function middle(a) {
        var _0x583b03 = _0x4fbedb;
        a[_0x583b03(0xae)]((a, b) => a - b);
        return a[a[_0x583b03(0xaa)] >> 0x1];
    }
}