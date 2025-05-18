var a0_0x289d2a = a0_0x38ab;
var input = require('fs')[a0_0x289d2a(0x0)](a0_0x289d2a(0x1), a0_0x289d2a(0x2));
var arr = input['trim']()[a0_0x289d2a(0x3)]('\x0a');
while (!![]) {
    var [n, k, m] = arr['shift']()[a0_0x289d2a(0x3)]('\x20')[a0_0x289d2a(0x4)](Number);
    if (n + k + m == 0x0)
        break;
    var a = [];
    for (var i = 0x0; i < n; i++)
        a[i] = !![];
    var z = m - 0x1;
    var sum = n;
    while (!![]) {
        if (sum == 0x1)
            break;
        a[z] = ![];
        sum--;
        var cnt = 0x0;
        while (!![]) {
            if (cnt == k)
                break;
            z++;
            if (z >= n)
                z = 0x0;
            if (a[z])
                cnt++;
        }
    }
    a[a0_0x289d2a(0x5)]((v, i) => {
        var _0x12f0d7 = a0_0x38ab;
        if (v)
            console[_0x12f0d7(0x6)](i + 0x1);
    });
}
function a0_0x38ab(gFsFGO, key) {
    var stringArray = a0_0x1417();
    a0_0x38ab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38ab(gFsFGO, key);
}
function a0_0x1417() {
    var _0x22fa3c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'forEach',
        'log'
    ];
    a0_0x1417 = function () {
        return _0x22fa3c;
    };
    return a0_0x1417();
}