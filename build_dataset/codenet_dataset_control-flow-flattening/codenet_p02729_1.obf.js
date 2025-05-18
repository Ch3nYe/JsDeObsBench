function Main(input) {
    var aKbXmX = {
        'kwJhK': function (x, y) {
            return x == y;
        },
        'faFfy': function (x, y) {
            return x + y;
        },
        'UDurs': function (x, y) {
            return x / y;
        },
        'GdYXe': function (x, y) {
            return x - y;
        },
        'OsZVT': function (x, y) {
            return x * y;
        }
    };
    var a = input[0x0]['split']('\x20')['map'](v => v - 0x0);
    if (aKbXmX['kwJhK'](a[0x0] + a[0x1], 0x0))
        console['log'](0x0);
    else
        console['log'](~~aKbXmX['faFfy'](aKbXmX['UDurs'](a[0x0] * aKbXmX['GdYXe'](a[0x0], 0x1), 0x2), aKbXmX['UDurs'](aKbXmX['OsZVT'](a[0x1], aKbXmX['GdYXe'](a[0x1], 0x1)), 0x2)));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));