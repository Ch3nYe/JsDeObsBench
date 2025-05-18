var a0_0x4d419d = a0_0x4dd5;
function a0_0x545a() {
    var _0x466ef1 = [
        'readFileSync',
        'utf8',
        'split',
        'map',
        'shift',
        'log',
        'trim'
    ];
    a0_0x545a = function () {
        return _0x466ef1;
    };
    return a0_0x545a();
}
var input = require('fs')[a0_0x4d419d(0x0)]('/dev/stdin', a0_0x4d419d(0x1));
var arr = input['trim']()[a0_0x4d419d(0x2)]('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()[a0_0x4d419d(0x2)]('\x20')[a0_0x4d419d(0x3)](Number);
function a0_0x4dd5(qtqBbV, key) {
    var stringArray = a0_0x545a();
    a0_0x4dd5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4dd5(qtqBbV, key);
}
var q = arr[a0_0x4d419d(0x4)]() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var [b, e, k] = arr[i]['split']('\x20')[a0_0x4d419d(0x3)](Number);
    var cnt = 0x0;
    for (var j = b; j < e; j++) {
        if (a[j] == k)
            cnt++;
    }
    s += cnt + '\x0a';
}
console[a0_0x4d419d(0x5)](s[a0_0x4d419d(0x6)]());