function a0_0x2601(WfnrIw, key) {
    const stringArray = a0_0x2ef9();
    a0_0x2601 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2601(WfnrIw, key);
}
const a0_0x4da4ed = a0_0x2601;
let lines = [];
function a0_0x2ef9() {
    const _0x2e00db = [
        'createInterface',
        'line',
        'close',
        'split',
        'push',
        'Yes',
        'log'
    ];
    a0_0x2ef9 = function () {
        return _0x2e00db;
    };
    return a0_0x2ef9();
}
let reader = require('readline')[a0_0x4da4ed(0x0)]({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on'](a0_0x4da4ed(0x1), function (line) {
    lines['push'](line);
});
reader['on'](a0_0x4da4ed(0x2), function () {
    const _0x50f595 = a0_0x2601;
    let d1 = [];
    let d2 = [];
    const n = lines[0x0];
    let zorome = 'No';
    for (let i = 0x1; i < n; i++) {
        d1['push'](lines[i][_0x50f595(0x3)]('\x20')[0x0]);
        d2[_0x50f595(0x4)](lines[i][_0x50f595(0x3)]('\x20')[0x1]);
    }
    for (let i = 0x0; i < n - 0x2; i++) {
        if (d1[i] == d2[i]) {
            if (d1[i + 0x1] == d2[i + 0x1]) {
                if (d1[i + 0x2] == d2[i + 0x2]) {
                    zorome = _0x50f595(0x5);
                    break;
                }
            }
        }
    }
    console[_0x50f595(0x6)](zorome);
});