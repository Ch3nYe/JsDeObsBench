function a0_0x14cc() {
    var _0x3d24fd = [
        'split',
        'fill',
        'pow',
        'max',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x14cc = function () {
        return _0x3d24fd;
    };
    return a0_0x14cc();
}
var a0_0x4b893e = a0_0x11c2;
function a0_0x11c2(qsTjGA, key) {
    var stringArray = a0_0x14cc();
    a0_0x11c2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11c2(qsTjGA, key);
}
function Main(input) {
    var _0xd8e3bd = a0_0x11c2;
    input = input['split']('\x0a');
    tmp = input[0x0][_0xd8e3bd(0x0)]('\x20');
    var n = parseInt(tmp[0x0]);
    a = new Array(n)['fill'](0x0);
    for (i = 0x0; i < n; i++) {
        a[i] = parseInt(input[0x1]['split']('\x20')[i]);
    }
    b = new Array(n)[_0xd8e3bd(0x1)](0x0);
    var min = Math[_0xd8e3bd(0x2)](0xa, 0x9);
    var max = -0x1;
    for (i = 0x0; i < n; i++) {
        min = Math['min'](min, a[i]);
        if (max < a[i] - min) {
            ans = 0x1;
        }
        if (max == a[i] - min) {
            ans++;
        }
        max = Math[_0xd8e3bd(0x3)](max, a[i] - min);
    }
    console[_0xd8e3bd(0x4)]('%s', ans);
}
Main(require('fs')[a0_0x4b893e(0x5)](a0_0x4b893e(0x6), 'utf8'));