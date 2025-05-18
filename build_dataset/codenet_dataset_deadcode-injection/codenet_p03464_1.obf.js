const a0_0x5ec34b = a0_0x13f5;
function a0_0x13f5(gkisuU, key) {
    const stringArray = a0_0x472f();
    a0_0x13f5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x13f5(gkisuU, key);
}
console['log']((args => {
    const _0x12a2c8 = a0_0x13f5;
    const [[K], A] = args[_0x12a2c8(0x0)]()[_0x12a2c8(0x1)]`\n`['map'](r => r[_0x12a2c8(0x1)]` `[_0x12a2c8(0x2)](v => v | 0x0));
    let min = 0x2, max = 0x3;
    for (let i = K - 0x2; i >= 0x0; i--) {
        if (max + A[i + 0x1] - 0x1 < A[i])
            return '-1';
        min = Math['ceil'](min / A[i]) * A[i];
        max = Math[_0x12a2c8(0x3)](max / A[i]) * A[i] + A[i] - 0x1;
    }
    return min + '\x20' + max;
})(require('fs')[a0_0x5ec34b(0x4)]('/dev/stdin', a0_0x5ec34b(0x5))));
function a0_0x472f() {
    const _0x19be1f = [
        'trim',
        'split',
        'map',
        'floor',
        'readFileSync',
        'utf8'
    ];
    a0_0x472f = function () {
        return _0x19be1f;
    };
    return a0_0x472f();
}