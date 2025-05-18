function a0_0x4d0a() {
    const _0x1d7695 = [
        '835908MMXydX',
        '10qgDkNt',
        '4765684NIzOqV',
        'map',
        '7715835tnENTF',
        '8sVdoUf',
        'sort',
        '5877XBhVGV',
        '4764405TJKLtT',
        '/dev/stdin',
        '6EWlArf',
        'utf8',
        '1892BWdHEU',
        'readFileSync',
        '22YAFSsA',
        '585383DRqfqd',
        'split',
        'forEach',
        '815596aORQqN'
    ];
    a0_0x4d0a = function () {
        return _0x1d7695;
    };
    return a0_0x4d0a();
}
function a0_0x5208(fiutXz, key) {
    const stringArray = a0_0x4d0a();
    a0_0x5208 = function (index, key) {
        index = index - 0xa1;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5208(fiutXz, key);
}
const a0_0x1dddb4 = a0_0x5208;
(function (stringArrayFunction, comparisonValue) {
    const _0x23711e = a0_0x5208;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x23711e(0xab)) / 0x1 + parseInt(_0x23711e(0xae)) / 0x2 + parseInt(_0x23711e(0xa3)) / 0x3 * (parseInt(_0x23711e(0xa8)) / 0x4) + parseInt(_0x23711e(0xa4)) / 0x5 * (-parseInt(_0x23711e(0xa6)) / 0x6) + parseInt(_0x23711e(0xb1)) / 0x7 * (parseInt(_0x23711e(0xa1)) / 0x8) + parseInt(_0x23711e(0xb3)) / 0x9 * (-parseInt(_0x23711e(0xb0)) / 0xa) + parseInt(_0x23711e(0xaa)) / 0xb * (-parseInt(_0x23711e(0xaf)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4d0a, 0x9ef4e));
function main(input) {
    const _0x331544 = a0_0x5208;
    const args = input['split']('\x0a');
    const N = parseInt(args[0x0], 0xa);
    const sorted = args[0x1][_0x331544(0xac)]('\x20')[_0x331544(0xb2)](v => parseInt(v))[_0x331544(0xa2)]((a, b) => b - a);
    var alice = 0x0;
    var bob = 0x0;
    sorted[_0x331544(0xad)]((v, i) => {
        if ((i + 0x1) % 0x2 == 0x0) {
            bob += v;
        } else {
            alice += v;
        }
    });
    console['log'](alice - bob);
}
main(require('fs')[a0_0x1dddb4(0xa9)](a0_0x1dddb4(0xa5), a0_0x1dddb4(0xa7)));