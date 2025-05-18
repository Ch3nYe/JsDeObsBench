function a0_0x1f17() {
    var _0x52c8cb = [
        'split',
        'abs',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1f17 = function () {
        return _0x52c8cb;
    };
    return a0_0x1f17();
}
function a0_0x5095(kWWDFy, key) {
    var stringArray = a0_0x1f17();
    a0_0x5095 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5095(kWWDFy, key);
}
var a0_0x2014b6 = a0_0x5095;
function Main(input) {
    var _0x2cf9b4 = a0_0x5095;
    input = input[_0x2cf9b4(0x0)]('\x0a');
    var n = parseInt(input[0x0]);
    a = new Array(n)['fill'](0x0);
    b = new Array(n)['fill'](0x0);
    tmpa = input[0x1]['split']('\x20');
    tmpb = input[0x2][_0x2cf9b4(0x0)]('\x20');
    var suma = 0x0;
    var sumb = 0x0;
    var dif = 0x0;
    for (i = 0x0; i < n; i++) {
        a[i] = parseInt(tmpa[i]);
        suma += a[i];
        b[i] = parseInt(tmpb[i]);
        sumb += b[i];
        dif += Math[_0x2cf9b4(0x1)](a[i] - b[i]);
    }
    var ans = 'No';
    if (suma <= sumb && dif <= (sumb - suma) * 0x3) {
        ans = 'Yes';
    }
    console[_0x2cf9b4(0x2)]('%s', ans);
}
Main(require('fs')[a0_0x2014b6(0x3)](a0_0x2014b6(0x4), a0_0x2014b6(0x5)));