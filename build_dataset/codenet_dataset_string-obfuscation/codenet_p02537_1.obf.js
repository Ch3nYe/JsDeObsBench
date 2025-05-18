const a0_0x17d8c9 = a0_0x2f95;
function a0_0x4899() {
    const _0xce1934 = [
        'push',
        '1265600mgLmdJ',
        '4253979gVMbbW',
        'length',
        'slice',
        'map',
        '8rlDENl',
        '8266460CnHyMo',
        '1418210TpHBby',
        '5PLeoMj',
        '839506uWVXKR',
        '11478195ZwOBLA',
        '4dEHbZu',
        'utf8',
        'split',
        '8625588bgxbqx',
        'abs',
        '/dev/stdin'
    ];
    a0_0x4899 = function () {
        return _0xce1934;
    };
    return a0_0x4899();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x583d8c = a0_0x2f95;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x583d8c(0x99)) / 0x1 + parseInt(_0x583d8c(0x97)) / 0x2 + parseInt(_0x583d8c(0x91)) / 0x3 * (-parseInt(_0x583d8c(0x9b)) / 0x4) + parseInt(_0x583d8c(0x98)) / 0x5 * (-parseInt(_0x583d8c(0x9e)) / 0x6) + parseInt(_0x583d8c(0x90)) / 0x7 + parseInt(_0x583d8c(0x95)) / 0x8 * (parseInt(_0x583d8c(0x9a)) / 0x9) + parseInt(_0x583d8c(0x96)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4899, 0xee3cd));
function a0_0x2f95(iPTUXs, key) {
    const stringArray = a0_0x4899();
    a0_0x2f95 = function (index, key) {
        index = index - 0x8d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2f95(iPTUXs, key);
}
const main = arg => {
    const _0x3ac0b5 = a0_0x2f95;
    const [N, K] = arg[_0x3ac0b5(0x9d)]('\x0a')[0x0][_0x3ac0b5(0x9d)]('\x20')[_0x3ac0b5(0x94)](Number);
    arg = arg[_0x3ac0b5(0x9d)]('\x0a')[_0x3ac0b5(0x93)](0x1);
    const a = arg['map'](Number);
    let b = [];
    b[_0x3ac0b5(0x8f)](a[0x0]);
    for (let i = 0x1; i < N; i++) {
        if (Math[_0x3ac0b5(0x8d)](a[i] - b[b[_0x3ac0b5(0x92)] - 0x1]) <= K) {
            b[_0x3ac0b5(0x8f)](a[i]);
        }
    }
    console['log'](b[_0x3ac0b5(0x92)]);
};
main(require('fs')['readFileSync'](a0_0x17d8c9(0x8e), a0_0x17d8c9(0x9c)));