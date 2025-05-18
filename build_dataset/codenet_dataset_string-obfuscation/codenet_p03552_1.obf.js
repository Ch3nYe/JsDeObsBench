const a0_0x5627fa = a0_0x2803;
(function (stringArrayFunction, comparisonValue) {
    const _0x568416 = a0_0x2803;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x568416(0x9f)) / 0x1 + parseInt(_0x568416(0x96)) / 0x2 * (parseInt(_0x568416(0xa1)) / 0x3) + -parseInt(_0x568416(0xa7)) / 0x4 * (-parseInt(_0x568416(0xa2)) / 0x5) + parseInt(_0x568416(0x9c)) / 0x6 * (parseInt(_0x568416(0x9e)) / 0x7) + parseInt(_0x568416(0x99)) / 0x8 + parseInt(_0x568416(0xa4)) / 0x9 + -parseInt(_0x568416(0xa8)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1f67, 0x1c6bc));
function Main(input) {
    const _0x273cda = a0_0x2803;
    input = input['split']('\x0a');
    if (input[input[_0x273cda(0xa6)] - 0x1] === '') {
        input[_0x273cda(0xa0)]();
    }
    const N = input[0x0][_0x273cda(0x97)]('\x20')[0x0] - 0x0;
    const Z = input[0x0][_0x273cda(0x97)]('\x20')[0x1] - 0x0;
    const W = input[0x0][_0x273cda(0x97)]('\x20')[0x2] - 0x0;
    const a = input[0x1][_0x273cda(0x97)]('\x20')[_0x273cda(0x98)](e => {
        return e - 0x0;
    });
    if (a[_0x273cda(0xa6)] === 0x1) {
        console[_0x273cda(0xa5)](Math[_0x273cda(0xa3)](W - a[0x0]));
        return;
    }
    var x, y;
    x = new Array(N);
    y = new Array(N);
    for (var i = N - 0x1; i >= 0x0; i--) {
        if (i === N - 0x1) {
            y[i] = Math[_0x273cda(0xa3)](a[N - 0x1] - a[N - 0x2]);
            x[i] = Math[_0x273cda(0xa3)](a[N - 0x1] - a[N - 0x2]);
            continue;
        }
        y[i] = Math[_0x273cda(0x9a)](...x[_0x273cda(0x93)](i + 0x1), i !== 0x0 ? Math[_0x273cda(0xa3)](a[i - 0x1] - a[N - 0x1]) : Math[_0x273cda(0xa3)](Z - a[N - 0x1]));
        x[i] = Math[_0x273cda(0x95)](...y[_0x273cda(0x93)](i + 0x1), i !== 0x0 ? Math[_0x273cda(0xa3)](a[i - 0x1] - a[N - 0x1]) : Math['abs'](W - a[N - 0x1]));
    }
    console[_0x273cda(0xa5)](Math['max'](...x));
}
Main(require('fs')[a0_0x5627fa(0x94)](a0_0x5627fa(0x9d), a0_0x5627fa(0x9b)));
function a0_0x2803(zrNOCO, key) {
    const stringArray = a0_0x1f67();
    a0_0x2803 = function (index, key) {
        index = index - 0x93;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2803(zrNOCO, key);
}
function a0_0x1f67() {
    const _0x2b3667 = [
        '650304eBPQtQ',
        'log',
        'length',
        '8VNCIIL',
        '999180QsXKlp',
        'slice',
        'readFileSync',
        'max',
        '370dcVFMI',
        'split',
        'map',
        '377648fDlGGJ',
        'min',
        'utf8',
        '6wLtzOM',
        '/dev/stdin',
        '830998eDUsoj',
        '227357GbhsbD',
        'pop',
        '699iBrgRN',
        '406015GPVpfl',
        'abs'
    ];
    a0_0x1f67 = function () {
        return _0x2b3667;
    };
    return a0_0x1f67();
}