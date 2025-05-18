function Main(input) {
    var UfmZsH = {
        'GmfHV': function (x, y) {
            return x - y;
        },
        'dCJeX': function (x, y) {
            return x ** y;
        },
        'bIcCD': function (x, y) {
            return x * y;
        },
        'maMhb': function (x, y) {
            return x / y;
        },
        'psXgu': function (x, y) {
            return x / y;
        }
    };
    input = input['split']('\x0a');
    var X = UfmZsH['GmfHV'](input[0x0], 0x0);
    console['log'](Math['ceil'](UfmZsH['dCJeX'](UfmZsH['bIcCD'](0x2, Math['abs'](X)) + UfmZsH['maMhb'](0x1, 0x4), UfmZsH['psXgu'](0x1, 0x2)) - 0x1 / 0x2));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));