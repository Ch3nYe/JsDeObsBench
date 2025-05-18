function a0_0x9833(KVWEqt, key) {
    const stringArray = a0_0x2b28();
    a0_0x9833 = function (index, key) {
        index = index - 0x90;
        let value = stringArray[index];
        return value;
    };
    return a0_0x9833(KVWEqt, key);
}
const a0_0x6fa8c0 = a0_0x9833;
(function (stringArrayFunction, comparisonValue) {
    const _0xc69310 = a0_0x9833;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xc69310(0x95)) / 0x1 * (parseInt(_0xc69310(0x9c)) / 0x2) + parseInt(_0xc69310(0x9f)) / 0x3 + -parseInt(_0xc69310(0xa0)) / 0x4 + -parseInt(_0xc69310(0x97)) / 0x5 + -parseInt(_0xc69310(0x98)) / 0x6 * (parseInt(_0xc69310(0x94)) / 0x7) + -parseInt(_0xc69310(0xa1)) / 0x8 * (-parseInt(_0xc69310(0x93)) / 0x9) + parseInt(_0xc69310(0x90)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b28, 0x4a369));
function main(input) {
    const _0xea4db3 = a0_0x9833;
    const inputList = input[_0xea4db3(0x92)]('');
    const list = [];
    inputList[_0xea4db3(0x96)](il => {
        const _0x32c55c = _0xea4db3;
        if (!list[_0x32c55c(0x9a)](l => l === il)) {
            list[_0x32c55c(0x9d)](il);
        }
    });
    const result = list[_0xea4db3(0xa2)] === 0x2 ? _0xea4db3(0x9e) : 'No';
    console['log'](result);
}
function a0_0x2b28() {
    const _0x33bb17 = [
        'length',
        '16820500OhtOEH',
        '/dev/stdin',
        'split',
        '45IjlGxV',
        '14rEKZaX',
        '4AkZnEY',
        'forEach',
        '2422765PzRovP',
        '1442508YaZgIa',
        'readFileSync',
        'some',
        'utf8',
        '294124AuoihA',
        'push',
        'Yes',
        '250392HcLOLE',
        '539220mbhGxt',
        '363048YOnWbO'
    ];
    a0_0x2b28 = function () {
        return _0x33bb17;
    };
    return a0_0x2b28();
}
;
main(require('fs')[a0_0x6fa8c0(0x99)](a0_0x6fa8c0(0x91), a0_0x6fa8c0(0x9b)));