function Main(input) {
    const rZRLgj = {
        'MZhvC': function (x, y) {
            return x === y;
        },
        'gyqZC': function (x, y) {
            return x === y;
        },
        'pnYTt': function (x, y) {
            return x === y;
        },
        'huALJ': function (x, y) {
            return x === y;
        }
    };
    const chars = input['trim']()['split']('\x20');
    const x = Math['floor'](chars[0x0]);
    const y = Math['floor'](chars[0x1]);
    let ans = 0x0;
    if (rZRLgj['MZhvC'](x, 0x1) && rZRLgj['MZhvC'](y, 0x1)) {
        ans += 0x61a80;
    }
    if (rZRLgj['MZhvC'](x, 0x1))
        ans += 0x493e0;
    if (rZRLgj['MZhvC'](y, 0x1))
        ans += 0x493e0;
    if (rZRLgj['gyqZC'](x, 0x2))
        ans += 0x30d40;
    if (rZRLgj['pnYTt'](y, 0x2))
        ans += 0x30d40;
    if (rZRLgj['MZhvC'](x, 0x3))
        ans += 0x186a0;
    if (rZRLgj['huALJ'](y, 0x3))
        ans += 0x186a0;
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));