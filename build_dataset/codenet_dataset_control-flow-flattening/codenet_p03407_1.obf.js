function Main(s) {
    var mQjhDo = {
        'Swagp': function (x, y) {
            return x + y;
        },
        'lCWwO': 'Yes'
    };
    s = s['split']('\x20')['map'](a => parseInt(a));
    console['log'](mQjhDo['Swagp'](s[0x0], s[0x1]) >= s[0x2] ? mQjhDo['lCWwO'] : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());