function a0_0x1c28(dyASnx, key) {
    const stringArray = a0_0x2d2f();
    a0_0x1c28 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1c28(dyASnx, key);
}
function a0_0x2d2f() {
    const _0x2b87a7 = [
        'log',
        'readFileSync'
    ];
    a0_0x2d2f = function () {
        return _0x2b87a7;
    };
    return a0_0x2d2f();
}
const a0_0x273b9f = a0_0x1c28;
function Main(input) {
    const _0x4f7dd0 = a0_0x1c28;
    const numbers = input['split']('\x20')['map'](n => Number(n));
    const p1 = numbers[0x0] * numbers[0x1];
    const p2 = numbers[0x2];
    if (p1 > p2) {
        console['log'](p2);
    } else {
        console[_0x4f7dd0(0x0)](p1);
    }
}
Main(require('fs')[a0_0x273b9f(0x1)]('/dev/stdin', 'utf8'));