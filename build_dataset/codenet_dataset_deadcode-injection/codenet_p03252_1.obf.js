var a0_0x429df4 = a0_0x3b6f;
function Main(input) {
    var _0x4afc3b = a0_0x3b6f;
    input = input['split']('\x0a');
    var S = input[0x0];
    var T = input[0x1];
    var ans = 'Yes';
    while (T['length'] != 0x0) {
        for (i = 0x1; i < T[_0x4afc3b(0x0)]; i++) {
            if (T['substr'](0x0, 0x1) == T[_0x4afc3b(0x1)](i, 0x1)) {
                if (S[_0x4afc3b(0x1)](0x0, 0x1) != S[_0x4afc3b(0x1)](i, 0x1)) {
                    ans = 'No';
                    break;
                }
            }
            if (S[_0x4afc3b(0x1)](0x0, 0x1) == S[_0x4afc3b(0x1)](i, 0x1)) {
                if (T[_0x4afc3b(0x1)](0x0, 0x1) != T['substr'](i, 0x1)) {
                    ans = 'No';
                    break;
                }
            }
        }
        if (ans == 'No') {
            break;
        }
        S = S[_0x4afc3b(0x1)](0x1);
        T = T[_0x4afc3b(0x1)](0x1);
    }
    console['log']('%s', ans);
}
function a0_0x47e7() {
    var _0xab35aa = [
        'length',
        'substr',
        'getElementById',
        'value',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x47e7 = function () {
        return _0xab35aa;
    };
    return a0_0x47e7();
}
function a0_0x3b6f(HzerMD, key) {
    var stringArray = a0_0x47e7();
    a0_0x3b6f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b6f(HzerMD, key);
}
function debug() {
    var _0x3531ee = a0_0x3b6f;
    var input = document[_0x3531ee(0x2)]('input')[_0x3531ee(0x3)];
    Main(input);
}
Main(require('fs')['readFileSync'](a0_0x429df4(0x4), a0_0x429df4(0x5)));