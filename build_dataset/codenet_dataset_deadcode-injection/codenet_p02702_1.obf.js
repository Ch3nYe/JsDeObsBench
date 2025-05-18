function a0_0x3ebd(RhcqJP, key) {
    const stringArray = a0_0x24b3();
    a0_0x3ebd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ebd(RhcqJP, key);
}
const Main = () => {
    const _0x231989 = a0_0x3ebd;
    let line = require('fs')[_0x231989(0x0)](_0x231989(0x1), 'utf8');
    const mod = {};
    let count = 0x0;
    for (let i = line[_0x231989(0x2)]; 0x0 < i; i--) {
        const n = parseInt(line, 0xa);
        const m = n % 0x7e3;
        if (mod[m] || m === 0x0) {
            count++;
        }
        mod[m] = !![];
        line = line[_0x231989(0x3)](0x1);
    }
    console['log'](count);
};
function a0_0x24b3() {
    const _0x53c6dc = [
        'readFileSync',
        '/dev/stdin',
        'length',
        'slice'
    ];
    a0_0x24b3 = function () {
        return _0x53c6dc;
    };
    return a0_0x24b3();
}
Main();