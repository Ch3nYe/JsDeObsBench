const a0_0x529027 = a0_0x330a;
function main(arg) {
    const _0x41f52f = a0_0x330a;
    let n = Number(arg[_0x41f52f(0x0)]('\x0a')[0x0]);
    let a = arg[_0x41f52f(0x0)]('\x0a')[0x1][_0x41f52f(0x0)]('\x20')[_0x41f52f(0x1)](Number);
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
function a0_0x330a(gpClUE, key) {
    const stringArray = a0_0x2769();
    a0_0x330a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x330a(gpClUE, key);
}
main(require('fs')['readFileSync'](a0_0x529027(0x2), a0_0x529027(0x3)));
function a0_0x2769() {
    const _0x889e8 = [
        'split',
        'map',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2769 = function () {
        return _0x889e8;
    };
    return a0_0x2769();
}