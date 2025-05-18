var a0_0x113961 = a0_0x1bd3;
function Main(input) {
    var _0x2107b7 = a0_0x1bd3;
    var line = input[_0x2107b7(0x0)]('\x0a');
    var tmp = line[0x0][_0x2107b7(0x0)]('\x20');
    var maxint = Number(tmp[0x0]);
    var minrest = Number(tmp[0x1]);
    var ans = 0x0;
    for (var a = minrest || 0x1; a <= maxint; a++) {
        for (var b = minrest || 0x1; b <= maxint; b++) {
            if (a < b) {
                ans++;
            } else {
                if (a % b >= minrest)
                    ans++;
            }
        }
    }
    console[_0x2107b7(0x1)](ans);
}
function a0_0x1bd3(eUpuPU, key) {
    var stringArray = a0_0x5527();
    a0_0x1bd3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1bd3(eUpuPU, key);
}
Main(require('fs')[a0_0x113961(0x2)](a0_0x113961(0x3), a0_0x113961(0x4)));
function a0_0x5527() {
    var _0x17e249 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5527 = function () {
        return _0x17e249;
    };
    return a0_0x5527();
}