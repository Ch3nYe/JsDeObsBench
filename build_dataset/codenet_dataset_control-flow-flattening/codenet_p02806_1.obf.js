function Main(input) {
    var RfNLKv = {
        'dQInI': '0|1|2|5|3|4',
        'XCLzG': function (x, y) {
            return x - y;
        },
        'XUFsH': function (x, y) {
            return x - y;
        },
        'YlHfv': function (x, y) {
            return x + y;
        },
        'NoPGQ': function (x, y) {
            return x < y;
        },
        'IIOyP': function (callee, param1) {
            return callee(param1);
        }
    };
    var elvvOg = RfNLKv['dQInI']['split']('|');
    var wVOwtS = 0x0;
    while (!![]) {
        switch (elvvOg[wVOwtS++]) {
        case '0':
            var lines = input['split']('\x0a');
            continue;
        case '1':
            var titles = lines['map'](l => l['split']('\x20')[0x0])['splice'](0x1, RfNLKv['XCLzG'](lines['length'], 0x2));
            continue;
        case '2':
            var sleptAt = titles['indexOf'](lines[RfNLKv['XUFsH'](lines['length'], 0x1)]);
            continue;
        case '3':
            for (var i = RfNLKv['YlHfv'](sleptAt, 0x2); RfNLKv['NoPGQ'](i, RfNLKv['XUFsH'](lines['length'], 0x1)); i++) {
                sum += RfNLKv['IIOyP'](Number, lines[i]['split']('\x20')[0x1]);
            }
            continue;
        case '4':
            console['log'](sum);
            continue;
        case '5':
            var sum = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));