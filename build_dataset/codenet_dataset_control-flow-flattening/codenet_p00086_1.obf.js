var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
while (lines['length'] > 0x0) {
    var kjGTqU = '3|1|2|4|0'['split']('|');
    var FEnvLt = 0x0;
    while (!![]) {
        switch (kjGTqU[FEnvLt++]) {
        case '0':
            if (path[0x1] % 0x2 == 0x1 && path[0x2] % 0x2 == 0x1 && odds['length'] > 0x2)
                console['log']('NG');
            else
                console['log']('OK');
            continue;
        case '1':
            var line;
            continue;
        case '2':
            while ((line = lines['shift']()) != '0\x200') {
                var nums = line['split']('\x20');
                var from = +nums[0x0];
                var to = +nums[0x1];
                path[from] = (path[from] || 0x0) + 0x1;
                path[to] = (path[to] || 0x0) + 0x1;
            }
            continue;
        case '3':
            var path = [];
            continue;
        case '4':
            var odds = path['filter'](function (n) {
                var bZgohF = {
                    'LSMej': function (x, y) {
                        return x == y;
                    },
                    'zpmlv': function (x, y) {
                        return x % y;
                    }
                };
                return bZgohF['LSMej'](bZgohF['zpmlv'](n, 0x2), 0x1);
            });
            continue;
        }
        break;
    }
}