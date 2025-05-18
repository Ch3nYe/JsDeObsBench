var a0_0x5e62c0 = a0_0x1749;
function a0_0x52c8() {
    var _0x3786bf = [
        'split',
        'length',
        'fill',
        'pRjFj',
        'pelGM',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x52c8 = function () {
        return _0x3786bf;
    };
    return a0_0x52c8();
}
function Main(input) {
    var _0x3f8450 = a0_0x1749;
    input = input['split']('\x0a');
    tmp1 = input[0x0]['split']('\x20');
    var n = parseInt(tmp1[0x0]);
    var a = parseInt(tmp1[0x1]);
    tmp = input[0x1][_0x3f8450(0x0)]('\x20');
    x = new Array(n);
    var sum2 = 0x0;
    for (i = 0x0; i < tmp[_0x3f8450(0x1)]; i++) {
        x[i] = parseInt(tmp[i]);
    }
    var s = 0x0;
    for (i = 0x0; i < n; i++) {
        sum2 = sum2 + x[i];
    }
    var b = new Array(sum2 + 0x1);
    for (var y = 0x0; y < sum2 + 0x1; y++) {
        b[y] = new Array(n + 0x1)[_0x3f8450(0x2)](0x0);
    }
    b[0x0][0x0] = 0x1;
    for (j = 0x0; j < n; j++) {
        for (i = sum2; i >= 0x0; i--) {
            for (k = 0x0; k < n + 0x1; k++) {
                if (b[i][k] >= 0x1) {
                    if (_0x3f8450(0x3) !== _0x3f8450(0x4)) {
                        b[i + x[j]][k + 0x1] = b[i + x[j]][k + 0x1] + b[i][k];
                    } else {
                        x[i] = parseInt(tmp[i]);
                    }
                }
            }
        }
    }
    for (i = 0x1; i <= n && i * a <= sum2; i++) {
        s = s + b[i * a][i];
    }
    console['log']('%s', s);
}
function a0_0x1749(eKfGLW, key) {
    var stringArray = a0_0x52c8();
    a0_0x1749 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1749(eKfGLW, key);
}
Main(require('fs')['readFileSync'](a0_0x5e62c0(0x5), a0_0x5e62c0(0x6)));