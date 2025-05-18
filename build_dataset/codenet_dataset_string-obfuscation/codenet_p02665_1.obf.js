function a0_0x4e95(Dodhqx, key) {
    const stringArray = a0_0x4b93();
    a0_0x4e95 = function (index, key) {
        index = index - 0xdf;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4e95(Dodhqx, key);
}
const a0_0x345a1c = a0_0x4e95;
(function (stringArrayFunction, comparisonValue) {
    const _0x26b59d = a0_0x4e95;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x26b59d(0xec)) / 0x1 + parseInt(_0x26b59d(0xeb)) / 0x2 * (parseInt(_0x26b59d(0xe8)) / 0x3) + -parseInt(_0x26b59d(0xe3)) / 0x4 * (-parseInt(_0x26b59d(0xe0)) / 0x5) + -parseInt(_0x26b59d(0xe6)) / 0x6 * (-parseInt(_0x26b59d(0xe7)) / 0x7) + parseInt(_0x26b59d(0xdf)) / 0x8 + -parseInt(_0x26b59d(0xe4)) / 0x9 + parseInt(_0x26b59d(0xe1)) / 0xa * (parseInt(_0x26b59d(0xed)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b93, 0x20c2c));
console['log']((args => {
    const _0x130e35 = a0_0x4e95;
    const [[N], A] = args['trim']()[_0x130e35(0xea)]('\x0a')[_0x130e35(0xee)](r => r['split']('\x20')[_0x130e35(0xee)](v => v | 0x0));
    const a = [0x1 - A[0x0]];
    for (let i = 0x1; i < N; i++)
        a[_0x130e35(0xe9)](a[i - 0x1] * 0x2 - A[i]);
    a[_0x130e35(0xe9)](0x0);
    let n = BigInt(A[N]);
    for (let i = N - 0x1; i >= 0x0; i--) {
        const c = a[i + 0x1] + A[i + 0x1];
        if (a[i] > c)
            a[i] = c;
        else if (a[i] * 0x2 < c)
            return '-1';
        n += BigInt(a[i] + A[i]);
    }
    return '' + n;
})(require('fs')[a0_0x345a1c(0xe2)]('/dev/stdin', a0_0x345a1c(0xe5))));
function a0_0x4b93() {
    const _0x13abe6 = [
        '10FvfqUT',
        '10OKFNSO',
        'readFileSync',
        '231932xbGTUo',
        '1015542kGNhdG',
        'utf8',
        '6684iQCuhn',
        '77EPByTW',
        '39mGSkss',
        'push',
        'split',
        '7282cWYIlf',
        '114972MIGFks',
        '67199myEsoM',
        'map',
        '1442688TrIEWQ'
    ];
    a0_0x4b93 = function () {
        return _0x13abe6;
    };
    return a0_0x4b93();
}