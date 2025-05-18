'use strict';
function main(stdin) {
    const CQrXOO = {
        'fMUtV': function (x, y) {
            return x - y;
        }
    };
    const input = stdin['split']('\x0a');
    const N = input['shift']()['split']('\x20')['map'](v => parseInt(v, 0xa))[0x0];
    const gates = input['map'](g => g['split']('\x20')['map'](v => parseInt(v, 0xa)));
    const cards = new Array(N)['fill'](!![]);
    gates['forEach'](g => {
        for (let i = 0x0; i < CQrXOO['fMUtV'](g[0x0], 0x1); ++i) {
            cards[i] = ![];
        }
        for (let i = g[0x1]; i < N; ++i) {
            cards[i] = ![];
        }
    });
    console['log'](cards['filter'](c => c)['length']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));