'use strict';
function counter(str, seq) {
    return str['split'](seq)['length'] - 0x1;
}
function main(stdin) {
    const mGQwKQ = {
        'IkTll': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'OpVFj': function (x, y) {
            return x === y;
        },
        'qCfqa': function (x, y) {
            return x === y;
        },
        'BLFVs': function (x, y) {
            return x - y;
        },
        'fDMCi': function (x, y) {
            return x === y;
        },
        'fYZFl': function (x, y) {
            return x - y;
        },
        'VkUFk': function (x, y) {
            return x !== y;
        }
    };
    const input = stdin['split']('\x0a');
    input['shift']();
    let ans = 0x0;
    let startsB = 0x0;
    let endsA = 0x0;
    let startsBandEndsA = 0x0;
    input['forEach'](s => {
        ans += mGQwKQ['IkTll'](counter, s, 'AB');
        if (mGQwKQ['OpVFj'](s['charAt'](0x0), 'B')) {
            if (mGQwKQ['qCfqa'](s['charAt'](mGQwKQ['BLFVs'](s['length'], 0x1)), 'A')) {
                ++startsBandEndsA;
            } else {
                ++startsB;
            }
        } else if (mGQwKQ['fDMCi'](s['charAt'](mGQwKQ['BLFVs'](s['length'], 0x1)), 'A')) {
            ++endsA;
        }
    });
    const smaller = Math['min'](startsB, endsA);
    const bigger = Math['max'](startsB, endsA);
    const shortage = mGQwKQ['fYZFl'](bigger, smaller);
    let extra = Math['max'](0x0, mGQwKQ['fYZFl'](startsBandEndsA, shortage));
    if (mGQwKQ['qCfqa'](shortage, 0x0) && mGQwKQ['VkUFk'](extra, 0x0))
        --extra;
    ans += smaller;
    ans += Math['min'](shortage, startsBandEndsA);
    ans += extra;
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));