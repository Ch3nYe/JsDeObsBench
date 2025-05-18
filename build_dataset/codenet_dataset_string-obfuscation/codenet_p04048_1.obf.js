function a0_0x384c(dJWdfQ, key) {
    var stringArray = a0_0x342a();
    a0_0x384c = function (index, key) {
        index = index - 0x72;
        var value = stringArray[index];
        return value;
    };
    return a0_0x384c(dJWdfQ, key);
}
var a0_0x1733d7 = a0_0x384c;
function a0_0x342a() {
    var _0x35dded = [
        '1887720LQaRqw',
        'split',
        '1041kYRAeJ',
        '109568HOroed',
        '422226TlPPMy',
        '4418bsErFx',
        '790740ZEFNSS',
        '399198jlwiFN',
        '35JPqkPZ',
        '5936643jVOsDx',
        '110osozjI',
        'log',
        'utf8'
    ];
    a0_0x342a = function () {
        return _0x35dded;
    };
    return a0_0x342a();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4ad3a1 = a0_0x384c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4ad3a1(0x78)) / 0x1 + parseInt(_0x4ad3a1(0x79)) / 0x2 * (parseInt(_0x4ad3a1(0x76)) / 0x3) + parseInt(_0x4ad3a1(0x77)) / 0x4 * (-parseInt(_0x4ad3a1(0x7e)) / 0x5) + -parseInt(_0x4ad3a1(0x7b)) / 0x6 * (-parseInt(_0x4ad3a1(0x7c)) / 0x7) + parseInt(_0x4ad3a1(0x74)) / 0x8 + -parseInt(_0x4ad3a1(0x7d)) / 0x9 + -parseInt(_0x4ad3a1(0x7a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x342a, 0x65936));
function Main(data) {
    var _0x366092 = a0_0x384c;
    data = data[_0x366092(0x75)]('\x20');
    data[0x0] = Number(data[0x0]);
    data[0x1] = Number(data[0x1]);
    var a = data[0x1] + (data[0x0] - data[0x1]) + (data[0x0] - (data[0x0] - data[0x1])) * 0x2 + (data[0x0] - data[0x1] - (data[0x0] - (data[0x0] - data[0x1]))) * 0x3;
    console[_0x366092(0x72)](a);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x1733d7(0x73)));