function a0_0x5a23(nRWRTa, key) {
    var stringArray = a0_0x1e09();
    a0_0x5a23 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a23(nRWRTa, key);
}
var a0_0x19cf86 = a0_0x5a23;
var input = require('fs')[a0_0x19cf86(0x0)](a0_0x19cf86(0x1), a0_0x19cf86(0x2));
function a0_0x1e09() {
    var _0x460071 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'map',
        '0\x200',
        'push',
        'sqrt',
        'forEach',
        'RdQqo',
        'dNccj',
        'sort',
        'AdRlC',
        'min',
        'log'
    ];
    a0_0x1e09 = function () {
        return _0x460071;
    };
    return a0_0x1e09();
}
var arr = input[a0_0x19cf86(0x3)]()['split']('\x0a');
while (!![]) {
    var ab = arr[a0_0x19cf86(0x4)]()['split']('\x20')[a0_0x19cf86(0x5)](Number);
    if (ab['join']('\x20') == a0_0x19cf86(0x6))
        break;
    var a = ab[0x0];
    var b = ab[0x1];
    var A = [];
    var B = [];
    for (i = 0x1; i <= Math['sqrt'](a); i++) {
        if (a % i == 0x0)
            A[a0_0x19cf86(0x7)]([
                a / i,
                i
            ]);
    }
    for (i = 0x1; i <= Math[a0_0x19cf86(0x8)](b); i++) {
        if (b % i == 0x0)
            B[a0_0x19cf86(0x7)]([
                b / i,
                i
            ]);
    }
    var min = Infinity;
    A[a0_0x19cf86(0x9)](function (va) {
        B['forEach'](function (vb) {
            var _0x43489c = a0_0x5a23;
            if (_0x43489c(0xa) === _0x43489c(0xb)) {
                return a - b;
            } else {
                var c = [
                    va[0x0],
                    va[0x1],
                    vb[0x0],
                    vb[0x1]
                ];
                c[_0x43489c(0xc)](function (a, b) {
                    var _0x5a9d70 = a0_0x5a23;
                    if (_0x5a9d70(0xd) === 'qtWjk') {
                        if (b % i == 0x0)
                            B['push']([
                                b / i,
                                i
                            ]);
                    } else {
                        return a - b;
                    }
                });
                min = Math[_0x43489c(0xe)](min, Math['pow'](c[0x0] - c[0x1], 0x2) + Math['pow'](c[0x1] - c[0x2], 0x2) + Math['pow'](c[0x2] - c[0x3], 0x2));
            }
        });
    });
    console[a0_0x19cf86(0xf)](min);
}