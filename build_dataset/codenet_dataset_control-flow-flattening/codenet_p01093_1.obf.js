const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['trim']()['split']('\x0a');
while (line = lines['shift']()) {
    const numbers = line['split']('\x20')['map'](Number);
    if (numbers['length'] > 0x1) {
        const diffList = [];
        numbers['map']((num1, ind1) => {
            const aOBuBq = {
                'BNZlE': function (x, y) {
                    return x !== y;
                },
                'OYuHP': function (x, y) {
                    return x - y;
                }
            };
            numbers['map']((num2, ind2) => {
                if (aOBuBq['BNZlE'](ind1, ind2)) {
                    const diff = Math['abs'](aOBuBq['OYuHP'](num1, num2));
                    const pair = num1 + '\x20' + num2;
                    diffList['push']([
                        pair,
                        diff
                    ]);
                }
            });
        });
        const sorted = diffList['sort']((p1, p2) => p1[0x1] - p2[0x1])[0x0];
        console['log'](sorted[0x1]);
    }
}