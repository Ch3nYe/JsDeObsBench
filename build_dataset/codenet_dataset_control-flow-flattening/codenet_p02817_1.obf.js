function Main(input) {
    var WDoXNj = {
        'TiOCU': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    st = input[0x0]['split']('\x20');
    console['log'](WDoXNj['TiOCU'](st[0x1], st[0x0]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));