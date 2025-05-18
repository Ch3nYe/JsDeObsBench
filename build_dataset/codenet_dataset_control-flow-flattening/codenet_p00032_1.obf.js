var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var line;
var rectangles = 0x0;
var lozenges = 0x0;
while (line = lines['shift']()) {
    var lImdex = '0|4|3|2|1'['split']('|');
    var qZhSfd = 0x0;
    while (!![]) {
        switch (lImdex[qZhSfd++]) {
        case '0':
            var l = line['split'](',')['map'](function (n) {
                return +n;
            });
            continue;
        case '1':
            if (a * a + b * b == c * c)
                rectangles++;
            else if (a == b)
                lozenges++;
            continue;
        case '2':
            var c = l[0x2];
            continue;
        case '3':
            var b = l[0x1];
            continue;
        case '4':
            var a = l[0x0];
            continue;
        }
        break;
    }
}
console['log'](rectangles);
console['log'](lozenges);