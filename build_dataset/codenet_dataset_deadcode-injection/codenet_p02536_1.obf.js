const a0_0xf756e6 = a0_0xd7a5;
function a0_0xd7a5(tMRSXP, key) {
    const stringArray = a0_0x46b6();
    a0_0xd7a5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd7a5(tMRSXP, key);
}
let lines = [];
function a0_0x46b6() {
    const _0x5d4b93 = [
        'createInterface',
        'stdin',
        'stdout',
        'push',
        'close',
        'split',
        'includes',
        'log'
    ];
    a0_0x46b6 = function () {
        return _0x5d4b93;
    };
    return a0_0x46b6();
}
let reader = require('readline')[a0_0xf756e6(0x0)]({
    'input': process[a0_0xf756e6(0x1)],
    'output': process[a0_0xf756e6(0x2)]
});
reader['on']('line', function (line) {
    const _0x35fe78 = a0_0xd7a5;
    lines[_0x35fe78(0x3)](line);
});
reader['on'](a0_0xf756e6(0x4), function () {
    const _0x917bd9 = a0_0xd7a5;
    const [n, m] = lines[0x0][_0x917bd9(0x5)]('\x20');
    const a = [];
    const b = [];
    for (let i = 0x0; i < m; i++) {
        [a[i], b[i]] = lines[i + 0x1][_0x917bd9(0x5)]('\x20');
    }
    const connected = [];
    connected[_0x917bd9(0x3)](a[0x0]);
    connected[_0x917bd9(0x3)](b[0x0]);
    ans = n - 0x2;
    for (let i = 0x1; i < m; i++) {
        if (!connected[_0x917bd9(0x6)](a[i]) && !connected['includes'](b[i])) {
            ans--;
        } else if (!connected[_0x917bd9(0x6)](a[i])) {
            ans--;
            connected[_0x917bd9(0x3)](a[i]);
        } else if (!connected['includes'](b[i])) {
            ans--;
            connected[_0x917bd9(0x3)](b[i]);
        }
    }
    console[_0x917bd9(0x7)](ans);
});