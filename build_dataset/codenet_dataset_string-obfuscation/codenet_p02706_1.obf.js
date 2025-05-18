var a0_0x4e1252 = a0_0x4b7a;
(function (stringArrayFunction, comparisonValue) {
    var _0x254e5c = a0_0x4b7a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x254e5c(0x189)) / 0x1 + -parseInt(_0x254e5c(0x18e)) / 0x2 * (-parseInt(_0x254e5c(0x191)) / 0x3) + -parseInt(_0x254e5c(0x18d)) / 0x4 * (parseInt(_0x254e5c(0x190)) / 0x5) + -parseInt(_0x254e5c(0x195)) / 0x6 * (parseInt(_0x254e5c(0x197)) / 0x7) + parseInt(_0x254e5c(0x194)) / 0x8 + -parseInt(_0x254e5c(0x18c)) / 0x9 + -parseInt(_0x254e5c(0x196)) / 0xa * (-parseInt(_0x254e5c(0x18b)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa568, 0x56d12));
const main = inputs => {
    var _0x1f955d = a0_0x4b7a;
    var array = inputs[0x0]['split']('\x20');
    var array2 = inputs[0x1]['split']('\x20');
    var N = array[0x0] - 0x0;
    var M = array[0x1] - 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < M; i++) {
        sum = sum + Number(array2[i]);
    }
    console[_0x1f955d(0x192)](N - sum < 0x0 ? -0x1 : N - sum);
};
function a0_0xa568() {
    var _0x24c13a = [
        '27pImIkF',
        'log',
        'split',
        '4718576UVlHHP',
        '57948LVjFCm',
        '10igcfgk',
        '476ZZoCrM',
        '485916nKqVvv',
        '/dev/stdin',
        '8466414KkLSOZ',
        '5353542IRtsrB',
        '4OgVobX',
        '2674TwLHYN',
        'trim',
        '1251305VJtCdW'
    ];
    a0_0xa568 = function () {
        return _0x24c13a;
    };
    return a0_0xa568();
}
function a0_0x4b7a(EFjVOp, key) {
    var stringArray = a0_0xa568();
    a0_0x4b7a = function (index, key) {
        index = index - 0x189;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b7a(EFjVOp, key);
}
main(require('fs')['readFileSync'](a0_0x4e1252(0x18a), 'UTF-8')[a0_0x4e1252(0x18f)]()[a0_0x4e1252(0x193)]('\x0a'));