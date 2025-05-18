function a0_0x1a47() {
    const _0x462a9d = [
        '44tfUZMW',
        '959459VXIOLM',
        '/dev/stdin',
        'trim',
        '2BDwPPr',
        '54QPHlQO',
        '755010OSZhjg',
        '521856BXzEgU',
        'utf8',
        '6236OXPUEO',
        'split',
        'log',
        'map',
        'readFileSync',
        '8277576GRchjf',
        '6MbJYen',
        '3280PQFqgK',
        '39873KAjdIx',
        '6411391YkXqvL'
    ];
    a0_0x1a47 = function () {
        return _0x462a9d;
    };
    return a0_0x1a47();
}
const a0_0x3a6ad4 = a0_0x53e0;
(function (stringArrayFunction, comparisonValue) {
    const _0xd22c6e = a0_0x53e0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xd22c6e(0x161)) / 0x1 + -parseInt(_0xd22c6e(0x164)) / 0x2 * (-parseInt(_0xd22c6e(0x15e)) / 0x3) + -parseInt(_0xd22c6e(0x169)) / 0x4 * (-parseInt(_0xd22c6e(0x15d)) / 0x5) + -parseInt(_0xd22c6e(0x16f)) / 0x6 * (-parseInt(_0xd22c6e(0x15f)) / 0x7) + -parseInt(_0xd22c6e(0x167)) / 0x8 + parseInt(_0xd22c6e(0x165)) / 0x9 * (parseInt(_0xd22c6e(0x166)) / 0xa) + parseInt(_0xd22c6e(0x160)) / 0xb * (-parseInt(_0xd22c6e(0x16e)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1a47, 0x83d2d));
function a0_0x53e0(YpXFbE, key) {
    const stringArray = a0_0x1a47();
    a0_0x53e0 = function (index, key) {
        index = index - 0x15d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x53e0(YpXFbE, key);
}
console[a0_0x3a6ad4(0x16b)]((args => {
    const _0x51f465 = a0_0x3a6ad4;
    const [[N], a] = args[_0x51f465(0x163)]()[_0x51f465(0x16a)]`\n`[_0x51f465(0x16c)](r => r[_0x51f465(0x16a)]` `[_0x51f465(0x16c)](v => v | 0x0));
    let odd = 0x0, p4 = 0x0;
    for (let i = 0x0; i < N; i++) {
        odd += a[i] & 0x1;
        p4 += !(a[i] % 0x4);
    }
    return odd - (odd + p4 === N) <= p4 ? 'Yes' : 'No';
})(require('fs')[a0_0x3a6ad4(0x16d)](a0_0x3a6ad4(0x162), a0_0x3a6ad4(0x168))));