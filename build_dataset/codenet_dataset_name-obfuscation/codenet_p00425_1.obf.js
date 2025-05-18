function move(_0x418457, _0x435cd1) {
    var _0x4b5cdd = _0x435cd1[0x0];
    var _0x56185f = _0x435cd1[0x1];
    var _0x2e1e71 = _0x435cd1[0x2];
    var _0x53bd58 = _0x435cd1[0x3];
    var _0x5de240 = _0x435cd1[0x4];
    var _0x595a82 = _0x435cd1[0x5];
    var _0x3c5348 = [];
    if (_0x418457 == 'N')
        _0x3c5348 = [
            _0x56185f,
            _0x595a82,
            _0x2e1e71,
            _0x53bd58,
            _0x4b5cdd,
            _0x5de240
        ];
    if (_0x418457 == 'S')
        _0x3c5348 = [
            _0x5de240,
            _0x4b5cdd,
            _0x2e1e71,
            _0x53bd58,
            _0x595a82,
            _0x56185f
        ];
    if (_0x418457 == 'E')
        _0x3c5348 = [
            _0x53bd58,
            _0x56185f,
            _0x4b5cdd,
            _0x595a82,
            _0x5de240,
            _0x2e1e71
        ];
    if (_0x418457 == 'W')
        _0x3c5348 = [
            _0x2e1e71,
            _0x56185f,
            _0x595a82,
            _0x4b5cdd,
            _0x5de240,
            _0x53bd58
        ];
    if (_0x418457 == 'R')
        _0x3c5348 = [
            _0x4b5cdd,
            _0x2e1e71,
            _0x5de240,
            _0x56185f,
            _0x53bd58,
            _0x595a82
        ];
    if (_0x418457 == 'L')
        _0x3c5348 = [
            _0x4b5cdd,
            _0x53bd58,
            _0x56185f,
            _0x5de240,
            _0x2e1e71,
            _0x595a82
        ];
    return _0x3c5348;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var dice;
var sum;
for (var i = 0x0; i < Arr['length']; i++) {
    var v = Arr[i]['charAt'](0x0);
    if (v['match'](/[NSEWRL]/)) {
        dice = move(v, dice);
        sum += dice[0x0];
    } else {
        if (i != 0x0)
            console['log'](sum);
        dice = [
            0x1,
            0x2,
            0x3,
            0x4,
            0x5,
            0x6
        ];
        sum = 0x1;
    }
    if (Arr[i] == '0')
        break;
}