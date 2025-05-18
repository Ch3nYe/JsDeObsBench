var a0_0x15e55 = a0_0x348c;
function a0_0x4468() {
    var _0x3acde1 = [
        'readline',
        'stdin',
        'stdout',
        'line',
        'push',
        'split',
        'DjTYk',
        'XOFmG',
        'log'
    ];
    a0_0x4468 = function () {
        return _0x3acde1;
    };
    return a0_0x4468();
}
function a0_0x348c(bspvRN, key) {
    var stringArray = a0_0x4468();
    a0_0x348c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x348c(bspvRN, key);
}
var lines = [];
var readline = require(a0_0x15e55(0x0));
var rl = readline['createInterface']({
    'input': process[a0_0x15e55(0x1)],
    'output': process[a0_0x15e55(0x2)]
});
rl['on'](a0_0x15e55(0x3), function (x) {
    var _0x5361b7 = a0_0x348c;
    lines[_0x5361b7(0x4)](x);
});
rl['on']('close', function () {
    var _0x4f7ac9 = a0_0x348c;
    var N = Number(lines[0x0]);
    var S = lines[0x1][_0x4f7ac9(0x5)]('');
    var K = Number(lines[0x2]);
    for (var i = 0x0; i < N; i++) {
        if (S[K - 0x1] !== S[i]) {
            if (_0x4f7ac9(0x6) === _0x4f7ac9(0x6)) {
                S[i] = '*';
            } else {
                lines['push'](x);
            }
        }
    }
    var result = '';
    for (var i = 0x0; i < N; i++) {
        if ('HPawJ' !== _0x4f7ac9(0x7)) {
            result = result + S[i];
        } else {
            var N = Number(lines[0x0]);
            var S = lines[0x1][_0x4f7ac9(0x5)]('');
            var K = Number(lines[0x2]);
            for (var i = 0x0; i < N; i++) {
                if (S[K - 0x1] !== S[i]) {
                    S[i] = '*';
                }
            }
            var result = '';
            for (var i = 0x0; i < N; i++) {
                result = result + S[i];
            }
            console[_0x4f7ac9(0x8)](result);
        }
    }
    console[_0x4f7ac9(0x8)](result);
});