function a0_0x4c8b(YkDBOE, key) {
    var stringArray = a0_0x342e();
    a0_0x4c8b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c8b(YkDBOE, key);
}
function a0_0x342e() {
    var _0x4d668b = [
        'length',
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x342e = function () {
        return _0x4d668b;
    };
    return a0_0x342e();
}
var a0_0x565519 = a0_0x4c8b;
function Main(s) {
    var _0x385326 = a0_0x4c8b;
    const sl = s[_0x385326(0x0)] - 0x1;
    const sa = s[_0x385326(0x1)]('')[_0x385326(0x2)](a => parseInt(a));
    var ans = 0x0;
    for (var i = 0x0; i < 0x1 << sl; i++) {
        var b = 0x0;
        for (var j = 0x0; j < sl; j++) {
            b += sa[j];
            if (i & 0x1 << j) {
                ans += b;
                b = 0x0;
            } else
                b *= 0xa;
        }
        ans += b + sa[sl];
    }
    console[_0x385326(0x3)](ans);
}
Main(require('fs')[a0_0x565519(0x4)](a0_0x565519(0x5), a0_0x565519(0x6))[a0_0x565519(0x7)]());