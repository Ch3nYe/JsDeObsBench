var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var qdObVt = {
        'WmYui': '1|3|0|2|5|4',
        'kyvxk': function (callee, param1) {
            return callee(param1);
        }
    };
    var DzzVHT = qdObVt['WmYui']['split']('|');
    var sqbIRg = 0x0;
    while (!![]) {
        switch (DzzVHT[sqbIRg++]) {
        case '0':
            lines['shift']();
            continue;
        case '1':
            var NlFCfK = {
                'VgkzN': function (x, y) {
                    return x === y;
                }
            };
            continue;
        case '2':
            var D = lines['map'](i => Number(i));
            continue;
        case '3':
            var N = qdObVt['kyvxk'](Number, lines[0x0]);
            continue;
        case '4':
            console['log'](D['length']);
            continue;
        case '5':
            D = D['filter']((value, index, array) => {
                return NlFCfK['VgkzN'](array['indexOf'](value), index);
            });
            continue;
        }
        break;
    }
});