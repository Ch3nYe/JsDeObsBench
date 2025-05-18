function Main(s) {
    var XttKLV = {
        'fACTJ': 'YES',
        'bkSLz': function (x, y) {
            return x < y;
        },
        'KOQsW': function (x, y) {
            return x === y;
        },
        'osVUE': function (x, y) {
            return x > y;
        },
        'eRZPq': function (x, y) {
            return x - y;
        }
    };
    s = s['trim']();
    var a = 0x0, b = 0x0, c = 0x0;
    var ans = XttKLV['fACTJ'];
    for (var i = 0x0; XttKLV['bkSLz'](i, s['length']); i++) {
        if (XttKLV['KOQsW'](s[i], 'a'))
            a++;
        else if (XttKLV['KOQsW'](s[i], 'b'))
            b++;
        else
            c++;
    }
    if (XttKLV['osVUE'](XttKLV['eRZPq'](Math['max'](a, b, c), Math['min'](a, b, c)), 0x1))
        ans = 'NO';
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));