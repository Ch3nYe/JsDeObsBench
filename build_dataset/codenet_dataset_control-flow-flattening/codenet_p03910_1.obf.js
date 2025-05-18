function myout(text) {
    console['log'](text);
}
function Main(input) {
    var MwItwg = {
        'NLPtD': function (callee, param1) {
            return callee(param1);
        },
        'qkQKn': function (x, y) {
            return x <= y;
        },
        'eaNYO': function (x, y) {
            return x == y;
        },
        'iZmIe': function (x, y) {
            return x > y;
        },
        'ismTy': function (x, y) {
            return x - y;
        }
    };
    input = MwItwg['NLPtD'](parseInt, input);
    var list = [];
    var output = 0x0;
    for (var i = 0x1; MwItwg['qkQKn'](i, input); i++) {
        output += i;
        list['push'](i);
        if (MwItwg['eaNYO'](output, input)) {
            MwItwg['NLPtD'](myout, list['join']('\x0a'));
            return;
        } else if (MwItwg['iZmIe'](output, input)) {
            var diff = MwItwg['ismTy'](output, input);
            list['splice'](list['indexOf'](diff), 0x1);
            myout(list['join']('\x0a'));
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());