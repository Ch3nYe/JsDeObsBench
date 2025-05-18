const a0_0x5bb835 = a0_0x1388;
(function (stringArrayFunction, comparisonValue) {
    const _0x491555 = a0_0x1388;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x491555(0xf1)) / 0x1 * (-parseInt(_0x491555(0xe9)) / 0x2) + -parseInt(_0x491555(0xf5)) / 0x3 + -parseInt(_0x491555(0xf7)) / 0x4 * (-parseInt(_0x491555(0xeb)) / 0x5) + parseInt(_0x491555(0xe7)) / 0x6 * (-parseInt(_0x491555(0xf2)) / 0x7) + parseInt(_0x491555(0xf0)) / 0x8 * (parseInt(_0x491555(0xf4)) / 0x9) + -parseInt(_0x491555(0xf3)) / 0xa * (-parseInt(_0x491555(0xee)) / 0xb) + parseInt(_0x491555(0xf8)) / 0xc * (-parseInt(_0x491555(0xf6)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x735a, 0x2e89d));
function Main(input) {
    const _0x49b021 = a0_0x1388;
    input = input[_0x49b021(0xec)]('\x0a');
    const input1 = input[0x0][_0x49b021(0xec)]('\x20');
    const N = parseInt(input1[0x0]);
    const K = parseInt(input1[0x1]);
    const As = input[0x1][_0x49b021(0xec)]('\x20')[_0x49b021(0xed)](x => parseInt(x));
    var count = 0x0;
    for (i = 0x0; i < N; i++) {
        var u = As[_0x49b021(0xe5)](i + 0x1)['filter'](x => x < As[i])[_0x49b021(0xe6)];
        var v = As['filter'](x => x < As[i])[_0x49b021(0xe6)];
        count += u * K % (0x3b9aca00 + 0x7);
        count += v * (K - 0x1) * K / 0x2 % (0x3b9aca00 + 0x7);
        count = count % (0x3b9aca00 + 0x7);
    }
    console['log'](count);
}
Main(require('fs')[a0_0x5bb835(0xef)](a0_0x5bb835(0xe8), a0_0x5bb835(0xea)));
function a0_0x1388(sILAPl, key) {
    const stringArray = a0_0x735a();
    a0_0x1388 = function (index, key) {
        index = index - 0xe5;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1388(sILAPl, key);
}
function a0_0x735a() {
    const _0x43ad5f = [
        '13NSlmLk',
        '1060YNpXWj',
        '4267812WpplIx',
        'slice',
        'length',
        '48wkdWke',
        '/dev/stdin',
        '3014bKbdPe',
        'utf8',
        '6215pPfoMH',
        'split',
        'map',
        '498124GIShma',
        'readFileSync',
        '912MuESSk',
        '46XTinzw',
        '86471scIDtS',
        '80lsvRjF',
        '8361QFoQdQ',
        '665397SpGfsF'
    ];
    a0_0x735a = function () {
        return _0x43ad5f;
    };
    return a0_0x735a();
}