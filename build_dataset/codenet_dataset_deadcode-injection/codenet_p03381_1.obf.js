const a0_0x310b14 = a0_0x4f71;
function Main(input) {
    const _0x34f8e0 = a0_0x4f71;
    const lines = input[_0x34f8e0(0x0)]('\x0a');
    let N = parseInt(lines[0x0]);
    let a = lines[0x1][_0x34f8e0(0x0)]('\x20')[_0x34f8e0(0x1)](function (i) {
        return parseInt(i);
    });
    let sortedA = a[_0x34f8e0(0x2)]()[_0x34f8e0(0x3)](function (a, b) {
        return a - b;
    });
    const med1 = sortedA[N / 0x2 - 0x1];
    const med2 = sortedA[N / 0x2];
    a[_0x34f8e0(0x4)](function (i) {
        const _0x2ab768 = a0_0x4f71;
        console[_0x2ab768(0x5)](i <= med1 ? med2 : med1);
    });
}
function a0_0x4f71(apixxI, key) {
    const stringArray = a0_0x5fa1();
    a0_0x4f71 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f71(apixxI, key);
}
function a0_0x5fa1() {
    const _0xc83691 = [
        'split',
        'map',
        'slice',
        'sort',
        'forEach',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x5fa1 = function () {
        return _0xc83691;
    };
    return a0_0x5fa1();
}
Main(require('fs')[a0_0x310b14(0x6)]('/dev/stdin', a0_0x310b14(0x7)));