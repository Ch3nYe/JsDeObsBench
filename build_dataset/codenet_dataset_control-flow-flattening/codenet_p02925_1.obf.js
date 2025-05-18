'use strict';
function main(stdin) {
    const efnWSn = {
        'WPjWo': function (callee, param1) {
            return callee(param1);
        }
    };
    const input = stdin['split']('\x0a');
    const N = efnWSn['WPjWo'](Number, input['shift']());
    const params = input['map'](p => p['split']('\x20')['map'](v => parseInt(v, 0xa)));
    console['log'](solve(params));
}
function solve(params) {
    const SjEhso = {
        'YIWtF': function (x, y) {
            return x - y;
        },
        'CDirL': function (callee, param1) {
            return callee(param1);
        },
        'tMpLp': function (x, y) {
            return x === y;
        },
        'tvvpr': function (x, y) {
            return x < y;
        },
        'aRcxO': function (callee) {
            return callee();
        }
    };
    const l = params['length'];
    function matching() {
        let matched = ![];
        for (let i = 0x0; i < l; ++i) {
            const op = SjEhso['YIWtF'](params[i][cur[i]], 0x1);
            if (SjEhso['CDirL'](isNaN, op))
                continue;
            if (SjEhso['tMpLp'](params[op][cur[op]] - 0x1, i)) {
                matched = !![];
                ++cur[i];
                ++cur[op];
            }
        }
        return matched;
    }
    function isNotCompleted() {
        return cur['some'](v => v < l - 0x1);
    }
    const cur = [];
    for (let i = 0x0; SjEhso['tvvpr'](i, l); ++i) {
        cur[i] = 0x0;
    }
    let day = 0x1;
    while (SjEhso['aRcxO'](isNotCompleted)) {
        const res = SjEhso['aRcxO'](matching);
        if (res === ![])
            return -0x1;
        ++day;
    }
    return day;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());