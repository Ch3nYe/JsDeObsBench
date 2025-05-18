function Main(input) {
    var dHddGi = {
        'SdRlI': function (x, y) {
            return x / y;
        },
        'cDWzF': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ZHHWo': 'Yes'
    };
    input = input['split']('\x20');
    input = input['map'](Number);
    children = 0x2;
    var sub = function (arry, num) {
        var sum = 0x0;
        arry['forEach'](element => {
            sum += element;
        });
        return arry['includes'](dHddGi['SdRlI'](sum, num));
    };
    if (dHddGi['cDWzF'](sub, input, children)) {
        console['log'](dHddGi['ZHHWo']);
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));