const a0_0x2dd4f7 = a0_0x3fd1;
function a0_0x5b8f() {
    const _0x840bca = [
        'split',
        'pop',
        'unshift',
        'log',
        'join',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x5b8f = function () {
        return _0x840bca;
    };
    return a0_0x5b8f();
}
function a0_0x3fd1(WQKpDx, key) {
    const stringArray = a0_0x5b8f();
    a0_0x3fd1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3fd1(WQKpDx, key);
}
function Main(input) {
    const _0x2d81bc = a0_0x3fd1;
    input = input[_0x2d81bc(0x0)]('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input[_0x2d81bc(0x1)]();
    }
    const N = input[0x0][_0x2d81bc(0x0)]('\x20')[0x0] - 0x0;
    const M = input[0x0][_0x2d81bc(0x0)]('\x20')[0x1] - 0x0;
    const S = input[0x1];
    var cur = S['length'] - 0x1;
    var ret = [];
    while (cur > 0x0) {
        if (cur <= M) {
            ret[_0x2d81bc(0x2)](cur);
            break;
        }
        for (var i = 0x0; i < M; i++) {
            if (S[cur - M + i] === '0') {
                ret[_0x2d81bc(0x2)](M - i);
                cur = cur - M + i;
                break;
            }
            if (i === M - 0x1) {
                console[_0x2d81bc(0x3)](-0x1);
                return;
            }
        }
    }
    console[_0x2d81bc(0x3)](ret[_0x2d81bc(0x4)]('\x20'));
}
Main(require('fs')[a0_0x2dd4f7(0x5)](a0_0x2dd4f7(0x6), 'utf8'));