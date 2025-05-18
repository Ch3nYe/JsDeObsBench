function Main(input) {
    var pptffP = {
        'ZabEh': function (callee, param1) {
            return callee(param1);
        },
        'klWAf': function (x, y) {
            return x == y;
        },
        'sSDjM': 'Yes'
    };
    var tmp = pptffP['ZabEh'](String, input);
    var truecount = 0x0;
    if (pptffP['klWAf'](tmp[0x2], tmp[0x0])) {
        console['log'](pptffP['sSDjM']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));