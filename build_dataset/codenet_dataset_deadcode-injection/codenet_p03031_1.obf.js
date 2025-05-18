var a0_0x3cea79 = a0_0x10c1;
function Main(input) {
    var _0x2f84e5 = a0_0x10c1;
    lines = input[_0x2f84e5(0x0)]('\x0a');
    lines = input[_0x2f84e5(0x0)]('\x0a');
    n = lines[0x0][_0x2f84e5(0x0)]('\x20')[0x0] * 0x1;
    m = lines[0x0][_0x2f84e5(0x0)]('\x20')[0x1] * 0x1;
    ps = lines[lines[_0x2f84e5(0x1)] - 0x1][_0x2f84e5(0x0)]('\x20');
    lines = lines[_0x2f84e5(0x2)](0x1, -0x1)[_0x2f84e5(0x3)](function (l) {
        var _0x756c6b = a0_0x10c1;
        return l[_0x756c6b(0x0)]('\x20')[_0x756c6b(0x2)](0x1);
    });
    ans = 0x0;
    for (i = 0x0; i < 0x1 << n; i++) {
        s = (_0x2f84e5(0x4) + i[_0x2f84e5(0x5)](0x2))[_0x2f84e5(0x2)](-0x1 * n);
        flg = !![];
        for (j = 0x0; j < lines[_0x2f84e5(0x1)]; j++) {
            on = 0x0;
            if (!flg)
                break;
            for (k = 0x0; k < lines[j][_0x2f84e5(0x1)]; k++) {
                on += s[n - lines[j][k]] * 0x1;
            }
            if (on % 0x2 != ps[j]) {
                flg = ![];
            }
        }
        if (flg) {
            ans++;
        }
    }
    console[_0x2f84e5(0x6)](ans);
}
function a0_0x42aa() {
    var _0x18f082 = [
        'split',
        'length',
        'slice',
        'map',
        '0000000000',
        'toString',
        'log',
        'utf8'
    ];
    a0_0x42aa = function () {
        return _0x18f082;
    };
    return a0_0x42aa();
}
function a0_0x10c1(CdcMUC, key) {
    var stringArray = a0_0x42aa();
    a0_0x10c1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10c1(CdcMUC, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x3cea79(0x7)));