function a0_0x2cda(WayEyr, key) {
    const stringArray = a0_0x2a51();
    a0_0x2cda = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2cda(WayEyr, key);
}
const a0_0x4d82f4 = a0_0x2cda;
function a0_0x2a51() {
    const _0x38d4a1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'FgSDy',
        'HsZaN',
        'nvrnR',
        'shift',
        'map',
        'lYRtq',
        'ylveq',
        'log'
    ];
    a0_0x2a51 = function () {
        return _0x38d4a1;
    };
    return a0_0x2a51();
}
const input = require('fs')[a0_0x4d82f4(0x0)](a0_0x4d82f4(0x1), a0_0x4d82f4(0x2))[a0_0x4d82f4(0x3)]();
const lines = input[a0_0x4d82f4(0x3)]()[a0_0x4d82f4(0x4)]('\x0a');
const nextDay = (y, m, d) => {
    const _0xb2cb6e = a0_0x2cda;
    d = d + 0x1;
    if (y % 0x3 === 0x0) {
        if (d > 0x14) {
            if ('FgSDy' === _0xb2cb6e(0x5)) {
                d = 0x1;
                m += 0x1;
                if (m === 0xb) {
                    if (_0xb2cb6e(0x6) === _0xb2cb6e(0x7)) {
                        d = 0x1;
                        m += 0x1;
                        if (m === 0xb) {
                            m = 0x1;
                            y++;
                        }
                    } else {
                        m = 0x1;
                        y++;
                    }
                }
            } else {
                d = 0x1;
                m += 0x1;
                if (m === 0xb) {
                    m = 0x1;
                    y++;
                }
            }
        }
    } else {
        if (d > 0x14) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                if ('xiSHP' === 'LckEU') {
                    m = 0x1;
                    y++;
                } else {
                    m = 0x1;
                    y++;
                }
            }
        } else if (d > 0x13 && m % 0x2 === 0x0) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                m = 0x1;
                y++;
            }
        }
    }
    return [
        y,
        m,
        d
    ];
};
lines[a0_0x4d82f4(0x8)]();
lines['forEach'](line => {
    const _0x4cfc29 = a0_0x2cda;
    let [y, m, d] = line[_0x4cfc29(0x3)]()[_0x4cfc29(0x4)]('\x20')[_0x4cfc29(0x9)](Number);
    let count = 0x1;
    while (y !== 0x3e8 || m !== 0x1 || d !== 0x1) {
        if (_0x4cfc29(0xa) === _0x4cfc29(0xb)) {
            m = 0x1;
            y++;
        } else {
            [y, m, d] = nextDay(y, m, d);
            count++;
        }
    }
    console[_0x4cfc29(0xc)](count - 0x1);
});