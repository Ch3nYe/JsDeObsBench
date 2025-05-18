function Main(input) {
    var lines = input['split']('\x0a');
    var s = lines['splice'](0x1, lines['length']);
    var s_sorted = s['sort']((a, b) => a > b ? 0x1 : -0x1);
    console['log'](s_sorted['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));