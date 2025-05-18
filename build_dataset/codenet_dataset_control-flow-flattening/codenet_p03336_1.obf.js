function Main(input) {
    const nsrLcO = {
        'igTnz': function (callee, param1) {
            return callee(param1);
        },
        'nQkCX': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'tPzGt': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'hlhFQ': function (x, y) {
            return x < y;
        },
        'erLPZ': function (x, y) {
            return x & y;
        },
        'MIZkS': function (x, y) {
            return x + y;
        },
        'bryoR': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['split']('\x0a');
    const row1 = input[0x0]['split']('\x20');
    const N = nsrLcO['igTnz'](parseInt, row1[0x0]);
    const M = parseInt(row1[0x1]);
    const K = nsrLcO['igTnz'](parseInt, row1[0x2]);
    var S = nsrLcO['nQkCX'](parseInt, input[0x1], 0x2);
    var T = nsrLcO['tPzGt'](parseInt, input[0x2], 0x2);
    for (var i = 0x0; nsrLcO['hlhFQ'](i, K); i++) {
        var sANDt = nsrLcO['erLPZ'](S, T);
        S = nsrLcO['MIZkS'](S, sANDt);
        T = T + sANDt;
    }
    const sBinary = nsrLcO['igTnz'](toBinary, S);
    const tBinary = nsrLcO['bryoR'](toBinary, T);
    console['log'](sBinary);
    console['log'](tBinary);
}
function toBinary(a) {
    const lPIdNa = {
        'yoDUI': function (x, y) {
            return x > y;
        },
        'DQLwD': function (x, y) {
            return x + y;
        },
        'SBXXc': function (x, y) {
            return x % y;
        },
        'RoNCO': function (x, y) {
            return x / y;
        }
    };
    var num = a, binary = '';
    while (lPIdNa['yoDUI'](num, 0x0)) {
        binary = lPIdNa['DQLwD'](lPIdNa['SBXXc'](num, 0x2), binary);
        num = Math['floor'](lPIdNa['RoNCO'](num, 0x2));
    }
    return binary;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));