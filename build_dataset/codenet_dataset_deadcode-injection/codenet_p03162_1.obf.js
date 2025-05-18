const a0_0x42ea0a = a0_0x5018;
function main(input) {
    const _0x8f0250 = a0_0x5018;
    let tmp = input[_0x8f0250(0x0)]('\x0a');
    let vacations = [];
    for (let i = 0x1; i < tmp[_0x8f0250(0x1)]; i++) {
        let vacation = tmp[i][_0x8f0250(0x0)]('\x20')['map'](element => parseInt(element, 0xa));
        vacations['push'](vacation);
    }
    let dp = [
        0x0,
        0x0,
        0x0
    ];
    for (let day = 0x0; day < vacations[_0x8f0250(0x1)]; day++) {
        let vacation = vacations[day];
        let new_dp = [
            0x0,
            0x0,
            0x0
        ];
        for (let i = 0x0; i < 0x3; i++) {
            if ('SbZuM' === _0x8f0250(0x2)) {
                for (let j = 0x0; j < 0x3; j++) {
                    if (i !== j) {
                        if ('xdQxr' !== 'cAdsG') {
                            new_dp[j] = Math[_0x8f0250(0x3)](new_dp[j], dp[i] + vacation[j]);
                        } else {
                            if (i !== j) {
                                new_dp[j] = Math[_0x8f0250(0x3)](new_dp[j], dp[i] + vacation[j]);
                            }
                        }
                    }
                }
            } else {
                new_dp[j] = Math[_0x8f0250(0x3)](new_dp[j], dp[i] + vacation[j]);
            }
        }
        dp = new_dp;
    }
    console[_0x8f0250(0x4)](Math[_0x8f0250(0x3)](dp[0x0], dp[0x1], dp[0x2]));
}
function a0_0x22da() {
    const _0x34ccbc = [
        'split',
        'length',
        'SbZuM',
        'max',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x22da = function () {
        return _0x34ccbc;
    };
    return a0_0x22da();
}
function a0_0x5018(abwQaf, key) {
    const stringArray = a0_0x22da();
    a0_0x5018 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5018(abwQaf, key);
}
main(require('fs')[a0_0x42ea0a(0x5)]('/dev/stdin', a0_0x42ea0a(0x6)));