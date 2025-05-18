const a0_0x39adff = a0_0x4d90;
function a0_0x2b01() {
    const _0x595325 = [
        'log',
        'split',
        '7212TDBYvZ',
        'push',
        '7551236NHFgLS',
        '15Gwzzzl',
        'map',
        'readFileSync',
        '228zosxWZ',
        'join',
        '2634205XGlyzw',
        '4306761HbuPVh',
        'utf8',
        '1581654dnHelg',
        '763651yIaVme',
        '/dev/stdin',
        '2ScCSTp',
        'abs',
        '35636424iNDbzR',
        '10AojDGx',
        '8VqomhK'
    ];
    a0_0x2b01 = function () {
        return _0x595325;
    };
    return a0_0x2b01();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x11a3ef = a0_0x4d90;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x11a3ef(0x14b)) / 0x1 * (-parseInt(_0x11a3ef(0x14d)) / 0x2) + -parseInt(_0x11a3ef(0x154)) / 0x3 * (parseInt(_0x11a3ef(0x15a)) / 0x4) + parseInt(_0x11a3ef(0x157)) / 0x5 * (-parseInt(_0x11a3ef(0x14a)) / 0x6) + parseInt(_0x11a3ef(0x15c)) / 0x7 + -parseInt(_0x11a3ef(0x151)) / 0x8 * (parseInt(_0x11a3ef(0x15d)) / 0x9) + parseInt(_0x11a3ef(0x150)) / 0xa * (-parseInt(_0x11a3ef(0x156)) / 0xb) + parseInt(_0x11a3ef(0x14f)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b01, 0x77822));
function a0_0x4d90(PdiqWK, key) {
    const stringArray = a0_0x2b01();
    a0_0x4d90 = function (index, key) {
        index = index - 0x149;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4d90(PdiqWK, key);
}
console[a0_0x39adff(0x152)]((args => {
    const _0x37c583 = a0_0x39adff;
    const [[N], A] = args['trim']()[_0x37c583(0x153)]('\x0a')[_0x37c583(0x158)](r => r[_0x37c583(0x153)]('\x20')[_0x37c583(0x158)](v => v | 0x0));
    let C = Math[_0x37c583(0x14e)](A[0x0]) + Math['abs'](A[N - 0x1]);
    for (let i = 0x1; i < N; i++) {
        C += Math['abs'](A[i] - A[i - 0x1]);
    }
    const c = [C - Math['abs'](A[0x0]) - Math['abs'](A[0x1] - A[0x0]) + Math[_0x37c583(0x14e)](A[0x1])];
    for (let i = 0x1; i < N - 0x1; i++) {
        c[_0x37c583(0x155)](C - Math[_0x37c583(0x14e)](A[i + 0x1] - A[i]) - Math[_0x37c583(0x14e)](A[i] - A[i - 0x1]) + Math['abs'](A[i + 0x1] - A[i - 0x1]));
    }
    c[_0x37c583(0x155)](C - Math[_0x37c583(0x14e)](A[N - 0x1]) - Math['abs'](A[N - 0x2] - A[N - 0x1]) + Math[_0x37c583(0x14e)](A[N - 0x2]));
    return c[_0x37c583(0x15b)]`\n`;
})(require('fs')[a0_0x39adff(0x159)](a0_0x39adff(0x14c), a0_0x39adff(0x149))));