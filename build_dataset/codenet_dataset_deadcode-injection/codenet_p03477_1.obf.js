function a0_0x2f6b() {
    const _0x561430 = [
        'map',
        'log',
        'Right',
        'utf8'
    ];
    a0_0x2f6b = function () {
        return _0x561430;
    };
    return a0_0x2f6b();
}
const a0_0x919cff = a0_0xf90f;
function Main(input) {
    const _0x55f9e1 = a0_0xf90f;
    const numbers = input['split']('\x20')[_0x55f9e1(0x0)](n => Number(n));
    const l = numbers[0x0] + numbers[0x1];
    const r = numbers[0x2] + numbers[0x3];
    if (l > r) {
        console[_0x55f9e1(0x1)]('Left');
    } else if (l < r) {
        console[_0x55f9e1(0x1)](_0x55f9e1(0x2));
    } else {
        console[_0x55f9e1(0x1)]('Balanced');
    }
}
function a0_0xf90f(tTuTyN, key) {
    const stringArray = a0_0x2f6b();
    a0_0xf90f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xf90f(tTuTyN, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x919cff(0x3)));