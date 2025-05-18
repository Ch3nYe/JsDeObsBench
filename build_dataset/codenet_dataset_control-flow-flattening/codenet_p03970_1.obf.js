function Main(input) {
    var eNDiyU = {
        'tlXcS': '0|4|3|2|1',
        'PPpuT': function (x, y) {
            return x != y;
        }
    };
    var qHYudj = eNDiyU['tlXcS']['split']('|');
    var YozfFz = 0x0;
    while (!![]) {
        switch (qHYudj[YozfFz++]) {
        case '0':
            input = input['trim']();
            continue;
        case '1':
            console['log'](output);
            continue;
        case '2':
            for (var i = 0x0; i < input['length']; i++) {
                var tmp1 = input['slice'](i, i + 0x1);
                var tmp2 = seijou['slice'](i, i + 0x1);
                if (eNDiyU['PPpuT'](tmp1, tmp2)) {
                    output++;
                }
            }
            continue;
        case '3':
            var seijou = 'CODEFESTIVAL2016';
            continue;
        case '4':
            var output = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));