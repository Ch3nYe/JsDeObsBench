var a0_0x11aab6 = a0_0x145f;
function a0_0x145f(bYjrFz, key) {
    var stringArray = a0_0x31d2();
    a0_0x145f = function (index, key) {
        index = index - 0x7d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x145f(bYjrFz, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x627481 = a0_0x145f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x627481(0x8b)) / 0x1 * (parseInt(_0x627481(0x89)) / 0x2) + -parseInt(_0x627481(0x7e)) / 0x3 * (parseInt(_0x627481(0x86)) / 0x4) + parseInt(_0x627481(0x8a)) / 0x5 + parseInt(_0x627481(0x81)) / 0x6 + parseInt(_0x627481(0x88)) / 0x7 * (parseInt(_0x627481(0x80)) / 0x8) + parseInt(_0x627481(0x7d)) / 0x9 + -parseInt(_0x627481(0x84)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31d2, 0x4242c));
function a0_0x31d2() {
    var _0x2c5470 = [
        '617ObkbYY',
        '1285344cjXXjH',
        '10923FVQmfx',
        'split',
        '17288EafJmQ',
        '2075994QHhorU',
        '/dev/stdin',
        'shift',
        '5440630cCMmmm',
        'log',
        '212zcZwLl',
        'utf8',
        '427yfIafr',
        '478qfXVyf',
        '2676335UoUUjM'
    ];
    a0_0x31d2 = function () {
        return _0x2c5470;
    };
    return a0_0x31d2();
}
(function (input) {
    var _0x5c0cf2 = a0_0x145f;
    var inputs = input['replace'](/\r/g, '')[_0x5c0cf2(0x7f)]('\x0a'), data = [], n, line, max_index, a, b;
    n = parseInt(inputs[_0x5c0cf2(0x83)]());
    max_index = 0x65;
    max_value = -0x1;
    while (n--) {
        line = inputs['shift']()['split']('\x20');
        a = parseInt(line[0x0]);
        b = parseInt(line[0x1]);
        if (b > max_value || b === max_value && a < max_index) {
            max_index = a;
            max_value = b;
        }
    }
    console[_0x5c0cf2(0x85)](max_index + '\x20' + max_value);
}(require('fs')['readFileSync'](a0_0x11aab6(0x82), a0_0x11aab6(0x87))));