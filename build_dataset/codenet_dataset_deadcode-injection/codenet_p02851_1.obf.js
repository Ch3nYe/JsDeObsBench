function a0_0x19b8(reaAil, key) {
    const stringArray = a0_0x531b();
    a0_0x19b8 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19b8(reaAil, key);
}
function a0_0x531b() {
    const _0x2b81bc = [
        'map',
        'reduce',
        'slice',
        'log',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split'
    ];
    a0_0x531b = function () {
        return _0x2b81bc;
    };
    return a0_0x531b();
}
const a0_0x33d065 = a0_0x19b8;
function Main(input) {
    const _0x336d3d = a0_0x19b8;
    const k = input[0x0][0x1];
    const as = input[0x1][_0x336d3d(0x0)](Number);
    const answer = as[_0x336d3d(0x1)]((total, cv, ci) => {
        const _0x3ce821 = a0_0x19b8;
        var result = 0x0;
        as[_0x3ce821(0x2)](ci)['reduce']((pv, value, index) => {
            const remainder = (pv + value) % k;
            if (remainder === index + 0x1) {
                result++;
            }
            return remainder;
        }, 0x0);
        return total + result;
    }, null);
    console[_0x336d3d(0x3)](answer);
}
Main(require('fs')[a0_0x33d065(0x4)](a0_0x33d065(0x5), 'utf8')[a0_0x33d065(0x6)]()['split']('\x0a')[a0_0x33d065(0x0)](line => line[a0_0x33d065(0x7)]('\x20')));