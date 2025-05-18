function Main(input) {
    const FjaSeL = {
        'xgiuR': function (callee, param1) {
            return callee(param1);
        },
        'yJIHM': function (callee, param1) {
            return callee(param1);
        },
        'jfXPS': function (x, y) {
            return x - y;
        },
        'GTiSo': function (x, y) {
            return x <= y;
        },
        'QKUIw': function (x, y) {
            return x == y;
        },
        'THUnl': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    let target = FjaSeL['xgiuR'](parseInt, input[0x0]['split']('\x20')[0x0]);
    let zerocheck = FjaSeL['yJIHM'](parseInt, input[0x0]['split']('\x20')[0x1]);
    if (zerocheck == 0x0) {
        console['log'](target);
    } else {
        let str = input[0x1]['split']('\x20');
        for (let i = 0x0; i < str['length']; i++) {
            let num = parseInt(str[i]);
            str[i] = FjaSeL['jfXPS'](target, num);
        }
        for (let ite = 0x1; FjaSeL['GTiSo'](ite, 0x64); ite++) {
            const isp = str['indexOf'](ite);
            const isn = str['indexOf'](-ite);
            if (FjaSeL['QKUIw'](isp, -0x1)) {
                console['log'](FjaSeL['jfXPS'](target, ite));
                break;
            }
            if (isn == -0x1) {
                console['log'](FjaSeL['THUnl'](target, ite));
                break;
            }
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));