var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (v) {
    var xEyNJo = {
        'fsHWF': '0|3|4|2|1|5',
        'LIWYL': function (x, y) {
            return x > y;
        },
        'KuEHg': function (x, y) {
            return x > y;
        },
        'JaDzz': 'AAA',
        'pWudv': function (x, y) {
            return x > y;
        },
        'jGckT': function (x, y) {
            return x > y;
        },
        'uprUC': function (x, y) {
            return x > y;
        }
    };
    var zoxWvT = xEyNJo['fsHWF']['split']('|');
    var QZlfWM = 0x0;
    while (!![]) {
        switch (zoxWvT[QZlfWM++]) {
        case '0':
            var arr = v['split']('\x20')['map'](Number);
            continue;
        case '1':
            if (xEyNJo['LIWYL'](35.5, a) && xEyNJo['KuEHg'](0x47, b))
                ans = xEyNJo['JaDzz'];
            else if (37.5 > a && xEyNJo['LIWYL'](0x4d, b))
                ans = 'AA';
            else if (xEyNJo['KuEHg'](0x28, a) && xEyNJo['KuEHg'](0x53, b))
                ans = 'A';
            else if (0x2b > a && 0x59 > b)
                ans = 'B';
            else if (xEyNJo['pWudv'](0x32, a) && xEyNJo['jGckT'](0x69, b))
                ans = 'C';
            else if (xEyNJo['pWudv'](0x37, a) && xEyNJo['uprUC'](0x74, b))
                ans = 'D';
            else if (0x46 > a && 0x94 > b)
                ans = 'E';
            else
                ans = 'NA';
            continue;
        case '2':
            var ans;
            continue;
        case '3':
            var a = arr[0x0];
            continue;
        case '4':
            var b = arr[0x1];
            continue;
        case '5':
            console['log'](ans);
            continue;
        }
        break;
    }
});