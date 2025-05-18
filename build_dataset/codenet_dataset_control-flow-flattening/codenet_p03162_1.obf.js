function main(input) {
    const TZVYAV = {
        'KQYLi': function (x, y) {
            return x < y;
        },
        'dYKye': function (x, y) {
            return x < y;
        },
        'mNEZX': function (x, y) {
            return x < y;
        },
        'daOUS': function (x, y) {
            return x !== y;
        },
        'QaLTD': function (x, y) {
            return x + y;
        }
    };
    let tmp = input['split']('\x0a');
    let vacations = [];
    for (let i = 0x1; TZVYAV['KQYLi'](i, tmp['length']); i++) {
        let vacation = tmp[i]['split']('\x20')['map'](element => parseInt(element, 0xa));
        vacations['push'](vacation);
    }
    let dp = [
        0x0,
        0x0,
        0x0
    ];
    for (let day = 0x0; TZVYAV['dYKye'](day, vacations['length']); day++) {
        let vacation = vacations[day];
        let new_dp = [
            0x0,
            0x0,
            0x0
        ];
        for (let i = 0x0; TZVYAV['dYKye'](i, 0x3); i++) {
            for (let j = 0x0; TZVYAV['mNEZX'](j, 0x3); j++) {
                if (TZVYAV['daOUS'](i, j)) {
                    new_dp[j] = Math['max'](new_dp[j], TZVYAV['QaLTD'](dp[i], vacation[j]));
                }
            }
        }
        dp = new_dp;
    }
    console['log'](Math['max'](dp[0x0], dp[0x1], dp[0x2]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));