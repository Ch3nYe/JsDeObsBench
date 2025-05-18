(function (input) {
    var LCQcLS = {
        'YLLut': '0|2|4|3|1|5',
        'zxfLy': function (callee, param1) {
            return callee(param1);
        },
        'AXYlN': function (x, y) {
            return x > y;
        },
        'epJKV': function (x, y) {
            return x === y;
        },
        'koIxQ': function (x, y) {
            return x < y;
        },
        'Vkbml': function (x, y) {
            return x + y;
        }
    };
    var WEePsY = LCQcLS['YLLut']['split']('|');
    var zStnOG = 0x0;
    while (!![]) {
        switch (WEePsY[zStnOG++]) {
        case '0':
            var inputs = input['replace'](/\r/g, '')['split']('\x0a'), data = [], n, line, max_index, a, b;
            continue;
        case '1':
            while (n--) {
                line = inputs['shift']()['split']('\x20');
                a = parseInt(line[0x0]);
                b = LCQcLS['zxfLy'](parseInt, line[0x1]);
                if (LCQcLS['AXYlN'](b, max_value) || LCQcLS['epJKV'](b, max_value) && LCQcLS['koIxQ'](a, max_index)) {
                    max_index = a;
                    max_value = b;
                }
            }
            continue;
        case '2':
            n = LCQcLS['zxfLy'](parseInt, inputs['shift']());
            continue;
        case '3':
            max_value = -0x1;
            continue;
        case '4':
            max_index = 0x65;
            continue;
        case '5':
            console['log'](LCQcLS['Vkbml'](max_index, '\x20') + max_value);
            continue;
        }
        break;
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));