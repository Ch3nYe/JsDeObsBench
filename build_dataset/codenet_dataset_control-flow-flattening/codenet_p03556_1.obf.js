function Main(input) {
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    var ans = Math['pow'](Math['floor'](Math['sqrt'](n)), 0x2);
    console['log']('%s', ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));