function Main(input) {
    var gIGCMm = {
        'cXdaP': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'wneyE': function (x, y) {
            return x == y;
        },
        'NmjAd': function (x, y) {
            return x == y;
        },
        'XFsLd': function (x, y) {
            return x == y;
        },
        'IJqPp': function (x, y) {
            return x == y;
        }
    };
    inputList = input['split']('\x0a');
    inputNum = gIGCMm['cXdaP'](parseInt, inputList[0x0], 0xa);
    firstList = inputList[0x1]['split']('');
    secondList = inputList[0x2]['split']('');
    thirdList = inputList[0x3]['split']('');
    count = 0x0;
    for (var i = 0x0; i < inputNum; i++) {
        if (gIGCMm['wneyE'](firstList[i], secondList[i]) && gIGCMm['NmjAd'](secondList[i], thirdList[i])) {
            continue;
        }
        if (gIGCMm['XFsLd'](firstList[i], secondList[i]) || secondList[i] == thirdList[i] || gIGCMm['IJqPp'](thirdList[i], firstList[i])) {
            count++;
            continue;
        }
        count++;
        count++;
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));