function Main(input) {
    var AFXCRd = {
        'QlUrq': function (x, y) {
            return x <= y;
        }
    };
    input = input['trim']();
    var tate = parseInt(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    for (var i = 0x1; AFXCRd['QlUrq'](i, tate); i++) {
        console['log'](input['split']('\x0a')[i]);
        console['log'](input['split']('\x0a')[i]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));