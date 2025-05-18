function a0_0x1840() {
    const _0x2cf6c7 = [
        '8038Ljcoya',
        'utf8',
        '9054hgyZwx',
        '6296685spKLRE',
        '1928qZfqAV',
        '27JpNeRY',
        '233vVCNzU',
        '35UoFQzs',
        '2170024gJemgR',
        '63390iNLOnU',
        'abs',
        'max',
        'split',
        '1933254jypfoM',
        'map',
        'shift',
        '2012592tidRvR',
        '1012dRAGGj'
    ];
    a0_0x1840 = function () {
        return _0x2cf6c7;
    };
    return a0_0x1840();
}
const a0_0x48ea4e = a0_0xb922;
function a0_0xb922(QCRFfU, key) {
    const stringArray = a0_0x1840();
    a0_0xb922 = function (index, key) {
        index = index - 0x68;
        let value = stringArray[index];
        return value;
    };
    return a0_0xb922(QCRFfU, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5cd2a8 = a0_0xb922;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5cd2a8(0x76)) / 0x1 * (-parseInt(_0x5cd2a8(0x70)) / 0x2) + -parseInt(_0x5cd2a8(0x72)) / 0x3 * (-parseInt(_0x5cd2a8(0x74)) / 0x4) + parseInt(_0x5cd2a8(0x73)) / 0x5 + parseInt(_0x5cd2a8(0x6b)) / 0x6 * (-parseInt(_0x5cd2a8(0x77)) / 0x7) + -parseInt(_0x5cd2a8(0x78)) / 0x8 * (parseInt(_0x5cd2a8(0x75)) / 0x9) + -parseInt(_0x5cd2a8(0x79)) / 0xa * (parseInt(_0x5cd2a8(0x6f)) / 0xb) + parseInt(_0x5cd2a8(0x6e)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1840, 0xc5cb4));
function main(input) {
    const _0x1219f9 = a0_0xb922;
    const lines = input[_0x1219f9(0x6a)]('\x0a');
    const NZW = lines[_0x1219f9(0x6d)]()['split']('\x20')[_0x1219f9(0x6c)](x => parseInt(x));
    const N = NZW[0x0];
    const Z = NZW[0x1];
    const W = NZW[0x2];
    const A = lines['shift']()[_0x1219f9(0x6a)]('\x20')[_0x1219f9(0x6c)](x => parseInt(x));
    const initial = Math['abs'](Z - W);
    var fetch_n_1 = Math[_0x1219f9(0x68)](A[N - 0x1] - A[N - 0x2]);
    if (N < 0x2) {
        fetch_n_1 = 0x0;
    }
    const fetch_n = Math[_0x1219f9(0x68)](A[N - 0x1] - W);
    const result = Math[_0x1219f9(0x69)](initial, fetch_n_1, fetch_n);
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x48ea4e(0x71)));