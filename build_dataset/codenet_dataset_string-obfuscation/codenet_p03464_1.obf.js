const a0_0x563ac6 = a0_0x37d2;
(function (stringArrayFunction, comparisonValue) {
    const _0x337524 = a0_0x37d2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x337524(0x180)) / 0x1 * (parseInt(_0x337524(0x179)) / 0x2) + parseInt(_0x337524(0x17e)) / 0x3 + -parseInt(_0x337524(0x175)) / 0x4 + -parseInt(_0x337524(0x178)) / 0x5 * (parseInt(_0x337524(0x17d)) / 0x6) + parseInt(_0x337524(0x172)) / 0x7 * (-parseInt(_0x337524(0x17f)) / 0x8) + parseInt(_0x337524(0x17c)) / 0x9 + parseInt(_0x337524(0x171)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1b2d, 0x65ced));
function a0_0x37d2(NJeSfS, key) {
    const stringArray = a0_0x1b2d();
    a0_0x37d2 = function (index, key) {
        index = index - 0x171;
        let value = stringArray[index];
        return value;
    };
    return a0_0x37d2(NJeSfS, key);
}
function a0_0x1b2d() {
    const _0x2af680 = [
        '154574anvUur',
        'floor',
        'readFileSync',
        '4367529gxgQLe',
        '1862538BEcKUe',
        '1517514SwPnEH',
        '804144rGlklL',
        '1cIjiyA',
        'map',
        '2388760aRtitY',
        '7TzSuNU',
        'ceil',
        'trim',
        '1299048xDLjqa',
        'split',
        '/dev/stdin',
        '5prVDaw'
    ];
    a0_0x1b2d = function () {
        return _0x2af680;
    };
    return a0_0x1b2d();
}
console['log']((args => {
    const _0x12cec3 = a0_0x37d2;
    const [[K], A] = args[_0x12cec3(0x174)]()[_0x12cec3(0x176)]`\n`[_0x12cec3(0x181)](r => r['split']` `[_0x12cec3(0x181)](v => v | 0x0));
    let min = 0x2, max = 0x3;
    for (let i = K - 0x2; i >= 0x0; i--) {
        if (max + A[i + 0x1] - 0x1 < A[i])
            return '-1';
        min = Math[_0x12cec3(0x173)](min / A[i]) * A[i];
        max = Math[_0x12cec3(0x17a)](max / A[i]) * A[i] + A[i] - 0x1;
    }
    return min + '\x20' + max;
})(require('fs')[a0_0x563ac6(0x17b)](a0_0x563ac6(0x177), 'utf8')));