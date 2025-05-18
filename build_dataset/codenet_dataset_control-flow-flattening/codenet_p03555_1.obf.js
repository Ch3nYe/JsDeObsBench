function Main(input) {
    var YywBRe = {
        'BzHdB': '0|3|4|2|1',
        'yZWwd': function (x, y) {
            return x == y;
        },
        'DPYHd': 'YES'
    };
    var QMeCRL = YywBRe['BzHdB']['split']('|');
    var uBFePd = 0x0;
    while (!![]) {
        switch (QMeCRL[uBFePd++]) {
        case '0':
            input = input['trim']();
            continue;
        case '1':
            if (A[0x0] == B[0x2] && YywBRe['yZWwd'](A[0x1], B[0x1]) && YywBRe['yZWwd'](A[0x2], B[0x0]))
                console['log'](YywBRe['DPYHd']);
            else
                console['log']('NO');
            continue;
        case '2':
            var B = input[0x1]['split']('');
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            var A = input[0x0]['split']('');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));