var a0_0xbec197 = a0_0x3cfa;
var input = require('fs')[a0_0xbec197(0x0)](a0_0xbec197(0x1), a0_0xbec197(0x2));
function a0_0x3cfa(GIvLTZ, key) {
    var stringArray = a0_0x2259();
    a0_0x3cfa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3cfa(GIvLTZ, key);
}
function a0_0x2259() {
    var _0x5bf1f0 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'replace',
        'split',
        'shift'
    ];
    a0_0x2259 = function () {
        return _0x5bf1f0;
    };
    return a0_0x2259();
}
var Arr = input[a0_0xbec197(0x3)](/\n$/, '')['split']('\x0a');
while (!![]) {
    var x = Arr['shift']()[a0_0xbec197(0x4)]('');
    if (x[0x0] == '0')
        break;
    var y = Arr[a0_0xbec197(0x5)]()[a0_0xbec197(0x4)]('');
    var z = Arr['shift']()[a0_0xbec197(0x4)]('');
    var ans = 'NA';
    for (var i = 0x0; i < 0x2; i++) {
        var s = [
            'b',
            'w'
        ][i];
        if (x[0x0] + x[0x1] + x[0x2] == s + s + s)
            ans = s;
        if (y[0x0] + y[0x1] + y[0x2] == s + s + s)
            ans = s;
        if (z[0x0] + z[0x1] + z[0x2] == s + s + s)
            ans = s;
        if (x[0x0] + y[0x0] + z[0x0] == s + s + s)
            ans = s;
        if (x[0x1] + y[0x1] + z[0x1] == s + s + s)
            ans = s;
        if (x[0x2] + y[0x2] + z[0x2] == s + s + s)
            ans = s;
        if (x[0x0] + y[0x1] + z[0x2] == s + s + s)
            ans = s;
        if (x[0x2] + y[0x1] + z[0x0] == s + s + s)
            ans = s;
    }
    console['log'](ans);
}