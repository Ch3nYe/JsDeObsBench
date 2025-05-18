function a0_0xbc6b(ZLLkSK, key) {
    const stringArray = a0_0x343c();
    a0_0xbc6b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xbc6b(ZLLkSK, key);
}
function a0_0x343c() {
    const _0x1e686c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'push',
        'sort',
        'log',
        'NONE'
    ];
    a0_0x343c = function () {
        return _0x1e686c;
    };
    return a0_0x343c();
}
const a0_0x242c45 = a0_0xbc6b;
const input = require('fs')[a0_0x242c45(0x0)](a0_0x242c45(0x1), a0_0x242c45(0x2));
const lines = input[a0_0x242c45(0x3)]()['split']('\x0a');
while (line = lines[a0_0x242c45(0x4)]()) {
    const [n, max] = line[a0_0x242c45(0x5)]('\x20')['map'](Number);
    if (n === 0x0 && max === 0x0) {
        break;
    }
    const prices = lines[a0_0x242c45(0x4)]()[a0_0x242c45(0x5)]('\x20')[a0_0x242c45(0x6)](Number);
    const allSum = [];
    prices['map']((priceA, indexA) => {
        const _0x5e8b90 = a0_0xbc6b;
        prices[_0x5e8b90(0x6)]((priceB, indexB) => {
            const _0x26682d = a0_0xbc6b;
            if (indexA !== indexB) {
                const sum = priceA + priceB;
                if (sum <= max) {
                    allSum[_0x26682d(0x7)](sum);
                }
            }
        });
    });
    const answer = allSum[a0_0x242c45(0x8)]((a, b) => b - a)[0x0];
    if (answer) {
        console['log'](answer);
        continue;
    }
    console[a0_0x242c45(0x9)](a0_0x242c45(0xa));
}