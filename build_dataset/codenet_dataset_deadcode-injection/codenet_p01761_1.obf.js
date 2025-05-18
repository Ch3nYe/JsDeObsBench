var a0_0x323577 = a0_0x16cc;
var input = require('fs')[a0_0x323577(0x0)]('/dev/stdin', a0_0x323577(0x1));
var arr = input[a0_0x323577(0x2)]()[a0_0x323577(0x3)]('\x0a');
function a0_0x16cc(yqHQik, key) {
    var stringArray = a0_0x121f();
    a0_0x16cc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16cc(yqHQik, key);
}
var n = arr[a0_0x323577(0x4)]() - 0x0;
function a0_0x121f() {
    var _0x400b49 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'log',
        'getTime',
        'forEach',
        'test',
        'bGVBA',
        'TqqSA',
        'push'
    ];
    a0_0x121f = function () {
        return _0x400b49;
    };
    return a0_0x121f();
}
var book = [];
for (var i = 0x0; i < n; i++)
    book[i] = arr['shift']();
var q = arr[a0_0x323577(0x4)]() - 0x0;
for (var i = 0x0; i < q; i++) {
    if (i != 0x0)
        console[a0_0x323577(0x5)]('');
    var ans = [];
    var v = arr[a0_0x323577(0x4)]()['split']('\x20');
    var a = v[0x0];
    var b = v[0x1];
    var c = v[0x2] != '*' ? new Date(v[0x2])[a0_0x323577(0x6)]() : '*';
    var d = v[0x3] != '*' ? new Date(v[0x3])[a0_0x323577(0x6)]() : '*';
    book[a0_0x323577(0x7)](function (V) {
        var _0x7dccaf = a0_0x16cc;
        V = V[_0x7dccaf(0x3)]('\x20');
        var A = V[0x0];
        var B = V[0x1];
        var C = new Date(V[0x2])[_0x7dccaf(0x6)]();
        var flag = !![];
        if (a != '*') {
            var regex = new RegExp(a);
            if (regex[_0x7dccaf(0x8)](A) == ![])
                flag = ![];
        }
        if (b != '*') {
            if ('bGVBA' === _0x7dccaf(0x9)) {
                var regex = new RegExp(b);
                if (regex[_0x7dccaf(0x8)](B) == ![])
                    flag = ![];
            } else {
                var regex = new RegExp(a);
                if (regex[_0x7dccaf(0x8)](A) == ![])
                    flag = ![];
            }
        }
        if (c != '*') {
            if (_0x7dccaf(0xa) === 'TqqSA') {
                if (c > C)
                    flag = ![];
            } else {
                console['log'](value);
            }
        }
        if (d != '*') {
            if (d < C)
                flag = ![];
        }
        if (flag)
            ans[_0x7dccaf(0xb)](A);
    });
    ans[a0_0x323577(0x7)](function (value) {
        var _0x4ce412 = a0_0x16cc;
        console[_0x4ce412(0x5)](value);
    });
}