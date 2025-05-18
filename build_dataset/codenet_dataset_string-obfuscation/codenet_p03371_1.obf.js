var a0_0x3a4057 = a0_0x3c61;
(function (stringArrayFunction, comparisonValue) {
    var _0x254024 = a0_0x3c61;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x254024(0xae)) / 0x1 * (-parseInt(_0x254024(0xac)) / 0x2) + parseInt(_0x254024(0xa9)) / 0x3 + parseInt(_0x254024(0xa5)) / 0x4 * (parseInt(_0x254024(0xa0)) / 0x5) + parseInt(_0x254024(0xa7)) / 0x6 * (-parseInt(_0x254024(0xad)) / 0x7) + parseInt(_0x254024(0xab)) / 0x8 + -parseInt(_0x254024(0xaa)) / 0x9 + -parseInt(_0x254024(0xa1)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c09, 0xe0f96));
function Main(input) {
    var _0xeaaea0 = a0_0x3c61;
    input = input[_0xeaaea0(0xa8)]('\x0a');
    A = parseInt(input[0x0][_0xeaaea0(0xa8)]('\x20')[0x0]);
    B = parseInt(input[0x0]['split']('\x20')[0x1]);
    C = parseInt(input[0x0][_0xeaaea0(0xa8)]('\x20')[0x2]);
    X = parseInt(input[0x0]['split']('\x20')[0x3]);
    Y = parseInt(input[0x0]['split']('\x20')[0x4]);
    var ans = 0x0;
    if (C <= (A + B) / 0x2 && C >= Math['min'](A, B)) {
        if (X <= Y) {
            ans = C * X * 0x2 + B * (Y - X);
        } else {
            ans = C * Y * 0x2 + A * (X - Y);
        }
    } else if (C <= (A + B) / 0x2 && C < Math[_0xeaaea0(0x9f)](A, B)) {
        ans = C * Math['max'](X, Y) * 0x2;
    } else {
        ans = X * A + Y * B;
    }
    console['log']('%s', ans);
}
function debug() {
    var _0x27d3ec = a0_0x3c61;
    var input = document['getElementById']('input')[_0x27d3ec(0xa4)];
    Main(input);
}
function a0_0x3c61(smImoM, key) {
    var stringArray = a0_0x1c09();
    a0_0x3c61 = function (index, key) {
        index = index - 0x9f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c61(smImoM, key);
}
function a0_0x1c09() {
    var _0x607ebf = [
        '7qqKgie',
        '1nNnpIH',
        'min',
        '235JSWktu',
        '6592240GicVUm',
        '/dev/stdin',
        'utf8',
        'value',
        '22460LiznyZ',
        'readFileSync',
        '7507212ieausn',
        'split',
        '851670fMuyif',
        '2126466JQNnrR',
        '9622928NPAMJA',
        '2635066dprjHI'
    ];
    a0_0x1c09 = function () {
        return _0x607ebf;
    };
    return a0_0x1c09();
}
Main(require('fs')[a0_0x3a4057(0xa6)](a0_0x3a4057(0xa2), a0_0x3a4057(0xa3)));