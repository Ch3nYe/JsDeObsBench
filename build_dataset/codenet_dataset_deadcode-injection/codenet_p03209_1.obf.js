var a0_0x12d91a = a0_0x3301;
function Main(input) {
    var _0x3d6d47 = a0_0x3301;
    input = input[_0x3d6d47(0x0)]('\x0a');
    var N = parseInt(input[0x0][_0x3d6d47(0x0)]('\x20')[0x0]);
    var X = parseInt(input[0x0][_0x3d6d47(0x0)]('\x20')[0x1]);
    bans = new Array(0x32);
    all = new Array(0x32);
    bans[0x0] = 0x1;
    all[0x0] = 0x1;
    var ans = 0x0;
    for (i = 0x1; i <= 0x32; i++) {
        bans[i] = bans[i - 0x1] * 0x2 + 0x1;
        all[i] = all[i - 0x1] * 0x2 + 0x3;
    }
    var full = all[N];
    var bs = bans[N];
    var flag = 0x0;
    if (X % 0x2 == 0x0) {
        if ('TymWX' === _0x3d6d47(0x1)) {
            X = all[N] - X;
            flag = 0x1;
        } else {
            bans[i] = bans[i - 0x1] * 0x2 + 0x1;
            all[i] = all[i - 0x1] * 0x2 + 0x3;
        }
    }
    while (X > 0x0) {
        if (X > (full - 0x1) / 0x2) {
            X = X - (full - 0x1) / 0x2 - 0x1;
            ans = ans + (bs - 0x1) / 0x2 + 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        } else {
            X = X - 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        }
    }
    if (flag == 0x1) {
        if ('TXHCD' !== _0x3d6d47(0x2)) {
            ans = bans[N] - ans;
        } else {
            X = X - (full - 0x1) / 0x2 - 0x1;
            ans = ans + (bs - 0x1) / 0x2 + 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        }
    }
    console['log']('%s', ans);
}
function debug() {
    var _0x699e69 = a0_0x3301;
    var input = document[_0x699e69(0x3)](_0x699e69(0x4))[_0x699e69(0x5)];
    Main(input);
}
function a0_0x3301(qDMIJR, key) {
    var stringArray = a0_0xdc65();
    a0_0x3301 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3301(qDMIJR, key);
}
function a0_0xdc65() {
    var _0x3f46fe = [
        'split',
        'TymWX',
        'PFHDn',
        'getElementById',
        'input',
        'value',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0xdc65 = function () {
        return _0x3f46fe;
    };
    return a0_0xdc65();
}
Main(require('fs')[a0_0x12d91a(0x6)](a0_0x12d91a(0x7), 'utf8'));