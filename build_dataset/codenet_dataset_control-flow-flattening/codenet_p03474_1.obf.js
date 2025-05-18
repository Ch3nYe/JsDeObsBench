function Main(input) {
    var bOxNPT = {
        'WPKlW': '4|5|0|6|2|3|1',
        'xEBAl': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'SsSWN': function (x, y) {
            return x == y;
        },
        'mVMcD': 'Yes'
    };
    var uTznrJ = bOxNPT['WPKlW']['split']('|');
    var GLCenA = 0x0;
    while (!![]) {
        switch (uTznrJ[GLCenA++]) {
        case '0':
            var b = bOxNPT['xEBAl'](parseInt, input[0x0]['split']('\x20')[0x1], 0xa);
            continue;
        case '1':
            console['log'](bOxNPT['SsSWN'](f, null) ? 'No' : bOxNPT['mVMcD']);
            continue;
        case '2':
            var regex = new RegExp('^[0-9]{' + a + '}-[0-9]{' + b + '}$', 'g');
            continue;
        case '3':
            var f = s['match'](regex);
            continue;
        case '4':
            input = input['split']('\x0a');
            continue;
        case '5':
            var a = bOxNPT['xEBAl'](parseInt, input[0x0]['split']('\x20')[0x0], 0xa);
            continue;
        case '6':
            var s = input[0x1];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));