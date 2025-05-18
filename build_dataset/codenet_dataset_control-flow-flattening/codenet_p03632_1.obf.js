function Main(inp) {
    var kBFmhE = {
        'zcAnO': function (callee, param1) {
            return callee(param1);
        },
        'GGusy': function (x, y) {
            return x - y;
        }
    };
    var input = inp['split']('\x0a')[0x0]['split']('\x20')['map'](function (n) {
        return kBFmhE['zcAnO'](Number, n);
    });
    var start = Math['max'](input[0x0], input[0x2]);
    var end = Math['min'](input[0x1], input[0x3]);
    var overlap = Math['max'](0x0, kBFmhE['GGusy'](end, start));
    console['log'](overlap);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));