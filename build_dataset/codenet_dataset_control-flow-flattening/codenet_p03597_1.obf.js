function Main(input) {
    var qGfzAe = {
        'jTOZc': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a')['map'](n => parseInt(n, 0xa));
    console['log'](qGfzAe['jTOZc'](Math['pow'](input[0x0], 0x2), input[0x1]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));