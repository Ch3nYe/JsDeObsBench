var a0_0x5f45e4 = a0_0x1436;
function a0_0xeb42() {
    var _0x119468 = [
        'stdin',
        'resume',
        'utf8',
        'data',
        'end',
        'split',
        'atrIL',
        'MhTXw',
        'map',
        'XmDby',
        'log'
    ];
    a0_0xeb42 = function () {
        return _0x119468;
    };
    return a0_0xeb42();
}
process[a0_0x5f45e4(0x0)][a0_0x5f45e4(0x1)]();
process[a0_0x5f45e4(0x0)]['setEncoding'](a0_0x5f45e4(0x2));
var input = '';
function a0_0x1436(OIiaIo, key) {
    var stringArray = a0_0xeb42();
    a0_0x1436 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1436(OIiaIo, key);
}
process[a0_0x5f45e4(0x0)]['on'](a0_0x5f45e4(0x3), function (chunk) {
    input += chunk;
});
process[a0_0x5f45e4(0x0)]['on'](a0_0x5f45e4(0x4), function () {
    var _0x169d49 = a0_0x1436;
    var lines = input[_0x169d49(0x5)]('\x0a');
    var l = 0x0;
    while (!![]) {
        if (_0x169d49(0x6) !== _0x169d49(0x7)) {
            var n = Number(lines[l++]);
            if (n === 0x0) {
                break;
            }
            for (var i = 0x0; i < n; i++) {
                var values = lines[l++][_0x169d49(0x5)]('\x20')[_0x169d49(0x8)](Number);
                var pm = values[0x0];
                var pe = values[0x1];
                var pj = values[0x2];
                var ans = 'C';
                if (pm === 0x64 || pe === 0x64 || pj === 0x64) {
                    ans = 'A';
                } else if ((pm + pe) / 0x2 >= 0x5a) {
                    ans = 'A';
                } else {
                    if ('kFria' !== 'kFria') {
                        var average = (pm + pe + pj) / 0x3;
                        if (average >= 0x50) {
                            ans = 'A';
                        } else if (average >= 0x46) {
                            ans = 'B';
                        } else if (average >= 0x32 && (pm >= 0x50 || pe >= 0x50)) {
                            ans = 'B';
                        }
                    } else {
                        var average = (pm + pe + pj) / 0x3;
                        if (average >= 0x50) {
                            ans = 'A';
                        } else if (average >= 0x46) {
                            ans = 'B';
                        } else if (average >= 0x32 && (pm >= 0x50 || pe >= 0x50)) {
                            if (_0x169d49(0x9) !== 'MDIJb') {
                                ans = 'B';
                            } else {
                                ans = 'A';
                            }
                        }
                    }
                }
                console[_0x169d49(0xa)](ans);
            }
        } else {
            ans = 'A';
        }
    }
});