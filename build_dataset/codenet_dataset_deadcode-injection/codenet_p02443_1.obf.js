var a0_0x497f21 = a0_0x5640;
var input = require('fs')[a0_0x497f21(0x0)]('/dev/stdin', 'utf8');
function a0_0x4302() {
    var _0x83274 = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'map',
        'slice',
        'reverse',
        'concat'
    ];
    a0_0x4302 = function () {
        return _0x83274;
    };
    return a0_0x4302();
}
function a0_0x5640(sGaDlg, key) {
    var stringArray = a0_0x4302();
    a0_0x5640 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5640(sGaDlg, key);
}
var arr = input[a0_0x497f21(0x1)]()[a0_0x497f21(0x2)]('\x0a');
var n = arr[a0_0x497f21(0x3)]() - 0x0;
var a = arr[a0_0x497f21(0x3)]()[a0_0x497f21(0x2)]('\x20')['map'](Number);
var q = arr[a0_0x497f21(0x3)]() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var [b, e] = arr[i]['split']('\x20')[a0_0x497f21(0x4)](Number);
    var x = a['slice'](0x0, b);
    var y = a[a0_0x497f21(0x5)](b, e)[a0_0x497f21(0x6)]();
    var z = a['slice'](e);
    a = x[a0_0x497f21(0x7)](y, z);
}
console['log'](a['join']('\x20'));