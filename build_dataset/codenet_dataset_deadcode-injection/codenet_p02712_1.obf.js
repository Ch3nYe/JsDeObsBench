const a0_0x4a3527 = a0_0x51f0;
function Main(input) {
    const _0x59af12 = a0_0x51f0;
    inputs = input['split']('\x0a');
    const N = Number(inputs[0x0]);
    const arr = [];
    for (let i = 0x1; i <= N; i++) {
        if (i % 0x3 !== 0x0 && i % 0x5 !== 0x0) {
            arr[_0x59af12(0x0)](i);
        }
    }
    const sum = arr['reduce']((prev, current) => {
        return prev + current;
    });
    console[_0x59af12(0x1)](sum);
}
function a0_0x4034() {
    const _0x5e6d6f = [
        'push',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4034 = function () {
        return _0x5e6d6f;
    };
    return a0_0x4034();
}
function a0_0x51f0(ftvGwg, key) {
    const stringArray = a0_0x4034();
    a0_0x51f0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x51f0(ftvGwg, key);
}
Main(require('fs')['readFileSync'](a0_0x4a3527(0x2), a0_0x4a3527(0x3)));