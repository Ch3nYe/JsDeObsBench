function a0_0x4246(YcSbdg, key) {
    const stringArray = a0_0x1783();
    a0_0x4246 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4246(YcSbdg, key);
}
const a0_0x36f4e2 = a0_0x4246;
function Main(input) {
    const _0x17c16b = a0_0x4246;
    var result;
    const X = parseInt(input[0x0]);
    const A = parseInt(input[0x1]);
    result = X < A ? 0x0 : 0xa;
    console[_0x17c16b(0x0)](result);
}
function a0_0x1783() {
    const _0x18da90 = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split'
    ];
    a0_0x1783 = function () {
        return _0x18da90;
    };
    return a0_0x1783();
}
Main(require('fs')[a0_0x36f4e2(0x1)](a0_0x36f4e2(0x2), a0_0x36f4e2(0x3))['trim']()[a0_0x36f4e2(0x4)](/\n|\s/));