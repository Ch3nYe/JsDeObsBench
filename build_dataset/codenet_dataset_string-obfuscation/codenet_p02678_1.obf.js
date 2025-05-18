const a0_0x4e2152 = a0_0x1394;
function a0_0x39bb() {
    const _0x480739 = [
        '/dev/stdin',
        '8havHWg',
        '306268rojGBZ',
        'log',
        '1054932flYmYv',
        '1FluytB',
        '769602abFLvK',
        '693948fbagDL',
        '1412720CeehYC',
        'utf8',
        '7GdbmrA',
        'slice',
        'trim',
        'push',
        'map',
        '1561095deGqbL',
        'split',
        '1193301tmbmuB',
        'some'
    ];
    a0_0x39bb = function () {
        return _0x480739;
    };
    return a0_0x39bb();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x481ae8 = a0_0x1394;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x481ae8(0xdd)) / 0x1 * (-parseInt(_0x481ae8(0xda)) / 0x2) + parseInt(_0x481ae8(0xde)) / 0x3 + parseInt(_0x481ae8(0xdc)) / 0x4 + -parseInt(_0x481ae8(0xd4)) / 0x5 + parseInt(_0x481ae8(0xdf)) / 0x6 * (parseInt(_0x481ae8(0xe2)) / 0x7) + parseInt(_0x481ae8(0xd9)) / 0x8 * (-parseInt(_0x481ae8(0xd6)) / 0x9) + parseInt(_0x481ae8(0xe0)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39bb, 0x2bc37));
function a0_0x1394(SNyShp, key) {
    const stringArray = a0_0x39bb();
    a0_0x1394 = function (index, key) {
        index = index - 0xd0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1394(SNyShp, key);
}
(args => {
    const _0x1fbb40 = a0_0x1394;
    const [[N, M], ...path] = args[_0x1fbb40(0xd1)]()['split']('\x0a')[_0x1fbb40(0xd3)](a => a[_0x1fbb40(0xd5)]('\x20')[_0x1fbb40(0xd3)](a => a | 0x0));
    const dist = [], sign = [0x0], branch = [];
    for (let i = 0x1; i <= N; i++) {
        dist[i] = Infinity;
        sign[i] = Infinity;
        branch[i] = [];
    }
    for (let i = 0x0; i < M; i++) {
        const [A, B] = path[i];
        branch[A][_0x1fbb40(0xd2)](B);
        branch[B][_0x1fbb40(0xd2)](A);
    }
    let stack = [];
    function mark(step, i) {
        const _0x40fc71 = _0x1fbb40;
        for (let next of branch[i]) {
            if (dist[next] > step) {
                dist[next] = step;
                sign[next] = i;
                stack[_0x40fc71(0xd2)](() => mark(step + 0x1, next));
            }
        }
    }
    mark(0x0, 0x1);
    while (stack['length']) {
        let s;
        while (s = stack['pop']())
            s();
    }
    if (sign['slice'](0x2)[_0x1fbb40(0xd7)](v => v > N))
        return console['log']('No');
    console[_0x1fbb40(0xdb)]('Yes\x0a' + sign[_0x1fbb40(0xd0)](0x2)['join']('\x0a'));
})(require('fs')['readFileSync'](a0_0x4e2152(0xd8), a0_0x4e2152(0xe1)));