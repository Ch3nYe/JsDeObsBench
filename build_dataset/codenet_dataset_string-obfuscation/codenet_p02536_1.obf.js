const a0_0xde1de2 = a0_0xf3eb;
(function (stringArrayFunction, comparisonValue) {
    const _0x5b2a60 = a0_0xf3eb;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5b2a60(0xcd)) / 0x1 + parseInt(_0x5b2a60(0xc9)) / 0x2 + -parseInt(_0x5b2a60(0xd1)) / 0x3 + parseInt(_0x5b2a60(0xd6)) / 0x4 + -parseInt(_0x5b2a60(0xca)) / 0x5 * (parseInt(_0x5b2a60(0xd7)) / 0x6) + parseInt(_0x5b2a60(0xcb)) / 0x7 + parseInt(_0x5b2a60(0xd5)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4533, 0x49995));
let lines = [];
let reader = require(a0_0xde1de2(0xcc))['createInterface']({
    'input': process[a0_0xde1de2(0xcf)],
    'output': process[a0_0xde1de2(0xd2)]
});
function a0_0xf3eb(BLIkFI, key) {
    const stringArray = a0_0x4533();
    a0_0xf3eb = function (index, key) {
        index = index - 0xc8;
        let value = stringArray[index];
        return value;
    };
    return a0_0xf3eb(BLIkFI, key);
}
function a0_0x4533() {
    const _0x345df5 = [
        'split',
        'close',
        '1419632GbmCjh',
        '201408CtTqtR',
        '1062690AuYheR',
        'includes',
        '572678oTJzOo',
        '10lRTeSt',
        '762328gECapF',
        'readline',
        '470097pGJtNC',
        'push',
        'stdin',
        'line',
        '1312365sZFwBa',
        'stdout'
    ];
    a0_0x4533 = function () {
        return _0x345df5;
    };
    return a0_0x4533();
}
reader['on'](a0_0xde1de2(0xd0), function (line) {
    lines['push'](line);
});
reader['on'](a0_0xde1de2(0xd4), function () {
    const _0x11fe40 = a0_0xde1de2;
    const [n, m] = lines[0x0][_0x11fe40(0xd3)]('\x20');
    const a = [];
    const b = [];
    for (let i = 0x0; i < m; i++) {
        [a[i], b[i]] = lines[i + 0x1][_0x11fe40(0xd3)]('\x20');
    }
    const connected = [];
    connected[_0x11fe40(0xce)](a[0x0]);
    connected[_0x11fe40(0xce)](b[0x0]);
    ans = n - 0x2;
    for (let i = 0x1; i < m; i++) {
        if (!connected[_0x11fe40(0xc8)](a[i]) && !connected[_0x11fe40(0xc8)](b[i])) {
            ans--;
        } else if (!connected['includes'](a[i])) {
            ans--;
            connected['push'](a[i]);
        } else if (!connected[_0x11fe40(0xc8)](b[i])) {
            ans--;
            connected['push'](b[i]);
        }
    }
    console['log'](ans);
});