function a0_0x2fca(JwwBMe, key) {
    var stringArray = a0_0x338c();
    a0_0x2fca = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fca(JwwBMe, key);
}
var a0_0x359e9b = a0_0x2fca;
var d = require('fs')[a0_0x359e9b(0x0)](a0_0x359e9b(0x1), a0_0x359e9b(0x2))[a0_0x359e9b(0x3)]()[a0_0x359e9b(0x4)]('\x0a');
var info = line = '';
var map = [];
while (line = d[a0_0x359e9b(0x5)]()) {
    info = line[a0_0x359e9b(0x4)]('\x20');
    map['push']([
        info[0x0],
        +info[0x1]
    ]);
}
map[a0_0x359e9b(0x6)](function (a, b) {
    if (a[0x0] < b[0x0])
        return -0x1;
    if (a[0x0] > b[0x0])
        return 0x1;
    if (a[0x1] < b[0x1])
        return -0x1;
    if (a[0x1] > b[0x1])
        return 0x1;
    return 0x0;
});
var word = '';
var pages = [];
function a0_0x338c() {
    var _0x431af7 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'sort',
        'forEach',
        'DyjJF',
        'log',
        'join',
        'push'
    ];
    a0_0x338c = function () {
        return _0x431af7;
    };
    return a0_0x338c();
}
map[a0_0x359e9b(0x7)](function (info, i) {
    var _0x57e2e5 = a0_0x2fca;
    if (word !== info[0x0]) {
        if (i !== 0x0) {
            if (_0x57e2e5(0x8) !== _0x57e2e5(0x8)) {
                if (a[0x0] < b[0x0])
                    return -0x1;
                if (a[0x0] > b[0x0])
                    return 0x1;
                if (a[0x1] < b[0x1])
                    return -0x1;
                if (a[0x1] > b[0x1])
                    return 0x1;
                return 0x0;
            } else {
                console[_0x57e2e5(0x9)](pages[_0x57e2e5(0xa)]('\x20'));
                pages = [];
            }
        }
        console[_0x57e2e5(0x9)](info[0x0]);
    }
    pages[_0x57e2e5(0xb)](info[0x1]);
    word = info[0x0];
});
console[a0_0x359e9b(0x9)](pages[a0_0x359e9b(0xa)]('\x20'));