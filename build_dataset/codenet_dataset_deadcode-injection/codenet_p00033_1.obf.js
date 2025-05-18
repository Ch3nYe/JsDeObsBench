function a0_0x211f() {
    var _0x123f24 = [
        'replace',
        'split',
        'shift',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'push',
        'YES'
    ];
    a0_0x211f = function () {
        return _0x123f24;
    };
    return a0_0x211f();
}
var a0_0x337ada = a0_0x4b2c;
function a0_0x4b2c(xynzha, key) {
    var stringArray = a0_0x211f();
    a0_0x4b2c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b2c(xynzha, key);
}
(function (input) {
    var _0x1f318d = a0_0x4b2c;
    var p = input[_0x1f318d(0x0)](/\n$/, '')[_0x1f318d(0x1)]('\x0a');
    var n = Number(p[_0x1f318d(0x2)]());
    for (var i = 0x0; i < n; i++) {
        var a = p['shift']()[_0x1f318d(0x1)]('\x20')[_0x1f318d(0x3)](Number);
        console[_0x1f318d(0x4)](order(a));
    }
}(require('fs')[a0_0x337ada(0x5)](a0_0x337ada(0x6), a0_0x337ada(0x7))));
function order(a) {
    var _0x479be0 = a0_0x4b2c;
    var r = [];
    var x;
    var c = a[_0x479be0(0x2)]();
    while (x = a[_0x479be0(0x2)]()) {
        if (x > c) {
            c = x;
            continue;
        }
        r[_0x479be0(0x8)](x);
    }
    var m = -Infinity;
    while (x = r['shift']()) {
        if (x > m) {
            m = x;
            continue;
        }
        return 'NO';
    }
    return _0x479be0(0x9);
}