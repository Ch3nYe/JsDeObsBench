const a0_0x41ac1d = a0_0x336f;
function a0_0x336f(puqpTU, key) {
    const stringArray = a0_0x556a();
    a0_0x336f = function (index, key) {
        index = index - 0x87;
        let value = stringArray[index];
        return value;
    };
    return a0_0x336f(puqpTU, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x481810 = a0_0x336f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x481810(0x95)) / 0x1 * (parseInt(_0x481810(0x9a)) / 0x2) + -parseInt(_0x481810(0x8d)) / 0x3 * (-parseInt(_0x481810(0x8c)) / 0x4) + parseInt(_0x481810(0x94)) / 0x5 * (parseInt(_0x481810(0x99)) / 0x6) + parseInt(_0x481810(0x8f)) / 0x7 + parseInt(_0x481810(0x87)) / 0x8 + parseInt(_0x481810(0x8a)) / 0x9 + -parseInt(_0x481810(0x8e)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x556a, 0x68a74));
function a0_0x556a() {
    const _0xce1b24 = [
        '162026sOgUaj',
        '2248288zgUQPZ',
        'readFileSync',
        'trim',
        '793656UjTBHz',
        'log',
        '100KjmUja',
        '97365pNUZli',
        '18428080tPVkSJ',
        '770392WDJBsF',
        'split',
        '/dev/stdin',
        'map',
        'sort',
        '2878760pkRkBK',
        '5lLDrUn',
        'concat',
        'push',
        'utf8',
        '6IftfIH'
    ];
    a0_0x556a = function () {
        return _0xce1b24;
    };
    return a0_0x556a();
}
console[a0_0x41ac1d(0x8b)]((args => {
    const _0x3ce649 = a0_0x41ac1d;
    const [[N], X] = args[_0x3ce649(0x89)]()[_0x3ce649(0x90)]('\x0a')['map'](r => r['split']('\x20')[_0x3ce649(0x92)](v => v | 0x0));
    const _X = [][_0x3ce649(0x96)](X)[_0x3ce649(0x93)]((a, b) => a - b);
    const M1 = _X[N / 0x2 - 0x1], M2 = _X[N / 0x2];
    const m = [];
    for (let i = 0x0; i < N; i++) {
        if (X[i] <= M1)
            m['push'](M2);
        else
            m[_0x3ce649(0x97)](M1);
    }
    return m['join']`\n`;
})(require('fs')[a0_0x41ac1d(0x88)](a0_0x41ac1d(0x91), a0_0x41ac1d(0x98))));