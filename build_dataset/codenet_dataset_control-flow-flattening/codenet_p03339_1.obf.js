function main(input) {
    var sLFASx = {
        'sltjf': function (callee, param1) {
            return callee(param1);
        },
        'zMWIy': function (x, y) {
            return x < y;
        },
        'LdLvR': function (x, y) {
            return x == y;
        },
        'ZCOje': function (x, y) {
            return x == y;
        },
        'xlMxy': function (x, y) {
            return x - y;
        }
    };
    const lines = input['split']('\x0a');
    const N = sLFASx['sltjf'](parseInt, lines[0x0]);
    const S = lines[0x1]['split']('');
    var result = Math['pow'](0xa, 0x8);
    var current_count = 0x0;
    for (var i = 0x0; sLFASx['zMWIy'](i, N); i++) {
        if (sLFASx['LdLvR'](S[i], 'E')) {
            current_count++;
        }
    }
    result = current_count;
    for (var i = 0x1; sLFASx['zMWIy'](i, N); i++) {
        if (S[i] == 'E') {
            current_count--;
        }
        if (sLFASx['ZCOje'](S[sLFASx['xlMxy'](i, 0x1)], 'W')) {
            current_count++;
        }
        result = Math['min'](result, current_count);
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));