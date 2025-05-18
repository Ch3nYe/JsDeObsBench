const a0_0x1eca82 = a0_0x3435;
function a0_0x394c() {
    const _0x9970bd = [
        '10zzKEUG',
        '2034856ANepLA',
        '969270IZhnGP',
        '760980bxUbIl',
        '89048UANctP',
        '21mOGYyW',
        '479344OQBYdT',
        'utf8',
        '/dev/stdin',
        'map',
        'split',
        '290uvRhhy',
        'sort',
        '210783TLlfTS',
        'readFileSync',
        '450783bhTdRj',
        'log'
    ];
    a0_0x394c = function () {
        return _0x9970bd;
    };
    return a0_0x394c();
}
function a0_0x3435(TnVrKC, key) {
    const stringArray = a0_0x394c();
    a0_0x3435 = function (index, key) {
        index = index - 0x8e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3435(TnVrKC, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5e9255 = a0_0x3435;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5e9255(0x9b)) / 0x1 + -parseInt(_0x5e9255(0x97)) / 0x2 * (parseInt(_0x5e9255(0x93)) / 0x3) + -parseInt(_0x5e9255(0x98)) / 0x4 + -parseInt(_0x5e9255(0x9a)) / 0x5 + -parseInt(_0x5e9255(0x99)) / 0x6 + parseInt(_0x5e9255(0x9c)) / 0x7 * (parseInt(_0x5e9255(0x9d)) / 0x8) + parseInt(_0x5e9255(0x95)) / 0x9 * (parseInt(_0x5e9255(0x91)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x394c, 0x85aed));
const main = input => {
    const _0x280e98 = a0_0x3435;
    const data = input[_0x280e98(0x90)](/\n/);
    const num = data[0x0];
    const hoge = data[0x1][_0x280e98(0x90)](/\s/)[_0x280e98(0x8f)](a => parseInt(a, 0xa))[_0x280e98(0x92)]((a, b) => {
        if (a < b)
            return 0x1;
        if (a > b)
            return -0x1;
        return 0x0;
    });
    var res = 0x0;
    for (i = 0x0; i < num; i++) {
        res += hoge[i * 0x2 + 0x1];
    }
    console[_0x280e98(0x96)](res);
};
main(require('fs')[a0_0x1eca82(0x94)](a0_0x1eca82(0x8e), a0_0x1eca82(0x9e)));