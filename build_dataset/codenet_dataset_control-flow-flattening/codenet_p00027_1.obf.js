(function (input) {
    var USyZlz = {
        'jNdtE': function (x, y) {
            return x - y;
        },
        'UtXmf': function (x, y) {
            return x === y;
        }
    };
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    while (!![]) {
        var ewFrwO = '5|1|0|4|2|3'['split']('|');
        var hbIkqr = 0x0;
        while (!![]) {
            switch (ewFrwO[hbIkqr++]) {
            case '0':
                var d = a['shift']();
                continue;
            case '1':
                var m = a['shift']();
                continue;
            case '2':
                var date = new Date(0x7d4, USyZlz['jNdtE'](m, 0x1), d);
                continue;
            case '3':
                console['log'](getWeekDay(date['getDay']()));
                continue;
            case '4':
                if (m === 0x0 && USyZlz['UtXmf'](d, 0x0)) {
                    return;
                }
                continue;
            case '5':
                var a = p['shift']()['split']('\x20')['map'](Number);
                continue;
            }
            break;
        }
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function getWeekDay(d) {
    var BOpYwL = {
        'rGyAa': 'Sunday',
        'nznkg': 'Monday',
        'aKLrU': 'Tuesday',
        'fgSQx': 'Wednesday',
        'khQkZ': 'Friday',
        'cvRtv': 'Saturday'
    };
    var week = [
        BOpYwL['rGyAa'],
        BOpYwL['nznkg'],
        BOpYwL['aKLrU'],
        BOpYwL['fgSQx'],
        'Thursday',
        BOpYwL['khQkZ'],
        BOpYwL['cvRtv']
    ];
    return week[d];
}