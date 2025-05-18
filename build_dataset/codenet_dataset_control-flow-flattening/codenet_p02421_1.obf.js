var input = '';
var readable = process['stdin'];
readable['resume']();
readable['setEncoding']('utf-8');
readable['on']('data', function (chunk) {
    input += chunk;
});
readable['on']('end', function () {
    var hlsqZP = {
        'HpAgq': '4|0|3|2|5|1',
        'ZZiAp': function (x, y) {
            return x + y;
        },
        'OJSZI': function (x, y) {
            return x < y;
        }
    };
    var TqTRWg = hlsqZP['HpAgq']['split']('|');
    var PUIJxN = 0x0;
    while (!![]) {
        switch (TqTRWg[PUIJxN++]) {
        case '0':
            var n = data[0x0];
            continue;
        case '1':
            console['log'](hlsqZP['ZZiAp'](tscore + '\x20', hscore));
            continue;
        case '2':
            var hscore = 0x0;
            continue;
        case '3':
            var tscore = 0x0;
            continue;
        case '4':
            var data = input['split']('\x0a');
            continue;
        case '5':
            for (var i = 0x1; hlsqZP['OJSZI'](i, data['length']); i++) {
                var taha = data[i]['split']('\x20');
                if (hlsqZP['OJSZI'](taha[0x0], taha[0x1])) {
                    hscore += 0x3;
                } else if (hlsqZP['OJSZI'](taha[0x1], taha[0x0])) {
                    tscore += 0x3;
                } else {
                    hscore += 0x1;
                    tscore += 0x1;
                }
            }
            continue;
        }
        break;
    }
});