function a0_0x9fab(PcZFLy, key) {
    var stringArray = a0_0x57a7();
    a0_0x9fab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9fab(PcZFLy, key);
}
var a0_0x2f04ab = a0_0x9fab;
function Main(input) {
    var _0x11429a = a0_0x9fab;
    input = input[_0x11429a(0x0)]()['split']('\x0a')['map'](function (x) {
        var _0x54f47d = a0_0x9fab;
        return x[_0x54f47d(0x1)]('\x20');
    });
    var n = parseInt(input[0x0][0x0], 0xa);
    var originalN = n;
    var v_ans = [];
    var start = 0x2;
    whole_loop:
        while (!![]) {
            for (var i = start; i <= Math['sqrt'](n); i++) {
                if (n % i === 0x0) {
                    v_ans['push'](i);
                    n /= i;
                    start = i;
                    continue whole_loop;
                }
            }
            v_ans[_0x11429a(0x2)](n);
            break;
        }
    console[_0x11429a(0x3)](originalN[_0x11429a(0x4)]() + ':\x20' + v_ans[_0x11429a(0x5)]('\x20'));
}
Main(require('fs')['readFileSync'](a0_0x2f04ab(0x6), 'utf8'));
function a0_0x57a7() {
    var _0x1fb972 = [
        'trim',
        'split',
        'push',
        'log',
        'toString',
        'join',
        '/dev/stdin'
    ];
    a0_0x57a7 = function () {
        return _0x1fb972;
    };
    return a0_0x57a7();
}