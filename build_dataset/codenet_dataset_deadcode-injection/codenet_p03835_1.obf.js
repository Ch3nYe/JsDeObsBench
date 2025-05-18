function a0_0xa705(yGZSuF, key) {
    const stringArray = a0_0x1f62();
    a0_0xa705 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa705(yGZSuF, key);
}
const a0_0x1e1891 = a0_0xa705;
function Main(input) {
    const _0x191e9b = a0_0xa705;
    let inputs = input[_0x191e9b(0x0)]('\x20');
    let K = Number(inputs[0x0]);
    let S = Number(inputs[0x1]);
    let count = 0x0;
    for (let X = 0x0; X <= K; X++) {
        for (let Y = 0x0; Y <= K; Y++) {
            for (let Z = 0x0; Z <= K; Z++) {
                if (X + Y + Z === S) {
                    count++;
                }
            }
        }
    }
    console['log'](count);
}
function a0_0x1f62() {
    const _0x2f5e1c = [
        'split',
        'readFileSync',
        'utf8'
    ];
    a0_0x1f62 = function () {
        return _0x2f5e1c;
    };
    return a0_0x1f62();
}
Main(require('fs')[a0_0x1e1891(0x1)]('/dev/stdin', a0_0x1e1891(0x2)));