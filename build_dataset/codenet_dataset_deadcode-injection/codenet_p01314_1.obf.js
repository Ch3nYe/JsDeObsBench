function a0_0x26f0(XANxqQ, key) {
    var stringArray = a0_0x45b3();
    a0_0x26f0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x26f0(XANxqQ, key);
}
var a0_0x361b91 = a0_0x26f0;
function a0_0x45b3() {
    var _0x5a4b40 = [
        'split',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x45b3 = function () {
        return _0x5a4b40;
    };
    return a0_0x45b3();
}
function Main(input) {
    var _0x201966 = a0_0x26f0;
    input = input[_0x201966(0x0)]('\x0a');
    for (var i = 0x0; 0x1; i++) {
        var n = parseInt(input[i], 0xa);
        var ans = 0x0;
        if (n == 0x0)
            break;
        for (var j = 0x2; j < n; j++) {
            if (n - j * (j - 0x1) / 0x2 > 0x0 && (n - j * (j - 0x1) / 0x2) % j == 0x0) {
                ans++;
            }
        }
        console['log'](ans);
    }
}
Main(require('fs')['readFileSync'](a0_0x361b91(0x1), a0_0x361b91(0x2)));