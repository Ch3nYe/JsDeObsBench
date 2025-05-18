function a0_0x1c92(TuJZPj, key) {
    const stringArray = a0_0x2e45();
    a0_0x1c92 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1c92(TuJZPj, key);
}
function a0_0x2e45() {
    const _0x1bc627 = [
        'stdin',
        'stdout',
        'push',
        'close',
        'length',
        'replace',
        'log',
        'TBD'
    ];
    a0_0x2e45 = function () {
        return _0x1bc627;
    };
    return a0_0x2e45();
}
const a0_0x5723ad = a0_0x1c92;
let lines = [];
let reader = require('readline')['createInterface']({
    'input': process[a0_0x5723ad(0x0)],
    'output': process[a0_0x5723ad(0x1)]
});
reader['on']('line', function (line) {
    const _0xd00ca2 = a0_0x1c92;
    lines[_0xd00ca2(0x2)](line);
});
reader['on'](a0_0x5723ad(0x3), function () {
    const _0x2aa1fe = a0_0x1c92;
    if (lines[_0x2aa1fe(0x4)] === 0x1) {
        let date_int = lines[0x0][_0x2aa1fe(0x5)](/\//g, '');
        if (date_int <= 0x13414de) {
            console[_0x2aa1fe(0x6)]('Heisei');
            return;
        }
    }
    console[_0x2aa1fe(0x6)](_0x2aa1fe(0x7));
});