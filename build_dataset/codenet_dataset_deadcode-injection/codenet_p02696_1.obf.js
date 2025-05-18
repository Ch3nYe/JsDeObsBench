const a0_0x293a3e = a0_0x1056;
const Main = input => {
    const _0x5ee3de = a0_0x1056;
    ABN = input[_0x5ee3de(0x0)]('\x20')[_0x5ee3de(0x1)](item => parseInt(item));
    console[_0x5ee3de(0x2)](F(ABN[0x0], ABN[0x1], ABN[0x2]));
};
function a0_0x1056(wZLsUi, key) {
    const stringArray = a0_0x9a49();
    a0_0x1056 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1056(wZLsUi, key);
}
const F = (A, B, N) => {
    const _0x23840b = a0_0x1056;
    max = 0x0;
    count = 0x0;
    count0 = 0x0;
    for (x = 0x0; x <= N; x++) {
        result = Math['floor'](A * x / B) - A * Math[_0x23840b(0x3)](x / B);
        if (result == 0x0) {
            count0++;
        }
        if (count0 > 0x2) {
            break;
        }
        if (result > max) {
            max = result;
            count = x;
        }
    }
    return max;
};
function a0_0x9a49() {
    const _0x28d1c8 = [
        'split',
        'map',
        'log',
        'floor',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x9a49 = function () {
        return _0x28d1c8;
    };
    return a0_0x9a49();
}
Main(require('fs')['readFileSync'](a0_0x293a3e(0x4), a0_0x293a3e(0x5)));