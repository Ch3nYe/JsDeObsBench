var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i]['split']('')['map'](Number);
    arr['sort'](function (_0x5ab6c0, _0x5277ff) {
        return _0x5277ff - _0x5ab6c0;
    });
    var a = arr['join']('');
    arr['sort'](function (_0x2448af, _0x609089) {
        return _0x2448af - _0x609089;
    });
    var b = arr['join']('');
    console['log'](parseInt(a) - parseInt(b));
}