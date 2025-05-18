function Main(input) {
    var GcgGle = {
        'viGTP': '3|1|4|0|2|5',
        'hkzpw': function (callee, param1) {
            return callee(param1);
        },
        'rykzu': function (x, y) {
            return x > y;
        },
        'mMWNZ': function (x, y) {
            return x / y;
        },
        'zFnJi': function (x, y) {
            return x / y;
        },
        'vBPqV': function (x, y) {
            return x * y;
        },
        'EWwoI': function (x, y) {
            return x / y;
        }
    };
    var WNtXUw = GcgGle['viGTP']['split']('|');
    var DlxdbZ = 0x0;
    while (!![]) {
        switch (WNtXUw[DlxdbZ++]) {
        case '0':
            var result = 0x0;
            continue;
        case '1':
            var sNum = GcgGle['hkzpw'](Number, inputArr[0x0]);
            continue;
        case '2':
            if (GcgGle['rykzu'](sNum, GcgGle['mMWNZ'](cNum, 0x2))) {
                result += Math['floor'](GcgGle['zFnJi'](cNum, 0x2));
            } else {
                result += sNum;
                cNum -= GcgGle['vBPqV'](result, 0x2);
                result += Math['floor'](GcgGle['EWwoI'](cNum, 0x4));
            }
            continue;
        case '3':
            var inputArr = input['split']('\x20');
            continue;
        case '4':
            var cNum = GcgGle['hkzpw'](Number, inputArr[0x1]);
            continue;
        case '5':
            console['log'](result);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));