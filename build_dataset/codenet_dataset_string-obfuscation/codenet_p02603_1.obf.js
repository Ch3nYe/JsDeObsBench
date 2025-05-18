const a0_0x2e1389 = a0_0x2403;
(function (stringArrayFunction, comparisonValue) {
    const _0x18e26b = a0_0x2403;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x18e26b(0xc1)) / 0x1 + -parseInt(_0x18e26b(0xbf)) / 0x2 * (-parseInt(_0x18e26b(0xc2)) / 0x3) + parseInt(_0x18e26b(0xc3)) / 0x4 + parseInt(_0x18e26b(0xb9)) / 0x5 * (parseInt(_0x18e26b(0xbc)) / 0x6) + parseInt(_0x18e26b(0xbb)) / 0x7 + -parseInt(_0x18e26b(0xc4)) / 0x8 * (-parseInt(_0x18e26b(0xc0)) / 0x9) + -parseInt(_0x18e26b(0xba)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x13f3, 0x54dec));
function main(arg) {
    const _0x31a0ae = a0_0x2403;
    let n = Number(arg[_0x31a0ae(0xb8)]('\x0a')[0x0]);
    let a = arg[_0x31a0ae(0xb8)]('\x0a')[0x1]['split']('\x20')['map'](Number);
    let dp = [];
    for (let i = 0x0; i < n + 0x1; i++)
        dp[i] = 0x0;
    dp[0x0] = 0x3e8;
    let stock = 0x0;
    for (let i = 0x1; i < n + 0x1; i++) {
        if (i == n) {
            dp[i] = dp[i - 0x1] + stock * a[i - 0x1];
        } else if (a[i] > a[i - 0x1]) {
            let addStock = parseInt(dp[i - 0x1] / a[i - 0x1]);
            dp[i] = dp[i - 0x1] - addStock * a[i - 0x1];
            stock += addStock;
        } else {
            let rmStock = stock;
            dp[i] = dp[i - 0x1] + rmStock * a[i - 0x1];
            stock -= rmStock;
        }
    }
    console['log'](dp[n]);
}
main(require('fs')[a0_0x2e1389(0xbe)]('/dev/stdin', a0_0x2e1389(0xbd)));
function a0_0x2403(QQWGxF, key) {
    const stringArray = a0_0x13f3();
    a0_0x2403 = function (index, key) {
        index = index - 0xb8;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2403(QQWGxF, key);
}
function a0_0x13f3() {
    const _0xcc47e9 = [
        '582rqzOEW',
        '531RhtMNc',
        '130568xWxxRV',
        '1479bZIOFD',
        '2773760MruYyY',
        '40568xTAuOJ',
        'split',
        '123335DAogmi',
        '10636180hnLoEe',
        '839433yxVnDL',
        '6jPTQvM',
        'utf8',
        'readFileSync'
    ];
    a0_0x13f3 = function () {
        return _0xcc47e9;
    };
    return a0_0x13f3();
}