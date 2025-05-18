function a0_0x5899() {
    const _0x13c9c7 = [
        'trim',
        'split',
        'forEach',
        'length',
        'join',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5899 = function () {
        return _0x13c9c7;
    };
    return a0_0x5899();
}
const a0_0x279ea1 = a0_0xfcdb;
const Main = input => {
    const _0x58240e = a0_0xfcdb;
    const tmp = input[_0x58240e(0x0)]()[_0x58240e(0x1)]('\x0a');
    const employees = parseInt(tmp[0x0]);
    const subordinateArray = tmp[0x1][_0x58240e(0x1)]('\x20');
    const subordinateCount = {};
    const distinctSubordinate = subordinateArray['filter']((x, i, self) => self['indexOf'](x) === i);
    subordinateArray[_0x58240e(0x2)](elem => {
        subordinateCount[elem] = subordinateCount[elem] ? subordinateCount[elem] + 0x1 : 0x1;
    });
    let result = [];
    distinctSubordinate['forEach'](elem => {
        return result['push'](subordinateCount[elem]);
    });
    const zeroCount = employees - distinctSubordinate[_0x58240e(0x3)];
    if (zeroCount > 0x0) {
        for (let index = 0x0; index < zeroCount; index++) {
            result['push'](0x0);
        }
    }
    result = result[_0x58240e(0x4)]('\x0a');
    console[_0x58240e(0x5)](result);
    return result;
};
function a0_0xfcdb(rkvgyd, key) {
    const stringArray = a0_0x5899();
    a0_0xfcdb = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xfcdb(rkvgyd, key);
}
Main(require('fs')[a0_0x279ea1(0x6)](a0_0x279ea1(0x7), a0_0x279ea1(0x8)));