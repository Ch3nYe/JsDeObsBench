function a0_0x4f22(MOYCnA, key) {
    const stringArray = a0_0x4589();
    a0_0x4f22 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f22(MOYCnA, key);
}
const a0_0x5b5a1d = a0_0x4f22;
function a0_0x4589() {
    const _0x5e5805 = [
        'stdin',
        'setEncoding',
        'utf8',
        'createInterface',
        'stdout',
        'line',
        'push',
        'close',
        'split',
        'filter',
        'length'
    ];
    a0_0x4589 = function () {
        return _0x5e5805;
    };
    return a0_0x4589();
}
process['stdin']['resume']();
process[a0_0x5b5a1d(0x0)][a0_0x5b5a1d(0x1)](a0_0x5b5a1d(0x2));
const lines = [];
const reader = require('readline')[a0_0x5b5a1d(0x3)]({
    'input': process[a0_0x5b5a1d(0x0)],
    'output': process[a0_0x5b5a1d(0x4)]
});
reader['on'](a0_0x5b5a1d(0x5), line => {
    const _0x2a1242 = a0_0x4f22;
    lines[_0x2a1242(0x6)](line);
});
reader['on'](a0_0x5b5a1d(0x7), () => {
    const _0x4bca8b = a0_0x4f22;
    const inputLength = Number(lines[0x0]);
    const inputString = lines[0x1];
    const inputArray = inputString[_0x4bca8b(0x8)]('');
    const rArray = inputArray['filter'](element => element === 'R');
    const gArray = inputArray['filter'](element => element === 'G');
    const bArray = inputArray[_0x4bca8b(0x9)](element => element === 'B');
    let sum = 0x0;
    for (let i = 0x1; i < Number(inputLength) + 0x1; i++) {
        for (let j = i + 0x1; j < Number(inputLength) + 0x1; j++) {
            const k = j + j - i;
            if (k <= inputLength && inputArray[i - 0x1] !== inputArray[j - 0x1] && inputArray[j - 0x1] !== inputArray[k - 0x1] && inputArray[i - 0x1] !== inputArray[k - 0x1]) {
                if ('TqoYe' === 'TqoYe') {
                    sum = sum + 0x1;
                } else {
                    for (let j = i + 0x1; j < Number(inputLength) + 0x1; j++) {
                        const k = j + j - i;
                        if (k <= inputLength && inputArray[i - 0x1] !== inputArray[j - 0x1] && inputArray[j - 0x1] !== inputArray[k - 0x1] && inputArray[i - 0x1] !== inputArray[k - 0x1]) {
                            sum = sum + 0x1;
                        }
                    }
                }
            }
        }
    }
    console['log'](rArray[_0x4bca8b(0xa)] * gArray[_0x4bca8b(0xa)] * bArray[_0x4bca8b(0xa)] - sum);
});