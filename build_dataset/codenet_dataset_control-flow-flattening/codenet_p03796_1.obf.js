process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(input) {
    var HnKnhn = {
        'TrneL': '4|3|1|0|2',
        'XhaLI': function (callee, param1) {
            return callee(param1);
        }
    };
    var UeuFfB = HnKnhn['TrneL']['split']('|');
    var eucpUr = 0x0;
    while (!![]) {
        switch (UeuFfB[eucpUr++]) {
        case '0':
            for (var i = 0x1; i <= N; i++) {
                pow *= i;
                pow %= 0x3b9aca07;
            }
            continue;
        case '1':
            var pow = 0x1;
            continue;
        case '2':
            console['log'](pow);
            continue;
        case '3':
            var N = HnKnhn['XhaLI'](Number, tmp[0x0]);
            continue;
        case '4':
            var tmp = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));