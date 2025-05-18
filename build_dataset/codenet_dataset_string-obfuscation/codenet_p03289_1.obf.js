var a0_0x1dbb9a = a0_0x522a;
(function (stringArrayFunction, comparisonValue) {
    var _0x5f3ed6 = a0_0x522a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5f3ed6(0x11a)) / 0x1 * (-parseInt(_0x5f3ed6(0x11d)) / 0x2) + -parseInt(_0x5f3ed6(0x11e)) / 0x3 + parseInt(_0x5f3ed6(0x11c)) / 0x4 * (parseInt(_0x5f3ed6(0x118)) / 0x5) + -parseInt(_0x5f3ed6(0x119)) / 0x6 * (parseInt(_0x5f3ed6(0x10d)) / 0x7) + -parseInt(_0x5f3ed6(0x111)) / 0x8 * (-parseInt(_0x5f3ed6(0x110)) / 0x9) + parseInt(_0x5f3ed6(0x10c)) / 0xa * (parseInt(_0x5f3ed6(0x10a)) / 0xb) + parseInt(_0x5f3ed6(0x116)) / 0xc * (parseInt(_0x5f3ed6(0x109)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x358f, 0x1e2fc));
function main(input) {
    var _0x38b2a3 = a0_0x522a;
    input = input[_0x38b2a3(0x10e)]();
    var arr = input[_0x38b2a3(0x115)]('')[_0x38b2a3(0x114)](n => n);
    var ans = 0x0;
    if (arr[0x0] == 'A') {
        ans++;
    }
    var temp = 0x0;
    var memo = 0x0;
    for (var i = 0x2; i < arr[_0x38b2a3(0x113)] - 0x1; i++) {
        if (arr[i] == 'C') {
            temp++;
            memo = i;
        }
    }
    if (temp == 0x1) {
        ans++;
    }
    if (ans == 0x2) {
        arr[_0x38b2a3(0x11b)](0x0, 0x1);
        arr[_0x38b2a3(0x11b)](memo - 0x1, 0x1);
        if (/A-Z/[_0x38b2a3(0x112)](arr) == ![]) {
            ans++;
        }
        if (ans == 0x3) {
            console[_0x38b2a3(0x117)]('AC');
        } else {
            console[_0x38b2a3(0x117)]('WA');
        }
    } else {
        console[_0x38b2a3(0x117)]('WA');
    }
}
function a0_0x358f() {
    var _0x3a90f9 = [
        '153251SZDzoZ',
        'trim',
        'utf8',
        '18RYGEWV',
        '853744ZlPVmp',
        'test',
        'length',
        'map',
        'split',
        '24AbeJwD',
        'log',
        '45125HYXEYn',
        '12YMEQVA',
        '58murczf',
        'splice',
        '20lgnSWw',
        '7086rDvExb',
        '277737DkKJfR',
        '381628djSjmd',
        '99URLyIL',
        'readFileSync',
        '164700dBmwmn'
    ];
    a0_0x358f = function () {
        return _0x3a90f9;
    };
    return a0_0x358f();
}
function a0_0x522a(rRIvEn, key) {
    var stringArray = a0_0x358f();
    a0_0x522a = function (index, key) {
        index = index - 0x109;
        var value = stringArray[index];
        return value;
    };
    return a0_0x522a(rRIvEn, key);
}
main(require('fs')[a0_0x1dbb9a(0x10b)]('/dev/stdin', a0_0x1dbb9a(0x10f)));