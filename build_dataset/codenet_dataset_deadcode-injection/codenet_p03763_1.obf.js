function a0_0x24dd() {
    var _0x48497d = [
        'split',
        'abcdefghijklmnopqrstuvwxyz',
        'fill',
        'length',
        'findIndex',
        'FKLBu',
        'kxqKr',
        'repeat',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x24dd = function () {
        return _0x48497d;
    };
    return a0_0x24dd();
}
var a0_0xc005cf = a0_0x4bec;
function a0_0x4bec(Lahhbc, key) {
    var stringArray = a0_0x24dd();
    a0_0x4bec = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4bec(Lahhbc, key);
}
function Main(input) {
    var _0x91393f = a0_0x4bec;
    input = input[_0x91393f(0x0)]('\x0a');
    var S = _0x91393f(0x1)['split']('');
    var array = new Array(0x1a);
    array[_0x91393f(0x2)](0x0);
    var temp;
    for (var i = 0x1; i < input['length']; i++) {
        temp = new Array(0x1a);
        temp[_0x91393f(0x2)](0x0);
        for (var j = 0x0; j < input[i][_0x91393f(0x3)]; j++) {
            temp[S[_0x91393f(0x4)](e => {
                return e === input[i][j];
            })]++;
        }
        for (var j = 0x0; j < 0x1a; j++) {
            if (_0x91393f(0x5) !== _0x91393f(0x5)) {
                array[j] = temp[j];
            } else {
                if (array[j] > temp[j] || i === 0x1) {
                    array[j] = temp[j];
                }
            }
        }
    }
    var ret = '';
    array['forEach']((e, i) => {
        var _0x49323b = a0_0x4bec;
        if (_0x49323b(0x6) === _0x49323b(0x6)) {
            ret += S[i][_0x49323b(0x7)](e);
        } else {
            return e === input[i][j];
        }
    });
    console[_0x91393f(0x8)](ret);
}
Main(require('fs')[a0_0xc005cf(0x9)](a0_0xc005cf(0xa), a0_0xc005cf(0xb)));