function Main(input) {
    var NGnlak = {
        'yQWaz': function (x, y) {
            return x <= y;
        },
        'VVZdU': 'Yay!'
    };
    var ab = input[0x0]['split']('\x20');
    console['log'](NGnlak['yQWaz'](ab[0x0], 0x8) && NGnlak['yQWaz'](ab[0x1], 0x8) ? NGnlak['VVZdU'] : ':(');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));