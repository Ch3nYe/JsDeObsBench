'use strict';
function main(input) {
    const SvmXpX = {
        'JjXND': function (callee, param1) {
            return callee(param1);
        },
        'uwtSO': function (x, y) {
            return x < y;
        },
        'gdilZ': function (x, y) {
            return x < y;
        },
        'APklu': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'qDKqe': function (x, y) {
            return x > y;
        }
    };
    const lines = input['split']('\x0a');
    const N = SvmXpX['JjXND'](parseInt, lines['shift']());
    const F = [];
    for (let i = 0x0; SvmXpX['uwtSO'](i, N); i++) {
        F['push'](lines[i]['split']('\x20')['map'](x => parseInt(x)));
    }
    const P = [];
    for (let i = 0x0; SvmXpX['uwtSO'](i, N); i++) {
        P['push'](lines[i + N]['split']('\x20')['map'](x => parseInt(x)));
    }
    let result = -Infinity;
    for (let i = 0x1; SvmXpX['uwtSO'](i, 0x400); i++) {
        let score = 0x0;
        for (let j = 0x0; SvmXpX['gdilZ'](j, N); j++) {
            let store = F[j];
            let p_index = (SvmXpX['APklu'](parseInt, store['join'](''), 0x2) & i)['toString'](0x2)['split']('')['map'](x => Number(x))['reduce']((a, b) => a + b, 0x0);
            score += P[j][p_index];
        }
        if (SvmXpX['qDKqe'](score, result)) {
            result = score;
        }
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));