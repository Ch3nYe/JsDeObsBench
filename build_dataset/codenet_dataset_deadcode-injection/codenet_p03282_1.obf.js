function a0_0x1587(neDPMa, key) {
    const stringArray = a0_0x3b58();
    a0_0x1587 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1587(neDPMa, key);
}
const a0_0x2903e9 = a0_0x1587;
function a0_0x3b58() {
    const _0xb8e9ff = [
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3b58 = function () {
        return _0xb8e9ff;
    };
    return a0_0x3b58();
}
function main(input) {
    const _0xfebb5f = a0_0x1587;
    const S = input['split']('\x0a')[0x0][_0xfebb5f(0x0)]('');
    const K = parseInt(input[_0xfebb5f(0x0)]('\x0a')[0x0][_0xfebb5f(0x0)]('\x20')[0x1]);
    for (var i = 0x0; i < S['length']; i++) {
        if (S[i] != '1') {
            console[_0xfebb5f(0x1)](S[i]);
            return;
        }
    }
    console[_0xfebb5f(0x1)](0x1);
}
main(require('fs')['readFileSync'](a0_0x2903e9(0x2), a0_0x2903e9(0x3)));