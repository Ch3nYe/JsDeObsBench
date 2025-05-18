const main = input => {
    const ROYCEx = {
        'tMFCw': function (x, y) {
            return x < y;
        },
        'xzRgL': function (x, y) {
            return x < y;
        },
        'yPVTp': function (x, y) {
            return x < y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const [n, k] = input[0x0]['split']('\x20')['map'](Number);
    const directions = input[0x1]['split']('\x20')['map'](v => Number(v) - 0x1);
    const scoreList = input[0x2]['split']('\x20')['map'](Number);
    const ans = [new Array(n)['fill'](0x0)];
    for (let i = 0x0; ROYCEx['tMFCw'](i, k); i++)
        ans['push']([]);
    for (let i = 0x0; ROYCEx['xzRgL'](i, k); i++) {
        for (let x = 0x0; ROYCEx['tMFCw'](x, n); x++) {
            const score = ans[i][x];
            ans[i + 0x1][directions[x]] = score + scoreList[directions[x]];
        }
    }
    let max = -Infinity;
    for (let i = 0x1; ROYCEx['yPVTp'](i, ans['length']); i++)
        max = Math['max'](max, Math['max'](...ans[i]));
    return console['log'](max);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));