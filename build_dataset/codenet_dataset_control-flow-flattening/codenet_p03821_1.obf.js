function Main(s) {
    var XQOrNc = {
        'EXNcc': function (x, y) {
            return x < y;
        },
        'ozNwC': function (x, y) {
            return x + y;
        },
        'wFBXE': function (x, y) {
            return x - y;
        }
    };
    s = s['split']('\x0a');
    var n = +s[0x0];
    for (var i = 0x0; XQOrNc['EXNcc'](i, n); i++) {
        s[i] = s[XQOrNc['ozNwC'](i, 0x1)]['split']('\x20')['map'](a => +a);
    }
    var ans = 0x0;
    for (i = XQOrNc['wFBXE'](n, 0x1); i >= 0x0; i--) {
        var x = (s[i][0x0] + ans) % s[i][0x1];
        if (x)
            ans += s[i][0x1] - x;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));