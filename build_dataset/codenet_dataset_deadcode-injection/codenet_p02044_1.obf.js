function a0_0x227b(gHqDHh, key) {
    var stringArray = a0_0x32e1();
    a0_0x227b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x227b(gHqDHh, key);
}
var a0_0x129831 = a0_0x227b;
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, m] = arr[a0_0x129831(0x0)]()[a0_0x129831(0x1)]('\x20')[a0_0x129831(0x2)](Number);
    if (n == 0x0 && m == 0x0)
        break;
    var x = m / n;
    var sum = 0x0;
    var a = arr[a0_0x129831(0x0)]()[a0_0x129831(0x1)]('\x20')[a0_0x129831(0x2)](Number);
    a[a0_0x129831(0x3)](v => {
        if (v >= x)
            sum += x;
        else
            sum += v;
    });
    console[a0_0x129831(0x4)](sum);
}
function a0_0x32e1() {
    var _0x35fd3c = [
        'shift',
        'split',
        'map',
        'forEach',
        'log'
    ];
    a0_0x32e1 = function () {
        return _0x35fd3c;
    };
    return a0_0x32e1();
}