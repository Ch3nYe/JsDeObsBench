const a0_0x1854b4 = a0_0x4b6d;
function a0_0x4b6d(gIHhQK, key) {
    const stringArray = a0_0x13b5();
    a0_0x4b6d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4b6d(gIHhQK, key);
}
function a0_0x13b5() {
    const _0x12edaf = [
        'indexOf',
        'replace',
        'log',
        'length',
        'readFileSync',
        'utf8'
    ];
    a0_0x13b5 = function () {
        return _0x12edaf;
    };
    return a0_0x13b5();
}
const Main = input => {
    const _0x346244 = a0_0x4b6d;
    while (input[_0x346244(0x0)]('ST') > -0x1) {
        input = input[_0x346244(0x1)](/ST/g, '');
    }
    console[_0x346244(0x2)](input[_0x346244(0x3)]);
};
Main(require('fs')[a0_0x1854b4(0x4)]('/dev/stdin', a0_0x1854b4(0x5)));