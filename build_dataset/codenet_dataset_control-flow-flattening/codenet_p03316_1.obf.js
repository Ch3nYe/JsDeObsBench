function main(input) {
    var tJgmSa = {
        'KIaDd': function (x, y) {
            return x < y;
        },
        'RJEZc': function (callee, param1) {
            return callee(param1);
        },
        'dRJge': function (x, y) {
            return x == y;
        },
        'PJoXE': function (x, y) {
            return x % y;
        }
    };
    var inputA = input['toString']()['split']('');
    var sum = 0x0;
    for (var i = 0x0; tJgmSa['KIaDd'](i, inputA['length']); i++) {
        sum += tJgmSa['RJEZc'](parseInt, inputA[i]);
    }
    if (tJgmSa['dRJge'](tJgmSa['PJoXE'](tJgmSa['RJEZc'](parseInt, input), sum), 0x0)) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));