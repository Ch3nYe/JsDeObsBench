function Main(input) {
    var vegnrg = {
        'rBkdT': '2|5|1|4|0|3',
        'iGVGd': function (x, y) {
            return x * y;
        },
        'JMoVs': function (x, y) {
            return x - y;
        },
        'FKeEF': function (x, y) {
            return x | y;
        },
        'nYOCn': function (x, y) {
            return x > y;
        },
        'PCKlA': function (x, y) {
            return x / y;
        }
    };
    var WEmoNK = vegnrg['rBkdT']['split']('|');
    var AxsPvA = 0x0;
    while (!![]) {
        switch (WEmoNK[AxsPvA++]) {
        case '0':
            if (a === !![]) {
                ans = -0x1;
            } else {
                while (!![]) {
                    num++;
                    cal = vegnrg['iGVGd'](input[0x0], num) / input[0x1];
                    var b = Number['isInteger'](cal);
                    if (b === !![]) {
                        ans = vegnrg['iGVGd'](input[0x0], vegnrg['JMoVs'](num, 0x1));
                        break;
                    }
                    if (vegnrg['FKeEF'](vegnrg['FKeEF'](vegnrg['nYOCn'](input[0x0], Math['pow'](0xa, 0x9)), vegnrg['nYOCn'](input[0x1], Math['pow'](0xa, 0x9))), vegnrg['nYOCn'](input[0x0] * vegnrg['JMoVs'](num, 0x1), Math['pow'](0xa, 0x12)))) {
                        ans = -0x1;
                        break;
                    }
                }
            }
            continue;
        case '1':
            num = 0x0;
            continue;
        case '2':
            input = input['split']('\x20');
            continue;
        case '3':
            console['log'](ans);
            continue;
        case '4':
            var a = Number['isInteger'](ans);
            continue;
        case '5':
            ans = vegnrg['PCKlA'](input[0x0], input[0x1]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));