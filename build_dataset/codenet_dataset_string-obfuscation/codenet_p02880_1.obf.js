function a0_0x39e9(EDJbvO, key) {
    const stringArray = a0_0x268b();
    a0_0x39e9 = function (index, key) {
        index = index - 0x76;
        let value = stringArray[index];
        return value;
    };
    return a0_0x39e9(EDJbvO, key);
}
const a0_0x49fdf3 = a0_0x39e9;
function a0_0x268b() {
    const _0x356c22 = [
        '/dev/stdin',
        '2340443kCCwHk',
        '8pUJGQR',
        '208770SAQRjr',
        'log',
        'split',
        '307269pOxLyn',
        '6KMfVjC',
        '1257716LHaXwN',
        '2707hBeFhN',
        '535758yikvgX',
        '2787920psTLNd',
        '80ksKiGy',
        'utf8'
    ];
    a0_0x268b = function () {
        return _0x356c22;
    };
    return a0_0x268b();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x212033 = a0_0x39e9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x212033(0x7b)) / 0x1 * (parseInt(_0x212033(0x82)) / 0x2) + parseInt(_0x212033(0x7c)) / 0x3 + parseInt(_0x212033(0x7a)) / 0x4 + parseInt(_0x212033(0x83)) / 0x5 + -parseInt(_0x212033(0x79)) / 0x6 * (-parseInt(_0x212033(0x81)) / 0x7) + parseInt(_0x212033(0x7e)) / 0x8 * (-parseInt(_0x212033(0x78)) / 0x9) + -parseInt(_0x212033(0x7d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x268b, 0x3f6a0));
function Main(input) {
    const _0x2a045c = a0_0x39e9;
    input = input[_0x2a045c(0x77)]('\x20');
    const num = parseInt(input[0x0], 0xa);
    if (num > 0x51) {
        console[_0x2a045c(0x76)]('No');
        return;
    }
    if (num % 0x2 == 0x0 && num / 0x2 < 0xa || num % 0x3 == 0x0 && num / 0x3 < 0xa || num % 0x4 == 0x0 && num / 0x4 < 0xa || num % 0x5 == 0x0 && num / 0x5 < 0xa || num % 0x6 == 0x0 && num / 0x6 < 0xa || num % 0x7 == 0x0 && num / 0x7 < 0xa || num % 0x8 == 0x0 && num / 0x8 < 0xa || num % 0x9 == 0x0 && num / 0x9 < 0xa) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync'](a0_0x49fdf3(0x80), a0_0x49fdf3(0x7f)));