const a0_0xb0351f = a0_0x210c;
process['stdin'][a0_0xb0351f(0x0)]();
function a0_0x2225() {
    const _0x4013e3 = [
        'resume',
        'setEncoding',
        'utf8',
        'createInterface',
        'stdout',
        'line',
        'close',
        'map',
        'length',
        'log'
    ];
    a0_0x2225 = function () {
        return _0x4013e3;
    };
    return a0_0x2225();
}
function a0_0x210c(vEdVVS, key) {
    const stringArray = a0_0x2225();
    a0_0x210c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x210c(vEdVVS, key);
}
process['stdin'][a0_0xb0351f(0x1)](a0_0xb0351f(0x2));
const reader = require('readline')[a0_0xb0351f(0x3)]({
    'input': process['stdin'],
    'output': process[a0_0xb0351f(0x4)]
});
const lines = [];
reader['on'](a0_0xb0351f(0x5), line => {
    lines['push'](line);
});
reader['on'](a0_0xb0351f(0x6), () => {
    const _0x386585 = a0_0x210c;
    let [top, back, right, left, front, bottom] = lines[0x0]['split']('\x20')[_0x386585(0x7)](Number);
    const rs = lines[0x1];
    for (let i = 0x0; i < rs[_0x386585(0x8)]; i++) {
        switch (rs[i]) {
        case 'N':
            [top, front, bottom, back] = [
                back,
                top,
                front,
                bottom
            ];
            break;
        case 'S':
            [top, front, bottom, back] = [
                front,
                bottom,
                back,
                top
            ];
            break;
        case 'W':
            [top, left, bottom, right] = [
                right,
                top,
                left,
                bottom
            ];
            break;
        case 'E':
            [top, left, bottom, right] = [
                left,
                bottom,
                right,
                top
            ];
            break;
        }
    }
    console[_0x386585(0x9)](top);
});