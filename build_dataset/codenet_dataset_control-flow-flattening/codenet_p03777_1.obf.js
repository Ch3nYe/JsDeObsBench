function Main(input) {
    var dTOmRW = {
        'FumME': function (callee, param1) {
            return callee(param1);
        },
        'uolKI': function (x, y) {
            return x === y;
        }
    };
    input = input['split']('\x20');
    var a = String(input[0x0]);
    var b = dTOmRW['FumME'](String, input[0x1]);
    if (a === 'H' && b === 'H' || dTOmRW['uolKI'](a, 'D') && b === 'D') {
        console['log']('H');
    } else {
        console['log']('D');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));