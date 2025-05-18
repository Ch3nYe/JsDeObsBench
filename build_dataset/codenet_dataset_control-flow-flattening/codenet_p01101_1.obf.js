const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['trim']()['split']('\x0a');
while (line = lines['shift']()) {
    const [n, max] = line['split']('\x20')['map'](Number);
    if (n === 0x0 && max === 0x0) {
        break;
    }
    const prices = lines['shift']()['split']('\x20')['map'](Number);
    const allSum = [];
    prices['map']((priceA, indexA) => {
        const KJNYFb = {
            'uzzIV': function (x, y) {
                return x !== y;
            },
            'gZwGO': function (x, y) {
                return x <= y;
            }
        };
        prices['map']((priceB, indexB) => {
            if (KJNYFb['uzzIV'](indexA, indexB)) {
                const sum = priceA + priceB;
                if (KJNYFb['gZwGO'](sum, max)) {
                    allSum['push'](sum);
                }
            }
        });
    });
    const answer = allSum['sort']((a, b) => b - a)[0x0];
    if (answer) {
        console['log'](answer);
        continue;
    }
    console['log']('NONE');
}