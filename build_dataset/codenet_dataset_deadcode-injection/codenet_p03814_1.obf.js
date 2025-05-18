const a0_0x8f9bad = a0_0x5c39;
function main(input) {
    const _0x48afcb = a0_0x5c39;
    const S = input[_0x48afcb(0x0)]('');
    let a_idx;
    let z_idx;
    for (let i = 0x0; i < S[_0x48afcb(0x1)]; i++) {
        if (S[i] === 'A' && !a_idx) {
            a_idx = i;
        }
        if (S[i] === 'Z') {
            z_idx = i;
        }
    }
    console[_0x48afcb(0x2)](z_idx - a_idx + 0x1);
}
function a0_0x5c39(nTlsyB, key) {
    const stringArray = a0_0x30d2();
    a0_0x5c39 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c39(nTlsyB, key);
}
function a0_0x30d2() {
    const _0x57f105 = [
        'split',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x30d2 = function () {
        return _0x57f105;
    };
    return a0_0x30d2();
}
main(require('fs')[a0_0x8f9bad(0x3)](a0_0x8f9bad(0x4), a0_0x8f9bad(0x5)));