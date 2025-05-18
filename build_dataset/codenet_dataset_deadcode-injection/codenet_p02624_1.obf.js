const a0_0x58ccef = a0_0x1060;
function* main() {
    const _0x3a0646 = a0_0x1060;
    const N = +(yield);
    let sum = 0x0;
    for (let k = 0x1; k <= N; k++)
        sum += Math[_0x3a0646(0x0)](k * Math['floor'](0x1 + N / k) * Math['floor'](N / k) / 0x2);
    console[_0x3a0646(0x1)](sum);
}
function a0_0x383a() {
    const _0x52395c = [
        'floor',
        'log',
        'next',
        'createInterface',
        'stdin'
    ];
    a0_0x383a = function () {
        return _0x52395c;
    };
    return a0_0x383a();
}
const iter = main();
function a0_0x1060(ShKOSB, key) {
    const stringArray = a0_0x383a();
    a0_0x1060 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1060(ShKOSB, key);
}
iter[a0_0x58ccef(0x2)]();
require('readline')[a0_0x58ccef(0x3)]({ 'input': process[a0_0x58ccef(0x4)] })['on']('line', line => iter[a0_0x58ccef(0x2)](line));