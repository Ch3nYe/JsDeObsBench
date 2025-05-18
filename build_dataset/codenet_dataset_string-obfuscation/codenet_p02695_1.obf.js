const a0_0x516ef2 = a0_0x206a;
(function (stringArrayFunction, comparisonValue) {
    const _0x35bef2 = a0_0x206a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x35bef2(0x18d)) / 0x1 * (-parseInt(_0x35bef2(0x19a)) / 0x2) + -parseInt(_0x35bef2(0x18f)) / 0x3 * (-parseInt(_0x35bef2(0x197)) / 0x4) + -parseInt(_0x35bef2(0x18c)) / 0x5 + -parseInt(_0x35bef2(0x18e)) / 0x6 * (-parseInt(_0x35bef2(0x18b)) / 0x7) + parseInt(_0x35bef2(0x192)) / 0x8 + -parseInt(_0x35bef2(0x199)) / 0x9 + parseInt(_0x35bef2(0x198)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39bb, 0x23276));
const input = require('fs')[a0_0x516ef2(0x191)](a0_0x516ef2(0x196), 'utf8');
function a0_0x206a(ofmuAf, key) {
    const stringArray = a0_0x39bb();
    a0_0x206a = function (index, key) {
        index = index - 0x188;
        let value = stringArray[index];
        return value;
    };
    return a0_0x206a(ofmuAf, key);
}
function a0_0x39bb() {
    const _0x3f0be7 = [
        '1378440kNmqGP',
        '2193786xMqFUQ',
        '3556EioEAG',
        'split',
        'log',
        'push',
        '791Zefutk',
        '889940DlTUcl',
        '23zwVIww',
        '18rExVlT',
        '837mdPyhv',
        'map',
        'readFileSync',
        '1790080ANgePJ',
        'max',
        'forEach',
        'pop',
        '/dev/stdin',
        '3508HjYPLO'
    ];
    a0_0x39bb = function () {
        return _0x3f0be7;
    };
    return a0_0x39bb();
}
(input => {
    const _0x1f110a = a0_0x516ef2;
    const rows = input[_0x1f110a(0x188)]('\x0a');
    const [N, M, Q] = rows[0x0]['split']('\x20')[_0x1f110a(0x190)](Number);
    const A = [];
    for (let i = 0x0; i < Q; i++) {
        A[i] = rows[i + 0x1][_0x1f110a(0x188)]('\x20')[_0x1f110a(0x190)](Number);
    }
    const ss = [];
    const s = [];
    let d = 0x0;
    let v = 0x0;
    while (v !== undefined) {
        if (d === N) {
            ss['push']([...s]);
            s[_0x1f110a(0x195)]();
            v++;
            d--;
        } else if (v >= M) {
            v = s['pop']();
            d--;
        } else {
            s[_0x1f110a(0x18a)](v + 0x1);
            d++;
        }
    }
    let res = 0x0;
    ss['forEach'](s => {
        const _0x486f0b = _0x1f110a;
        let sum = 0x0;
        A[_0x486f0b(0x194)](a => {
            if (s[a[0x1] - 0x1] - s[a[0x0] - 0x1] === a[0x2]) {
                sum += a[0x3];
            }
        });
        res = Math[_0x486f0b(0x193)](res, sum);
    });
    console[_0x1f110a(0x189)](res);
})(input);