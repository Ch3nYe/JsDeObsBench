function a0_0x4625(CYTgks, key) {
    var stringArray = a0_0x38b9();
    a0_0x4625 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4625(CYTgks, key);
}
var a0_0x2c894b = a0_0x4625;
function Main(input) {
    var _0x256cab = a0_0x4625;
    input = input[_0x256cab(0x0)]('\x0a');
    var T = input[0x0][_0x256cab(0x0)]('\x20');
    var A = input[0x1]['split']('\x20');
    var B = input[0x2]['split']('\x20');
    for (var i = 0x0; i < 0x2; i++) {
        T[i] = Number(T[i]);
        A[i] = Number(A[i]);
        B[i] = Number(B[i]);
    }
    var sa = new Array(0x2);
    sa[0x0] = T[0x0] * A[0x0] - T[0x0] * B[0x0];
    sa[0x1] = T[0x1] * A[0x1] - T[0x1] * B[0x1];
    var x = 0x0;
    var xmae = 0x1;
    var pm = 0x0;
    var count = -0x1;
    if (sa[0x0] == sa[0x1] * -0x1) {
        console[_0x256cab(0x1)](_0x256cab(0x2));
    } else {
        if (_0x256cab(0x3) === _0x256cab(0x4)) {
            console['log'](_0x256cab(0x2));
        } else {
            for (var i = 0x0; i < 0x1; i) {
                count++;
                xmae = x;
                x += sa[count % 0x2];
                if (x * xmae > 0x0) {
                    i = 0x1;
                } else if (x == 0x0) {
                    i = 0x1;
                    count++;
                }
            }
            console[_0x256cab(0x1)](count - 0x1);
        }
    }
}
function a0_0x38b9() {
    var _0x265aa7 = [
        'split',
        'log',
        'infinity',
        'nnNQi',
        'gQpsB',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x38b9 = function () {
        return _0x265aa7;
    };
    return a0_0x38b9();
}
Main(require('fs')['readFileSync'](a0_0x2c894b(0x5), a0_0x2c894b(0x6)));