function Main(_0x17a730) {
    var _0x215524 = _0x17a730['split']('\x0a')[0x0];
    if (_0x215524 === 'Sunny') {
        console['log']('Cloudy');
    } else if (_0x215524 === 'Cloudy') {
        console['log']('Rainy');
    } else if (_0x215524 === 'Rainy') {
        console['log']('Sunny');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));