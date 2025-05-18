function a0_0x4327(CrFkXA, key) {
    var stringArray = a0_0x2dac();
    a0_0x4327 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4327(CrFkXA, key);
}
var a0_0x148e61 = a0_0x4327;
function Main(s) {
    var _0x570317 = a0_0x4327;
    s = s['trim']();
    var a = 0x0, b = 0x0, c = 0x0;
    var ans = _0x570317(0x0);
    for (var i = 0x0; i < s[_0x570317(0x1)]; i++) {
        if (s[i] === 'a')
            a++;
        else if (s[i] === 'b')
            b++;
        else
            c++;
    }
    if (Math[_0x570317(0x2)](a, b, c) - Math[_0x570317(0x3)](a, b, c) > 0x1)
        ans = 'NO';
    console[_0x570317(0x4)](ans);
}
function a0_0x2dac() {
    var _0x705d12 = [
        'YES',
        'length',
        'max',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2dac = function () {
        return _0x705d12;
    };
    return a0_0x2dac();
}
Main(require('fs')[a0_0x148e61(0x5)](a0_0x148e61(0x6), a0_0x148e61(0x7)));