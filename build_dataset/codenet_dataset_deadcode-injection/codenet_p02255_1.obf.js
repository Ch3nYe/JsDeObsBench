function a0_0x4575() {
    const _0x3c107f = [
        'split',
        'map',
        'log',
        'join',
        'readFileSync',
        'utf8'
    ];
    a0_0x4575 = function () {
        return _0x3c107f;
    };
    return a0_0x4575();
}
function a0_0x5d91(ZnNPfi, key) {
    const stringArray = a0_0x4575();
    a0_0x5d91 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5d91(ZnNPfi, key);
}
const a0_0x4ef1f6 = a0_0x5d91;
function main(lines) {
    const _0xedba24 = a0_0x5d91;
    const n = lines[_0xedba24(0x0)]('\x0a')[0x0];
    const An = lines[_0xedba24(0x0)]('\x0a')[0x1][_0xedba24(0x0)]('\x20')[_0xedba24(0x1)](Number);
    console[_0xedba24(0x2)](An[_0xedba24(0x3)]('\x20'));
    for (let i = 0x1; i < n; i++) {
        value = An[i];
        let j = i - 0x1;
        while (j >= 0x0 && value < An[j]) {
            An[j + 0x1] = An[j];
            j--;
        }
        An[j + 0x1] = value;
        console['log'](An['join']('\x20'));
    }
}
main(require('fs')[a0_0x4ef1f6(0x4)]('/dev/stdin', a0_0x4ef1f6(0x5)));