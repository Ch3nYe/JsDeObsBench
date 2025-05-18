function a0_0x4fd2(UcUUUY, key) {
    const stringArray = a0_0x5c8e();
    a0_0x4fd2 = function (index, key) {
        index = index - 0x6e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4fd2(UcUUUY, key);
}
const a0_0x4ab68f = a0_0x4fd2;
(function (stringArrayFunction, comparisonValue) {
    const _0x4c6fa2 = a0_0x4fd2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4c6fa2(0x73)) / 0x1 + -parseInt(_0x4c6fa2(0x74)) / 0x2 * (-parseInt(_0x4c6fa2(0x7e)) / 0x3) + -parseInt(_0x4c6fa2(0x76)) / 0x4 + parseInt(_0x4c6fa2(0x71)) / 0x5 + -parseInt(_0x4c6fa2(0x79)) / 0x6 + -parseInt(_0x4c6fa2(0x7d)) / 0x7 + parseInt(_0x4c6fa2(0x6e)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5c8e, 0x72b0c));
const input = require('fs')['readFileSync'](a0_0x4ab68f(0x7c), a0_0x4ab68f(0x6f));
const lines = input['trim']()[a0_0x4ab68f(0x75)]('\x0a');
while (line = lines[a0_0x4ab68f(0x77)]()) {
    const [n, max] = line['split']('\x20')[a0_0x4ab68f(0x72)](Number);
    if (n === 0x0 && max === 0x0) {
        break;
    }
    const prices = lines[a0_0x4ab68f(0x77)]()[a0_0x4ab68f(0x75)]('\x20')['map'](Number);
    const allSum = [];
    prices[a0_0x4ab68f(0x72)]((priceA, indexA) => {
        const _0x26a621 = a0_0x4ab68f;
        prices[_0x26a621(0x72)]((priceB, indexB) => {
            const _0xe62632 = _0x26a621;
            if (indexA !== indexB) {
                const sum = priceA + priceB;
                if (sum <= max) {
                    allSum[_0xe62632(0x7b)](sum);
                }
            }
        });
    });
    const answer = allSum[a0_0x4ab68f(0x78)]((a, b) => b - a)[0x0];
    if (answer) {
        console[a0_0x4ab68f(0x70)](answer);
        continue;
    }
    console[a0_0x4ab68f(0x70)](a0_0x4ab68f(0x7a));
}
function a0_0x5c8e() {
    const _0x173979 = [
        'split',
        '1899796wmrsfv',
        'shift',
        'sort',
        '4351806YELcYL',
        'NONE',
        'push',
        '/dev/stdin',
        '5368125rcntWQ',
        '9ptAcPL',
        '8510280mNjUGj',
        'utf8',
        'log',
        '3540830nImdrA',
        'map',
        '454067KvjoPt',
        '140586EFhBCl'
    ];
    a0_0x5c8e = function () {
        return _0x173979;
    };
    return a0_0x5c8e();
}