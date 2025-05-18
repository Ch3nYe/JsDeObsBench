var a0_0x1769d9 = a0_0x1b36;
function a0_0x1b36(IMqpNv, key) {
    var stringArray = a0_0x39e0();
    a0_0x1b36 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b36(IMqpNv, key);
}
function a0_0x39e0() {
    var _0x37ce32 = [
        'slice',
        'map',
        'fill',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x39e0 = function () {
        return _0x37ce32;
    };
    return a0_0x39e0();
}
function Main(input) {
    var _0x3575b5 = a0_0x1b36;
    input = input['split']('\x0a');
    var Q = parseInt(input[0x0]);
    var Qs = input[_0x3575b5(0x0)](0x1, Q + 0x1)[_0x3575b5(0x1)](x => x['split']('\x20')['map'](y => parseInt(y)));
    var ans = new Array(Q);
    ans[_0x3575b5(0x2)](0x0);
    for (var i = 0x0; i < Qs[_0x3575b5(0x3)]; i++) {
        for (var j = 0x0; j < Qs[i][0x2]; j++) {
            if (j == 0x0) {
                ans[i] = Qs[i][0x0] % 0xf4243;
            } else {
                ans[i] = ans[i] * (Qs[i][0x0] + j * Qs[i][0x1]) % 0xf4243;
            }
        }
        console['log'](ans[i]);
    }
}
Main(require('fs')[a0_0x1769d9(0x4)](a0_0x1769d9(0x5), a0_0x1769d9(0x6)));