const a0_0x276392 = a0_0x2b85;
(function (stringArrayFunction, comparisonValue) {
    const _0x29d11d = a0_0x2b85;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x29d11d(0x13a)) / 0x1 * (-parseInt(_0x29d11d(0x133)) / 0x2) + parseInt(_0x29d11d(0x132)) / 0x3 * (-parseInt(_0x29d11d(0x137)) / 0x4) + parseInt(_0x29d11d(0x13b)) / 0x5 + parseInt(_0x29d11d(0x13c)) / 0x6 + parseInt(_0x29d11d(0x13e)) / 0x7 * (parseInt(_0x29d11d(0x130)) / 0x8) + parseInt(_0x29d11d(0x135)) / 0x9 + -parseInt(_0x29d11d(0x13d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x436c, 0x9eecb));
function a0_0x436c() {
    const _0x1ea969 = [
        'log',
        '89307Fqhara',
        '4195700gzdEWY',
        '644928ENkanI',
        '17413380fXsDfc',
        '4739wlKWjZ',
        '1864gpTKvO',
        'map',
        '69579qPbSbV',
        '26nUBEbJ',
        'split',
        '1351134qxPoUO',
        'readFileSync',
        '4qKYtOx',
        'Yes'
    ];
    a0_0x436c = function () {
        return _0x1ea969;
    };
    return a0_0x436c();
}
const input = require('fs')[a0_0x276392(0x136)]('/dev/stdin', 'utf-8')['split']('\x0a');
const [X, Y] = input[0x0][a0_0x276392(0x134)]('\x20')[a0_0x276392(0x131)](Number);
let ans = 'No';
if (X < Y) {
    const r = Y - X * 0x2;
    if (r % 0x2 === 0x0 && r / 0x2 <= X)
        ans = a0_0x276392(0x138);
}
function a0_0x2b85(dPYyLD, key) {
    const stringArray = a0_0x436c();
    a0_0x2b85 = function (index, key) {
        index = index - 0x130;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b85(dPYyLD, key);
}
console[a0_0x276392(0x139)](ans);