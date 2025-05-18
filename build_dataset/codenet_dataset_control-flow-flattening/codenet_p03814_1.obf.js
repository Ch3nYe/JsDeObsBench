function main(input) {
    const TrpPWb = {
        'qYoid': function (x, y) {
            return x < y;
        },
        'tRjQl': function (x, y) {
            return x === y;
        },
        'TkBGP': function (x, y) {
            return x + y;
        },
        'jqkvO': function (x, y) {
            return x - y;
        }
    };
    const S = input['split']('');
    let a_idx;
    let z_idx;
    for (let i = 0x0; TrpPWb['qYoid'](i, S['length']); i++) {
        if (TrpPWb['tRjQl'](S[i], 'A') && !a_idx) {
            a_idx = i;
        }
        if (S[i] === 'Z') {
            z_idx = i;
        }
    }
    console['log'](TrpPWb['TkBGP'](TrpPWb['jqkvO'](z_idx, a_idx), 0x1));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));