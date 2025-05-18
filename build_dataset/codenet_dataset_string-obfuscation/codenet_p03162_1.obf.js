const a0_0x1561e8 = a0_0x1dc4;
(function (stringArrayFunction, comparisonValue) {
    const _0x4e768c = a0_0x1dc4;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4e768c(0x77)) / 0x1 * (-parseInt(_0x4e768c(0x7b)) / 0x2) + parseInt(_0x4e768c(0x79)) / 0x3 + -parseInt(_0x4e768c(0x6f)) / 0x4 * (parseInt(_0x4e768c(0x75)) / 0x5) + -parseInt(_0x4e768c(0x7d)) / 0x6 * (parseInt(_0x4e768c(0x7a)) / 0x7) + -parseInt(_0x4e768c(0x76)) / 0x8 + -parseInt(_0x4e768c(0x70)) / 0x9 * (-parseInt(_0x4e768c(0x6e)) / 0xa) + parseInt(_0x4e768c(0x78)) / 0xb * (parseInt(_0x4e768c(0x74)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c1c, 0xae14f));
function a0_0x1dc4(EVDmRE, key) {
    const stringArray = a0_0x1c1c();
    a0_0x1dc4 = function (index, key) {
        index = index - 0x6d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1dc4(EVDmRE, key);
}
function main(input) {
    const _0x41f730 = a0_0x1dc4;
    let tmp = input[_0x41f730(0x72)]('\x0a');
    let vacations = [];
    for (let i = 0x1; i < tmp[_0x41f730(0x73)]; i++) {
        let vacation = tmp[i][_0x41f730(0x72)]('\x20')[_0x41f730(0x7e)](element => parseInt(element, 0xa));
        vacations['push'](vacation);
    }
    let dp = [
        0x0,
        0x0,
        0x0
    ];
    for (let day = 0x0; day < vacations[_0x41f730(0x73)]; day++) {
        let vacation = vacations[day];
        let new_dp = [
            0x0,
            0x0,
            0x0
        ];
        for (let i = 0x0; i < 0x3; i++) {
            for (let j = 0x0; j < 0x3; j++) {
                if (i !== j) {
                    new_dp[j] = Math['max'](new_dp[j], dp[i] + vacation[j]);
                }
            }
        }
        dp = new_dp;
    }
    console[_0x41f730(0x6d)](Math['max'](dp[0x0], dp[0x1], dp[0x2]));
}
main(require('fs')[a0_0x1561e8(0x71)](a0_0x1561e8(0x7c), 'utf8'));
function a0_0x1c1c() {
    const _0x40dd68 = [
        '/dev/stdin',
        '6KmeKgG',
        'map',
        'log',
        '550vQIcrb',
        '4932xZLRhL',
        '192618vjskHm',
        'readFileSync',
        'split',
        'length',
        '12hPRiSf',
        '585loMecB',
        '8467256ZuFFRk',
        '30kOZShF',
        '14231767SBKpUP',
        '1195263wSMjEc',
        '6859727ElBoQz',
        '1756wdEsgd'
    ];
    a0_0x1c1c = function () {
        return _0x40dd68;
    };
    return a0_0x1c1c();
}