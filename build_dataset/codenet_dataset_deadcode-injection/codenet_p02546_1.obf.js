const a0_0x21b1dc = a0_0x1b6b;
function a0_0x541b() {
    const _0x226997 = [
        'slice',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x541b = function () {
        return _0x226997;
    };
    return a0_0x541b();
}
function Main(input) {
    const _0x4be24e = a0_0x1b6b;
    input = input['split']('\x0a');
    input = input[0x0];
    const last = input[_0x4be24e(0x0)](-0x1);
    const sufix = last === 's' ? 'es' : 's';
    console[_0x4be24e(0x1)]('' + input + sufix);
}
function a0_0x1b6b(BSZbRI, key) {
    const stringArray = a0_0x541b();
    a0_0x1b6b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1b6b(BSZbRI, key);
}
Main(require('fs')[a0_0x21b1dc(0x2)](a0_0x21b1dc(0x3), a0_0x21b1dc(0x4)));