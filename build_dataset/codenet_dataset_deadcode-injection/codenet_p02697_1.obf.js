const a0_0x1b641c = a0_0x1ad3;
const processData = lines => {
    const _0x5e458a = a0_0x1ad3;
    let [n, m] = lines[0x0][_0x5e458a(0x0)]('\x20')[_0x5e458a(0x1)](x => +x);
    if (n % 0x2 === 0x1) {
        let end = n - 0x1;
        let start = 0x1;
        while (m) {
            console[_0x5e458a(0x2)](start++ + '\x20' + end--);
            m--;
        }
    } else {
        let end = n / 0x2 + 0x1;
        let start = n / 0x2;
        while (m) {
            console[_0x5e458a(0x2)](start-- + '\x20' + end++);
            m--;
        }
    }
};
function a0_0x1ad3(gfHyez, key) {
    const stringArray = a0_0x14c2();
    a0_0x1ad3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ad3(gfHyez, key);
}
function a0_0x14c2() {
    const _0x19b54c = [
        'split',
        'map',
        'log',
        'data',
        'end'
    ];
    a0_0x14c2 = function () {
        return _0x19b54c;
    };
    return a0_0x14c2();
}
let i = '';
process['stdin']['on'](a0_0x1b641c(0x3), c => i += c);
process['stdin']['on'](a0_0x1b641c(0x4), () => {
    const {EOL: EOL} = require('os');
    const lines = i['split'](EOL);
    processData(lines);
});