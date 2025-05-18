function Main(input) {
    var eNgjTF = {
        'OBtiO': function (x, y) {
            return x / y;
        },
        'LyLQf': function (x, y) {
            return x * y;
        },
        'KXUmR': function (x, y) {
            return x / y;
        },
        'QAPit': function (x, y) {
            return x % y;
        }
    };
    var joy = 0x0;
    joy += Math['floor'](eNgjTF['OBtiO'](input, 0x1f4)) * 0x3e8;
    joy += eNgjTF['LyLQf'](Math['floor'](eNgjTF['KXUmR'](eNgjTF['QAPit'](input, 0x1f4), 0x5)), 0x5);
    console['log'](joy);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));