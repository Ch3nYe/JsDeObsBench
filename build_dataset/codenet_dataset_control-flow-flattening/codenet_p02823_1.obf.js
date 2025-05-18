function Main(input) {
    var xvGFXh = {
        'YdLjk': function (x, y) {
            return x - y;
        },
        'NqLvd': function (x, y) {
            return x % y;
        },
        'wCxgZ': function (x, y) {
            return x + y;
        },
        'oqfMS': function (x, y) {
            return x - y;
        },
        'ExcTp': function (x, y) {
            return x / y;
        },
        'pPMpQ': function (x, y) {
            return x - y;
        },
        'ROsdR': function (x, y) {
            return x / y;
        }
    };
    const array = input['trim']()['split']('\x20')['map'](s => parseInt(s));
    const N = array[0x0];
    var A = array[0x1];
    var B = array[0x2];
    var ans = 0x0;
    var dist = xvGFXh['YdLjk'](B, A);
    if (xvGFXh['NqLvd'](dist, 0x2)) {
        var diff = xvGFXh['wCxgZ'](Math['min'](N - B, xvGFXh['oqfMS'](A, 0x1)), 0x1);
        ans += diff;
        ans += Math['floor'](xvGFXh['ExcTp'](xvGFXh['oqfMS'](xvGFXh['pPMpQ'](B, A), 0x1), 0x2));
    } else {
        ans = xvGFXh['ROsdR'](dist, 0x2);
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));