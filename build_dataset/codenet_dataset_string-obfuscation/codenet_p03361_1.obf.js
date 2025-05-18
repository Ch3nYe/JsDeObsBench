const a0_0x2f90dc = a0_0x498b;
function a0_0x32a2() {
    const _0x2c1a8a = [
        '1328160dMANbv',
        '572172LBcrbo',
        '10886fozLIQ',
        '1477140AmCtrc',
        'fill',
        'map',
        '/dev/stdin',
        '2474635vXlgTT',
        'utf8',
        '5455898BNMieI',
        'split',
        '2018944yWCKEa',
        '23gaueqF',
        'every'
    ];
    a0_0x32a2 = function () {
        return _0x2c1a8a;
    };
    return a0_0x32a2();
}
function a0_0x498b(iWHWiO, key) {
    const stringArray = a0_0x32a2();
    a0_0x498b = function (index, key) {
        index = index - 0xef;
        let value = stringArray[index];
        return value;
    };
    return a0_0x498b(iWHWiO, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x2d57fa = a0_0x498b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2d57fa(0xf3)) / 0x1 * (parseInt(_0x2d57fa(0xf7)) / 0x2) + parseInt(_0x2d57fa(0xf5)) / 0x3 + -parseInt(_0x2d57fa(0xf6)) / 0x4 + -parseInt(_0x2d57fa(0xfc)) / 0x5 + -parseInt(_0x2d57fa(0xf8)) / 0x6 + parseInt(_0x2d57fa(0xf0)) / 0x7 + parseInt(_0x2d57fa(0xf2)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x32a2, 0x71901));
const main = input => {
    const _0x99983 = a0_0x498b;
    const lines = input[_0x99983(0xf1)]('\x0a');
    const [h, w] = lines[0x0][_0x99983(0xf1)]('\x20')[_0x99983(0xfa)](Number);
    const data = Array(h)[_0x99983(0xf9)](![])[_0x99983(0xfa)]((_, i) => lines[i + 0x1][_0x99983(0xf1)]('')['slice'](0x0, w)['map'](c => c === '#'));
    const ans = data[_0x99983(0xf4)]((row, i) => row['every']((cell, j) => !cell || (data[i - 0x1] || [])[j] || (data[i + 0x1] || [])[j] || data[i][j - 0x1] || data[i][j + 0x1]));
    console['log'](ans ? 'Yes' : 'No');
};
main(require('fs')['readFileSync'](a0_0x2f90dc(0xfb), a0_0x2f90dc(0xef)));