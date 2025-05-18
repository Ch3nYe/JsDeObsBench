var a0_0x4691a2 = a0_0x16fc;
function a0_0x16fc(SLNVmf, key) {
    var stringArray = a0_0x4fdd();
    a0_0x16fc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16fc(SLNVmf, key);
}
function a0_0x4fdd() {
    var _0x35928e = [
        'split',
        'pow',
        'GUkpU',
        'rAUbw',
        'readFileSync'
    ];
    a0_0x4fdd = function () {
        return _0x35928e;
    };
    return a0_0x4fdd();
}
function main(input) {
    var _0x3f2082 = a0_0x16fc;
    const lines = input[_0x3f2082(0x0)]('\x0a');
    const N = parseInt(lines[0x0]);
    const S = lines[0x1][_0x3f2082(0x0)]('');
    var result = Math[_0x3f2082(0x1)](0xa, 0x8);
    var current_count = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (_0x3f2082(0x2) !== _0x3f2082(0x3)) {
            if (S[i] == 'E') {
                current_count++;
            }
        } else {
            current_count--;
        }
    }
    result = current_count;
    for (var i = 0x1; i < N; i++) {
        if (S[i] == 'E') {
            current_count--;
        }
        if (S[i - 0x1] == 'W') {
            current_count++;
        }
        result = Math['min'](result, current_count);
    }
    console['log'](result);
}
main(require('fs')[a0_0x4691a2(0x4)]('/dev/stdin', 'utf8'));