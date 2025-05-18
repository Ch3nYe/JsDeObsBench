function Main(input) {
    var nAuAwS = {
        'CgUHa': function (x, y) {
            return x - y;
        },
        'sSIYi': function (x, y) {
            return x * y;
        },
        'vAsZS': function (x, y) {
            return x < y;
        }
    };
    var input = input['split']('\x0a');
    var ballXList = input[0x2]['split']('\x20');
    var ret = 0x0;
    for (var i = 0x0; i < input[0x0]; i++) {
        var aDistance = ballXList[i];
        var bDistance = nAuAwS['CgUHa'](input[0x1], ballXList[i]);
        var ret = ret + nAuAwS['sSIYi'](nAuAwS['vAsZS'](aDistance, bDistance) ? aDistance : bDistance, 0x2);
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));