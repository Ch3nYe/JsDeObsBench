function myout(text) {
    console['log'](text);
}
function Main(input) {
    var APmzBN = {
        'ieJIB': function (callee, param1) {
            return callee(param1);
        },
        'vugGW': function (x, y) {
            return x < y;
        },
        'KzGQB': function (x, y) {
            return x - y;
        },
        'mErec': function (x, y) {
            return x + y;
        }
    };
    input = APmzBN['ieJIB'](parseInt, input['trim']());
    var check = [
        0x0,
        0x6f,
        0xde,
        0x14d,
        0x1bc,
        0x22b,
        0x29a,
        0x309,
        0x378,
        0x3e7
    ];
    for (var i = 0x0; APmzBN['vugGW'](i, APmzBN['KzGQB'](check['length'], 0x1)); i++) {
        if (APmzBN['vugGW'](check[i], input) && check[APmzBN['mErec'](i, 0x1)] > input) {
            APmzBN['ieJIB'](myout, check[APmzBN['mErec'](i, 0x1)]);
            return;
        } else if (check[i] == input) {
            myout(check[i]);
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));