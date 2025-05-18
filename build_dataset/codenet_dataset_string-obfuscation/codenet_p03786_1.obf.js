function a0_0x53c4() {
    const _0x4abf73 = [
        'split',
        '4941906MMuQcI',
        'map',
        '3SvVsml',
        'sort',
        'log',
        '110451yiQVTA',
        '5bnEcgK',
        '30IhnsbQ',
        '380112vGEBdg',
        '1033749UHezsT',
        '/dev/stdin',
        '140bBIgBh',
        '827758VxSqjf',
        '14099734OZKmtv',
        'trim',
        'readFileSync',
        '3846140WwqyXs'
    ];
    a0_0x53c4 = function () {
        return _0x4abf73;
    };
    return a0_0x53c4();
}
function a0_0x2e59(vHraUV, key) {
    const stringArray = a0_0x53c4();
    a0_0x2e59 = function (index, key) {
        index = index - 0x17d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2e59(vHraUV, key);
}
const a0_0x379331 = a0_0x2e59;
(function (stringArrayFunction, comparisonValue) {
    const _0x3e385e = a0_0x2e59;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3e385e(0x188)) / 0x1 + parseInt(_0x3e385e(0x17d)) / 0x2 + -parseInt(_0x3e385e(0x185)) / 0x3 * (parseInt(_0x3e385e(0x181)) / 0x4) + -parseInt(_0x3e385e(0x189)) / 0x5 * (parseInt(_0x3e385e(0x183)) / 0x6) + -parseInt(_0x3e385e(0x18e)) / 0x7 * (-parseInt(_0x3e385e(0x18b)) / 0x8) + -parseInt(_0x3e385e(0x18c)) / 0x9 * (parseInt(_0x3e385e(0x18a)) / 0xa) + parseInt(_0x3e385e(0x17e)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x53c4, 0x98fcb));
console[a0_0x379331(0x187)]((args => {
    const _0x5963bd = a0_0x379331;
    const [[N], A] = args[_0x5963bd(0x17f)]()[_0x5963bd(0x182)]('\x0a')[_0x5963bd(0x184)](r => r[_0x5963bd(0x182)]('\x20')['map'](v => v | 0x0));
    A[_0x5963bd(0x186)]((a, b) => a - b);
    let sum = A[0x0], n = 0x0;
    for (let i = 0x1; i < N; i++) {
        if (sum * 0x2 >= A[i])
            n++;
        else
            n = 0x0;
        if (sum + A[i] >= 0x3b9aca00)
            return '' + (n + N - i);
        sum = sum + A[i];
    }
    return '' + (n + 0x1);
})(require('fs')[a0_0x379331(0x180)](a0_0x379331(0x18d), 'utf8')));