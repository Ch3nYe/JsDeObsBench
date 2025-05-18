function main(input) {
    var llkFVO = {
        'HcYgr': function (x, y) {
            return x == y;
        },
        'ksXPr': function (callee, param1) {
            return callee(param1);
        },
        'yegJk': function (x, y) {
            return x / y;
        },
        'fJshe': function (x, y) {
            return x + y;
        },
        'rRhZc': function (x, y) {
            return x / y;
        }
    };
    var Gusu = 0x0;
    var Kisu = 0x0;
    var Out = 0x0;
    if (input > 0x0) {
        if (llkFVO['HcYgr'](input % 0x2, 0x0)) {
            Gusu = input / 0x2;
            Kisu = Gusu;
            Out = Kisu / input;
        } else if (llkFVO['HcYgr'](input % 0x2, 0x1)) {
            Gusu = llkFVO['ksXPr'](parseInt, llkFVO['yegJk'](input, 0x2));
            Kisu = llkFVO['fJshe'](Gusu, 0x1);
            Out = llkFVO['rRhZc'](Kisu, input);
        }
    }
    console['log'](Out['toFixed'](0xa));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));