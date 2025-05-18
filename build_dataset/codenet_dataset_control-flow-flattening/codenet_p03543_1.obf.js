function Main(input) {
    var hyVpLj = {
        'WDQWS': function (x, y) {
            return x == y;
        }
    };
    input = input['split']('\x0a');
    var n = input[0x0];
    var s = 'No';
    if (n[0x1] == n[0x2]) {
        if (n[0x0] == n[0x1] || hyVpLj['WDQWS'](n[0x2], n[0x3]))
            s = 'Yes';
    }
    console['log']('%s', s);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));