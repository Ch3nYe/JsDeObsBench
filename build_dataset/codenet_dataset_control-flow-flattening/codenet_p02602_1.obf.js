function Main(input) {
    var TOzLtM = {
        'FyyIm': function (callee, param1) {
            return callee(param1);
        },
        'bTTOa': function (x, y) {
            return x < y;
        },
        'Inper': function (x, y) {
            return x - y;
        },
        'KAlJe': function (x, y) {
            return x < y;
        },
        'cAOxP': function (callee, param1) {
            return callee(param1);
        }
    };
    var VQcucU = '0|1|2|5|4|3'['split']('|');
    var hcztbw = 0x0;
    while (!![]) {
        switch (VQcucU[hcztbw++]) {
        case '0':
            input = input['replace'](/\n/g, '\x20');
            continue;
        case '1':
            input = input['split']('\x20');
            continue;
        case '2':
            var A = TOzLtM['FyyIm'](Number, input[0x0]);
            continue;
        case '3':
            for (var i = 0x0; TOzLtM['bTTOa'](i, TOzLtM['Inper'](input['length'], B)); i++) {
                if (TOzLtM['KAlJe'](TOzLtM['FyyIm'](Number, input[i]), TOzLtM['cAOxP'](Number, input[i + B]))) {
                    console['log']('Yes');
                } else {
                    console['log']('No');
                }
            }
            continue;
        case '4':
            input = input['slice'](0x2);
            continue;
        case '5':
            var B = TOzLtM['cAOxP'](Number, input[0x1]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));