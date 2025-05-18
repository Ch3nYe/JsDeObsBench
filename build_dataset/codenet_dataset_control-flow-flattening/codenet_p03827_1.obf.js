function Main(input) {
    var HkkvCQ = {
        'WGaPJ': function (x, y) {
            return x < y;
        }
    };
    var rIHyOP = '5|0|6|1|2|4|3'['split']('|');
    var YBfmcN = 0x0;
    while (!![]) {
        switch (rIHyOP[YBfmcN++]) {
        case '0':
            var num = input[0x0];
            continue;
        case '1':
            var max = 0x0;
            continue;
        case '2':
            var x = 0x0;
            continue;
        case '3':
            console['log'](max);
            continue;
        case '4':
            for (var i = 0x0; HkkvCQ['WGaPJ'](i, character['length']); i++) {
                if (character[i] === 'I') {
                    x++;
                } else {
                    x--;
                }
                if (HkkvCQ['WGaPJ'](max, x)) {
                    max = x;
                }
            }
            continue;
        case '5':
            input = input['split']('\x0a');
            continue;
        case '6':
            var character = input[0x1];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));