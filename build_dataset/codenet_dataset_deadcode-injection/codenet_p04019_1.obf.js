function a0_0x5421(VpOdMU, key) {
    const stringArray = a0_0xb78f();
    a0_0x5421 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5421(VpOdMU, key);
}
const a0_0x5d28f0 = a0_0x5421;
function Main(input) {
    const _0x9c1999 = a0_0x5421;
    input = input[_0x9c1999(0x0)]('');
    let N = input[_0x9c1999(0x1)]('N');
    let S = input[_0x9c1999(0x1)]('S');
    let E = input[_0x9c1999(0x1)]('E');
    let W = input['includes']('W');
    let NS = N && S || !N && !S;
    let EW = E && W || !E && !W;
    if (NS && EW) {
        console[_0x9c1999(0x2)](_0x9c1999(0x3));
    } else {
        console[_0x9c1999(0x2)]('No');
    }
}
function a0_0xb78f() {
    const _0xc55a3 = [
        'split',
        'includes',
        'log',
        'Yes',
        '/dev/stdin'
    ];
    a0_0xb78f = function () {
        return _0xc55a3;
    };
    return a0_0xb78f();
}
Main(require('fs')['readFileSync'](a0_0x5d28f0(0x4), 'utf8'));