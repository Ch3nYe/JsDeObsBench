var a0_0x2bdf22 = a0_0x3dcd;
function Main(input) {
    var _0x68c09 = a0_0x3dcd;
    var line = input[_0x68c09(0x0)]('\x0a');
    var tmp = line[0x0][_0x68c09(0x0)]('\x20');
    var N = Number(tmp[0x0]);
    var M = Number(tmp[0x1]);
    var L = [];
    var R = [];
    var D = [];
    for (var i = 0x1; i <= M; i++) {
        var tmp = line[i][_0x68c09(0x0)]('\x20');
        L[_0x68c09(0x1)](Number(tmp[0x0]));
        R[_0x68c09(0x1)](Number(tmp[0x1]));
        D[_0x68c09(0x1)](Number(tmp[0x2]));
    }
    var pos = [];
    var ans;
    loopj:
        for (var j = 0x0; j < M; j++) {
            if (j === 0x0)
                pos[L[j] - 0x1] = 0x1;
            var rightpos = pos[L[j] - 0x1] + D[j];
            if (!pos[R[j] - 0x1]) {
                pos[R[j] - 0x1] = rightpos;
            } else {
                if (pos[R[j] - 0x1] !== rightpos) {
                    ans = 'No';
                    break loopj;
                }
            }
        }
    if (!ans)
        ans = _0x68c09(0x2);
    console[_0x68c09(0x3)](ans);
}
function a0_0x3dcd(rlpgxp, key) {
    var stringArray = a0_0x41e6();
    a0_0x3dcd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3dcd(rlpgxp, key);
}
Main(require('fs')[a0_0x2bdf22(0x4)](a0_0x2bdf22(0x5), a0_0x2bdf22(0x6)));
function a0_0x41e6() {
    var _0x5b887f = [
        'split',
        'push',
        'Yes',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x41e6 = function () {
        return _0x5b887f;
    };
    return a0_0x41e6();
}