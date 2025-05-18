function Main(input) {
    const YVzsgw = {
        'MEBsW': function (x, y) {
            return x % y;
        },
        'jzOxV': function (x, y) {
            return x - y;
        }
    };
    const hyaku = YVzsgw['MEBsW'](Number(input), 0x3e8);
    console['log'](hyaku === 0x0 ? 0x0 : YVzsgw['jzOxV'](0x3e8, hyaku));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));