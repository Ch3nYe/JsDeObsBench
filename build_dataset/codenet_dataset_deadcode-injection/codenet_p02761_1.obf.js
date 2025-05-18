var a0_0x17a7b7 = a0_0xd840;
function a0_0x374e() {
    var _0x155055 = [
        'split',
        'shift',
        'forEach',
        'map',
        'join',
        'replace',
        '10$1',
        '1$1',
        'log',
        'utf8'
    ];
    a0_0x374e = function () {
        return _0x155055;
    };
    return a0_0x374e();
}
function Main(input) {
    var _0x2f6b5e = a0_0xd840;
    input = input[_0x2f6b5e(0x0)]('\x0a');
    tmp = input[_0x2f6b5e(0x1)]();
    N = parseInt(tmp[_0x2f6b5e(0x0)]('\x20')[0x0]);
    M = tmp[_0x2f6b5e(0x0)]('\x20')[0x1];
    S = input;
    A = 'n'['repeat'](N)[_0x2f6b5e(0x0)]('');
    flag = !![];
    S[_0x2f6b5e(0x2)](v => {
        var _0x1faf49 = a0_0xd840;
        t = v[_0x1faf49(0x0)]('\x20')[_0x1faf49(0x3)](v => parseInt(v));
        if (A[t[0x0] - 0x1] != 'n' && A[t[0x0] - 0x1] != t[0x1])
            flag = ![];
        A[t[0x0] - 0x1] = t[0x1];
    });
    A = A[_0x2f6b5e(0x4)]('');
    A = A[_0x2f6b5e(0x5)](/^nn([0-9])/, _0x2f6b5e(0x6));
    A = A[_0x2f6b5e(0x5)](/^n([0-9])/, _0x2f6b5e(0x7));
    A = A[_0x2f6b5e(0x5)](/n/g, '0');
    A = parseInt(A);
    if (flag && (A + '')['length'] == N) {
        console[_0x2f6b5e(0x8)](A);
    } else {
        console[_0x2f6b5e(0x8)](-0x1);
    }
}
function a0_0xd840(lLNiEv, key) {
    var stringArray = a0_0x374e();
    a0_0xd840 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd840(lLNiEv, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x17a7b7(0x9)));