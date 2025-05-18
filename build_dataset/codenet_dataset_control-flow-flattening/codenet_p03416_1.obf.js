function Main(input) {
    var qHbjJQ = {
        'wHZUb': function (x, y) {
            return x === y;
        },
        'xhAbg': function (x, y) {
            return x <= y;
        },
        'NObLY': function (callee) {
            return callee();
        }
    };
    var input = input['split']('\x20');
    var A = input[0x0];
    var B = input[0x1];
    var cnt = 0x0;
    function hoge() {
        var x = A['toString']();
        if (qHbjJQ['wHZUb'](x[0x0], x[0x4]) && x[0x1] === x[0x3]) {
            return !![];
        }
    }
    while (qHbjJQ['xhAbg'](A, B)) {
        if (qHbjJQ['NObLY'](hoge)) {
            cnt++;
        }
        A++;
    }
    console['log'](cnt);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));