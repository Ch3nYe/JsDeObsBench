function bubbleSort(_0x4a936d) {
    var _0x101c82 = _0x4a936d['length'];
    var _0x16784b = 0x1;
    var _0x322d1a = 0x0;
    var _0x5934b6 = 0x0;
    while (_0x16784b == 0x1) {
        _0x16784b = 0x0;
        for (var _0x7647ab = _0x101c82 - 0x1; _0x7647ab >= _0x322d1a + 0x1; _0x7647ab--) {
            if (_0x4a936d[_0x7647ab] < _0x4a936d[_0x7647ab - 0x1]) {
                var _0x19f3a8 = _0x4a936d[_0x7647ab];
                _0x4a936d[_0x7647ab] = _0x4a936d[_0x7647ab - 0x1];
                _0x4a936d[_0x7647ab - 0x1] = _0x19f3a8;
                _0x16784b = 0x1;
                _0x5934b6++;
            }
        }
        _0x322d1a++;
    }
    return [
        _0x4a936d,
        _0x5934b6
    ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['shift']();
var arr = Arr[0x0]['split']('\x20')['map'](Number);
var result = bubbleSort(arr);
console['log'](result[0x0]['join']('\x20'));
console['log'](result[0x1]);