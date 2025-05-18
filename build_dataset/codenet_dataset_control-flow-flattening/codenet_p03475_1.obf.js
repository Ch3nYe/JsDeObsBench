'use strict';
function main(input) {
    const hBANfS = {
        'unOlh': function (x, y) {
            return x < y;
        },
        'LNXcR': function (x, y) {
            return x > y;
        },
        'mVfuk': function (x, y) {
            return x - y;
        },
        'kmjae': function (x, y) {
            return x + y;
        }
    };
    input = input['split'](/\n/);
    const n = ~~input['shift']();
    input = input['map'](v => v['split'](/\s/)['map'](x => ~~x));
    let ans = '';
    for (let i = 0x0; hBANfS['unOlh'](i, input['length']); i++) {
        let time = 0x0;
        let wait = 0x0;
        for (let j = i; hBANfS['unOlh'](j, input['length']); j++) {
            time += hBANfS['LNXcR'](time, input[j][0x1]) ? 0x0 : hBANfS['mVfuk'](input[j][0x1], time);
            time += input[j][0x0];
        }
        ans += hBANfS['kmjae'](time, '\x0a');
    }
    ans += '0\x0a';
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));