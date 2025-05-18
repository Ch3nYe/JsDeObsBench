process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
process['stdin']['on']('data', function (_0x2a0f2b) {
    input += _0x2a0f2b;
});
process['stdin']['on']('end', function () {
    var _0x45133c = input['split']('\x0a');
    var _0x2fadb0 = 0x0;
    while (!![]) {
        var _0x2af221 = Number(_0x45133c[_0x2fadb0++]);
        if (_0x2af221 === 0x0) {
            break;
        }
        var _0x52d128 = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        for (var _0x2dc77e = 0x0; _0x2dc77e < _0x2af221; _0x2dc77e++) {
            _0x52d128[Number(_0x45133c[_0x2fadb0++])]++;
        }
        for (var _0x2dc77e = 0x0; _0x2dc77e < _0x52d128['length']; _0x2dc77e++) {
            var _0x277e4e = _0x52d128[_0x2dc77e] === 0x0 ? '-' : '';
            for (var _0x282b09 = 0x0; _0x282b09 < _0x52d128[_0x2dc77e]; _0x282b09++) {
                _0x277e4e += '*';
            }
            console['log'](_0x277e4e);
        }
    }
});