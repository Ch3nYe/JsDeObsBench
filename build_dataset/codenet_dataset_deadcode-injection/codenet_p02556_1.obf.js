function a0_0xa820(JAjiKP, key) {
    const stringArray = a0_0x4f7e();
    a0_0xa820 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa820(JAjiKP, key);
}
const a0_0x30b363 = a0_0xa820;
function Main(input) {
    const _0x42d5f8 = a0_0xa820;
    input = input['split']('\x0a');
    input[_0x42d5f8(0x0)]();
    let xy = input[_0x42d5f8(0x1)](val => val[_0x42d5f8(0x2)]('\x20')[_0x42d5f8(0x1)](Number));
    let arr0 = xy[_0x42d5f8(0x1)](val => val[0x0] + val[0x1]);
    let arr1 = xy[_0x42d5f8(0x1)](val => val[0x0] - val[0x1]);
    let arr0_calc = Math[_0x42d5f8(0x3)](...arr0) - Math['min'](...arr0);
    let arr1_calc = Math[_0x42d5f8(0x3)](...arr1) - Math['min'](...arr1);
    console[_0x42d5f8(0x4)](Math[_0x42d5f8(0x3)](arr0_calc, arr1_calc));
}
function a0_0x4f7e() {
    const _0x3fc21f = [
        'shift',
        'map',
        'split',
        'max',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4f7e = function () {
        return _0x3fc21f;
    };
    return a0_0x4f7e();
}
Main(require('fs')[a0_0x30b363(0x5)](a0_0x30b363(0x6), a0_0x30b363(0x7)));