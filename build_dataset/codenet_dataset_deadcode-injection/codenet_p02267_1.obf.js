function a0_0x21ef(nEaqyD, key) {
    var stringArray = a0_0x2b06();
    a0_0x21ef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x21ef(nEaqyD, key);
}
var a0_0x3c060d = a0_0x21ef;
function Main(input) {
    var _0x47984c = a0_0x21ef;
    input = input['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var q = parseInt(input[0x2], 0xa);
    input[0x1] = input[0x1][_0x47984c(0x0)]('\x20');
    input[0x3] = input[0x3][_0x47984c(0x0)]('\x20');
    var s = Array(n), t = Array(q);
    for (var i = 0x0; i < n; i++) {
        s[i] = parseInt(input[0x1][i], 0xa);
    }
    for (var i = 0x0; i < q; i++) {
        t[i] = parseInt(input[0x3][i], 0xa);
    }
    var count = 0x0;
    for (var i = 0x0; i < q; i++) {
        var j;
        for (j = 0x0; j < n; j++) {
            if (s[j] == t[i])
                break;
        }
        if (j < n)
            count++;
    }
    console[_0x47984c(0x1)](count);
}
function a0_0x2b06() {
    var _0x3d4d18 = [
        'split',
        'log',
        'readFileSync'
    ];
    a0_0x2b06 = function () {
        return _0x3d4d18;
    };
    return a0_0x2b06();
}
Main(require('fs')[a0_0x3c060d(0x2)]('/dev/stdin', 'utf8'));