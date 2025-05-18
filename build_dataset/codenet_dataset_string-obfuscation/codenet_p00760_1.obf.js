const a0_0x353903 = a0_0x2331;
(function (stringArrayFunction, comparisonValue) {
    const _0xd73f34 = a0_0x2331;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xd73f34(0x134)) / 0x1 + -parseInt(_0xd73f34(0x133)) / 0x2 + -parseInt(_0xd73f34(0x138)) / 0x3 + -parseInt(_0xd73f34(0x12e)) / 0x4 * (parseInt(_0xd73f34(0x12d)) / 0x5) + -parseInt(_0xd73f34(0x13b)) / 0x6 * (-parseInt(_0xd73f34(0x12f)) / 0x7) + parseInt(_0xd73f34(0x135)) / 0x8 + parseInt(_0xd73f34(0x136)) / 0x9 * (-parseInt(_0xd73f34(0x139)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4669, 0x45a5c));
const input = require('fs')[a0_0x353903(0x12b)](a0_0x353903(0x137), a0_0x353903(0x130))[a0_0x353903(0x13a)]();
const lines = input[a0_0x353903(0x13a)]()[a0_0x353903(0x131)]('\x0a');
const nextDay = (y, m, d) => {
    d = d + 0x1;
    if (y % 0x3 === 0x0) {
        if (d > 0x14) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                m = 0x1;
                y++;
            }
        }
    } else {
        if (d > 0x14) {
            d = 0x1;
            m += 0x1;
            if (m === 0xb) {
                m = 0x1;
                y++;
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
function a0_0x4669() {
    const _0x707991 = [
        '30EZmVdD',
        'readFileSync',
        'map',
        '119585WfEUDy',
        '4aNuCZU',
        '663103EhviUW',
        'utf8',
        'split',
        'forEach',
        '511714jEFuVC',
        '173264YbKJpk',
        '3485664PbvfeT',
        '27oPWfkm',
        '/dev/stdin',
        '318879JvcQyk',
        '215820UgRYar',
        'trim'
    ];
    a0_0x4669 = function () {
        return _0x707991;
    };
    return a0_0x4669();
}
function a0_0x2331(rkbOEK, key) {
    const stringArray = a0_0x4669();
    a0_0x2331 = function (index, key) {
        index = index - 0x12b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2331(rkbOEK, key);
}
lines['shift']();
lines[a0_0x353903(0x132)](line => {
    const _0x496976 = a0_0x353903;
    let [y, m, d] = line[_0x496976(0x13a)]()[_0x496976(0x131)]('\x20')[_0x496976(0x12c)](Number);
    let count = 0x1;
    while (y !== 0x3e8 || m !== 0x1 || d !== 0x1) {
        [y, m, d] = nextDay(y, m, d);
        count++;
    }
    console['log'](count - 0x1);
});