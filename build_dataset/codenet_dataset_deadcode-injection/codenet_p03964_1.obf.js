var a0_0x2641bb = a0_0x51cc;
function Main(input) {
    var _0x22581a = a0_0x51cc;
    input = input[_0x22581a(0x0)]('\x0a');
    var n = parseInt(input[0x0]);
    t = new Array(n)[_0x22581a(0x1)](0x0);
    a = new Array(n)['fill'](0x0);
    for (i = 0x0; i < n; i++) {
        t[i] = parseInt(input[i + 0x1]['split']('\x20')[0x0]);
        a[i] = parseInt(input[i + 0x1][_0x22581a(0x0)]('\x20')[0x1]);
    }
    var tvote = t[0x0];
    var avote = a[0x0];
    for (i = 0x1; i < n; i++) {
        if (Math[_0x22581a(0x2)](tvote / t[i]) * t[i] / t[i] * a[i] >= avote) {
            tvote = Math[_0x22581a(0x2)](tvote / t[i]) * t[i];
            avote = Math['ceil'](tvote / t[i]) * t[i] / t[i] * a[i];
        } else {
            tvote = Math[_0x22581a(0x2)](avote / a[i]) * a[i] / a[i] * t[i];
            avote = Math[_0x22581a(0x2)](avote / a[i]) * a[i];
        }
    }
    var ans = avote + tvote;
    console[_0x22581a(0x3)]('%s', ans);
}
Main(require('fs')[a0_0x2641bb(0x4)](a0_0x2641bb(0x5), 'utf8'));
function a0_0x51cc(pGrrLG, key) {
    var stringArray = a0_0x52e1();
    a0_0x51cc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x51cc(pGrrLG, key);
}
function a0_0x52e1() {
    var _0xfd0357 = [
        'split',
        'fill',
        'ceil',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x52e1 = function () {
        return _0xfd0357;
    };
    return a0_0x52e1();
}