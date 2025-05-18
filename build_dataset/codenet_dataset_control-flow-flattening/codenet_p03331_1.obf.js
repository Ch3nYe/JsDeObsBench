function main(input) {
    var avmFTU = {
        'HkEjz': '4|6|2|0|3|5|1|7',
        'dHOMr': function (x, y) {
            return x == y;
        }
    };
    var hxbkbC = avmFTU['HkEjz']['split']('|');
    var eQhrEJ = 0x0;
    while (!![]) {
        switch (hxbkbC[eQhrEJ++]) {
        case '0':
            var arr = [];
            continue;
        case '1':
            if (avmFTU['dHOMr'](answer, 0x1)) {
                answer = 0xa;
            }
            continue;
        case '2':
            var divisor = Math['pow'](0xa, digits - 0x1);
            continue;
        case '3':
            for (var i = 0x0; i < digits; i++) {
                arr['push'](Math['floor'](input / divisor));
                input = input % divisor;
                divisor /= 0xa;
            }
            continue;
        case '4':
            var digits = input['toString']()['length'];
            continue;
        case '5':
            var answer = arr['reduce']((a, b) => a + b);
            continue;
        case '6':
            var input = parseInt(input, 0xa);
            continue;
        case '7':
            console['log'](answer);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));