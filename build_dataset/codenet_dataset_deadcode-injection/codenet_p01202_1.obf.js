function a0_0x4a19(IjtdBu, key) {
    var stringArray = a0_0x54c4();
    a0_0x4a19 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4a19(IjtdBu, key);
}
var a0_0xda538a = a0_0x4a19;
var input = require('fs')['readFileSync'](a0_0xda538a(0x0), a0_0xda538a(0x1));
var arr = input['trim']()[a0_0xda538a(0x2)]('\x0a');
function a0_0x54c4() {
    var _0x10e4b5 = [
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'Yes',
        'forEach',
        'log'
    ];
    a0_0x54c4 = function () {
        return _0x10e4b5;
    };
    return a0_0x54c4();
}
var n = arr[a0_0xda538a(0x3)]() - 0x0;
while (n--) {
    var ary = arr[a0_0xda538a(0x3)]()['split']('');
    var ans = a0_0xda538a(0x4);
    var s = '';
    ary[a0_0xda538a(0x5)](function (v) {
        if (v == s)
            ans = 'No';
        s = v;
    });
    console[a0_0xda538a(0x6)](ans);
}