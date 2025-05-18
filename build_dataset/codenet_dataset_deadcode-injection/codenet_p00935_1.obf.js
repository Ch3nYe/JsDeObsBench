var a0_0x573528 = a0_0x21e6;
function a0_0x1775() {
    var _0x2ecc7a = [
        '/dev/stdin',
        'utf8',
        'trim',
        'replace',
        'split',
        'shift',
        'log'
    ];
    a0_0x1775 = function () {
        return _0x2ecc7a;
    };
    return a0_0x1775();
}
var input = require('fs')['readFileSync'](a0_0x573528(0x0), a0_0x573528(0x1));
var arr = input[a0_0x573528(0x2)]()[a0_0x573528(0x3)](/\n/g, '\x20')[a0_0x573528(0x4)]('\x20');
var n = arr[a0_0x573528(0x5)]() - 0x0;
var a = [];
function a0_0x21e6(AXYLTI, key) {
    var stringArray = a0_0x1775();
    a0_0x21e6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x21e6(AXYLTI, key);
}
for (var i = 0x0; i < 0x2710; i++)
    a[i] = ![];
for (var i = 0x0; i < n; i++) {
    a[arr[i] - 0x0] = !![];
    if (i + 0x1 < n)
        a[arr[i] + arr[i + 0x1] - 0x0] = !![];
    if (i + 0x2 < n)
        a[arr[i] + arr[i + 0x1] + arr[i + 0x2] - 0x0] = !![];
    if (i + 0x3 < n)
        a[arr[i] + arr[i + 0x1] + arr[i + 0x2] + arr[i + 0x3] - 0x0] = !![];
}
for (var i = 0x0; i < 0x2710; i++) {
    if (a[i] == ![]) {
        console[a0_0x573528(0x6)](i);
        break;
    }
}