const a0_0x41d42f = a0_0x497f;
function a0_0x8adc() {
    const _0x3774be = [
        'readFileSync',
        '186xPVUhd',
        '2fLazxw',
        '1427049YKztCR',
        '136598EPLwyP',
        '569239lFZlKm',
        '9575109tIrxfH',
        'utf8',
        '3748bkQutW',
        '23545550OWdpMR',
        '/dev/stdin',
        'log',
        'split',
        '155HyoDkp',
        '381992aThNFx'
    ];
    a0_0x8adc = function () {
        return _0x3774be;
    };
    return a0_0x8adc();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1eb507 = a0_0x497f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1eb507(0x1e6)) / 0x1 * (parseInt(_0x1eb507(0x1f2)) / 0x2) + -parseInt(_0x1eb507(0x1f3)) / 0x3 + -parseInt(_0x1eb507(0x1e9)) / 0x4 * (-parseInt(_0x1eb507(0x1ee)) / 0x5) + -parseInt(_0x1eb507(0x1f1)) / 0x6 * (parseInt(_0x1eb507(0x1f4)) / 0x7) + -parseInt(_0x1eb507(0x1ef)) / 0x8 + -parseInt(_0x1eb507(0x1e7)) / 0x9 + parseInt(_0x1eb507(0x1ea)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8adc, 0xb9afe));
function compareFunc(a, b) {
    return a - b;
}
function a0_0x497f(flIGwf, key) {
    const stringArray = a0_0x8adc();
    a0_0x497f = function (index, key) {
        index = index - 0x1e6;
        let value = stringArray[index];
        return value;
    };
    return a0_0x497f(flIGwf, key);
}
function main(input) {
    const _0x169867 = a0_0x497f;
    let args = input[_0x169867(0x1ed)](/\n/);
    let books = [
        ...args[0x1][_0x169867(0x1ed)](/\s/),
        ...args[0x2]['split'](/\s/)
    ];
    let time = args[0x0][_0x169867(0x1ed)](/\s/)[0x2];
    let result = 0x0;
    books['sort'](compareFunc);
    for (let i = 0x0; i < books['length']; i++) {
        if (time >= books[i] * 0x1) {
            time -= books[i];
            result++;
        }
    }
    console[_0x169867(0x1ec)](result);
}
main(require('fs')[a0_0x41d42f(0x1f0)](a0_0x41d42f(0x1eb), a0_0x41d42f(0x1e8)));