function Main(input) {
    var VmVtGK = {
        'IiKkU': '1|2|4|3|0',
        'HXQpt': function (x, y) {
            return x < y;
        },
        'uhqVC': function (x, y) {
            return x + y;
        }
    };
    var CnLKVN = VmVtGK['IiKkU']['split']('|');
    var qQIKOl = 0x0;
    while (!![]) {
        switch (CnLKVN[qQIKOl++]) {
        case '0':
            console['log'](ans);
            continue;
        case '1':
            var max = 0x0;
            continue;
        case '2':
            var ans = 0x0;
            continue;
        case '3':
            for (var i = 0x1; VmVtGK['HXQpt'](i, input['length']); i++) {
                var mem = input[i]['split']('\x20')['map'](Number);
                if (VmVtGK['HXQpt'](max, mem[0x0])) {
                    max = mem[0x0];
                    ans = VmVtGK['uhqVC'](mem[0x0], mem[0x1]);
                }
            }
            continue;
        case '4':
            input = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());