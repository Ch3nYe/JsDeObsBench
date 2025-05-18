main();
function main() {
    var JOcgBl = {
        'lHVpc': '5|4|0|2|3|1',
        'dzRWI': 'close',
        'WAPIb': 'line',
        'MtjwY': function (callee, param1) {
            return callee(param1);
        }
    };
    var QlozDZ = JOcgBl['lHVpc']['split']('|');
    var bwVgcF = 0x0;
    while (!![]) {
        switch (QlozDZ[bwVgcF++]) {
        case '0':
            var reader = readline['createInterface']({
                'input': process['stdin'],
                'output': process['stdout']
            });
            continue;
        case '1':
            reader['on'](JOcgBl['dzRWI'], function () {
                console['log'](NnCQrv['mPCfo'](countSequencePattern, lines[0x0]));
            });
            continue;
        case '2':
            var lines = [];
            continue;
        case '3':
            reader['on'](JOcgBl['WAPIb'], function (line) {
                lines['push'](line);
            });
            continue;
        case '4':
            var readline = require('readline');
            continue;
        case '5':
            var NnCQrv = {
                'mPCfo': function (callee, param1) {
                    return JOcgBl['MtjwY'](callee, param1);
                }
            };
            continue;
        }
        break;
    }
}
function countSequencePattern(str) {
    var kujmeE = {
        'ydXrj': function (x, y) {
            return x < y;
        },
        'ddKLq': function (x, y) {
            return x != y;
        }
    };
    var numberOfPattern = 0x1;
    var characters = str['split']('');
    for (var i = 0x0; kujmeE['ydXrj'](i, characters['length']); i++) {
        for (var j = i; j < characters['length']; j++) {
            if (kujmeE['ddKLq'](characters[i], characters[j]))
                numberOfPattern++;
        }
    }
    return numberOfPattern;
}