function Main(input) {
    var IgXIta = {
        'pCEbL': function (x, y) {
            return x + y;
        },
        'MJzSe': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x20');
    tmp = input[0x1][0x0];
    console['log'](IgXIta['pCEbL'](IgXIta['MJzSe']('A', tmp), 'C'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));