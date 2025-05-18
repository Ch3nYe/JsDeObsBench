var a0_0x537035 = a0_0x18f3;
function a0_0x4c56() {
    var _0xb064ef = [
        'stdin',
        'resume',
        'setEncoding',
        'data',
        'split',
        'replace',
        'length',
        'pow',
        'cLxMF',
        'dTnkP',
        'bAZUz',
        'log',
        'RJGiM',
        'VfDLy'
    ];
    a0_0x4c56 = function () {
        return _0xb064ef;
    };
    return a0_0x4c56();
}
process[a0_0x537035(0x0)][a0_0x537035(0x1)]();
function a0_0x18f3(xnkzWg, key) {
    var stringArray = a0_0x4c56();
    a0_0x18f3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x18f3(xnkzWg, key);
}
process[a0_0x537035(0x0)][a0_0x537035(0x2)]('utf8');
process[a0_0x537035(0x0)]['on'](a0_0x537035(0x3), function (chunk) {
    var _0x504824 = a0_0x18f3;
    var line, lines = chunk[_0x504824(0x4)]('\x0a'), i, len = lines['length'], j, jLen, deg, pow, max;
    for (i = 0x0; i < len; i++) {
        if ('xeYJs' === 'RvEzc') {
            if (deg < max) {
                deg += 0x5a * Math['pow'](0x2, j);
            }
        } else {
            line = lines[i];
            if (line == '#') {
                break;
            }
            line = line[_0x504824(0x5)](/north/g, 0x0);
            line = line['replace'](/west/g, 0x1);
            deg = 0x0;
            jLen = line[_0x504824(0x6)];
            pow = line['length'] - 0x1;
            max = 0x5a * Math[_0x504824(0x7)](0x2, pow);
            for (j = jLen; j >= 0x0; j--) {
                if (line[j] * 0x1) {
                    if ('hflXp' === 'hflXp') {
                        if (deg < max) {
                            deg += 0x5a * Math[_0x504824(0x7)](0x2, j);
                        }
                    } else {
                        if (deg > 0x0) {
                            deg -= 0x5a * Math[_0x504824(0x7)](0x2, j);
                        }
                    }
                } else {
                    if (deg > 0x0) {
                        if ('cLxMF' === _0x504824(0x8)) {
                            deg -= 0x5a * Math[_0x504824(0x7)](0x2, j);
                        } else {
                            deg -= 0x5a * Math[_0x504824(0x7)](0x2, j);
                        }
                    }
                }
            }
            while (pow > 0x0 && deg % 0x2 === 0x0) {
                if (_0x504824(0x9) === _0x504824(0xa)) {
                    console[_0x504824(0xb)](deg);
                } else {
                    deg = deg / 0x2;
                    pow--;
                }
            }
            if (pow > 0x0) {
                if (_0x504824(0xc) !== 'RJGiM') {
                    console[_0x504824(0xb)](deg + '/' + Math[_0x504824(0x7)](0x2, pow));
                } else {
                    console[_0x504824(0xb)](deg + '/' + Math[_0x504824(0x7)](0x2, pow));
                }
            } else {
                if (_0x504824(0xd) === _0x504824(0xd)) {
                    console['log'](deg);
                } else {
                    deg = deg / 0x2;
                    pow--;
                }
            }
        }
    }
});