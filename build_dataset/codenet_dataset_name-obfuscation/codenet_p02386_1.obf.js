function move(_0xfb805, _0x28ca2c, _0x13d069, _0x20f956, _0x3d83b7, _0x3a175f) {
    var _0x31924e = this['toString']();
    if (_0x31924e == 'N')
        return [
            _0x28ca2c,
            _0x3a175f,
            _0x13d069,
            _0x20f956,
            _0xfb805,
            _0x3d83b7
        ];
    if (_0x31924e == 'E')
        return [
            _0x20f956,
            _0x28ca2c,
            _0xfb805,
            _0x3a175f,
            _0x3d83b7,
            _0x13d069
        ];
}
function roll(_0x3bc6ce, _0x59f3d3, _0x1dd54f, _0x50244e, _0x36200b, _0x5bc9ec) {
    return [
        _0x3bc6ce,
        _0x1dd54f,
        _0x36200b,
        _0x59f3d3,
        _0x50244e,
        _0x5bc9ec
    ];
}
function rolls(_0xa21186) {
    for (var _0x4c1b17 = 0x0; _0x4c1b17 < 0x4; _0x4c1b17++) {
        obj[_0xa21186['join'](',')] = !![];
        _0xa21186 = roll['apply'](null, _0xa21186);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
var OBJ = {};
var result = 'Yes';
for (var i = 0x0; i < n; i++) {
    var obj = {};
    var dice = Arr[i]['split']('\x20')['map'](Number);
    for (var j = 0x0; j < 0x4; j++) {
        rolls(dice);
        dice = move['apply']('N', dice);
    }
    dice = move['apply']('E', dice);
    rolls(dice);
    dice = move['apply']('E', dice);
    dice = move['apply']('E', dice);
    rolls(dice);
    for (var k in obj) {
        if (OBJ['hasOwnProperty'](k))
            result = 'No';
        else
            OBJ[k] = !![];
    }
    if (result == 'No')
        break;
}
console['log'](result);