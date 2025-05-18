var a0_0x53970a = a0_0x1763;
function a0_0x1763(xGgshj, key) {
    var stringArray = a0_0x58fd();
    a0_0x1763 = function (index, key) {
        index = index - 0x66;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1763(xGgshj, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x473778 = a0_0x1763;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x473778(0x71)) / 0x1 * (parseInt(_0x473778(0x68)) / 0x2) + -parseInt(_0x473778(0x6d)) / 0x3 * (-parseInt(_0x473778(0x6c)) / 0x4) + parseInt(_0x473778(0x77)) / 0x5 * (parseInt(_0x473778(0x67)) / 0x6) + -parseInt(_0x473778(0x79)) / 0x7 * (-parseInt(_0x473778(0x7a)) / 0x8) + -parseInt(_0x473778(0x69)) / 0x9 * (parseInt(_0x473778(0x6a)) / 0xa) + -parseInt(_0x473778(0x70)) / 0xb * (parseInt(_0x473778(0x66)) / 0xc) + parseInt(_0x473778(0x75)) / 0xd * (parseInt(_0x473778(0x78)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x58fd, 0x70386));
function a0_0x58fd() {
    var _0x20e664 = [
        '4341440BcRweQ',
        '276fxflNT',
        '150dudhsB',
        '250EFUQKg',
        '726858aCaMTe',
        '90BdycGX',
        'length',
        '60920YHkctJ',
        '45soVvlE',
        'map',
        'from',
        '134299QeHIwQ',
        '5282TJcrxA',
        'join',
        'utf8',
        'log',
        '24973UYHfMU',
        'readFileSync',
        '18100LtcWhn',
        '9226cqnRbP',
        '7WGxBin'
    ];
    a0_0x58fd = function () {
        return _0x20e664;
    };
    return a0_0x58fd();
}
function Main(input) {
    var _0xc41105 = a0_0x1763;
    var s, K, ref;
    ref = input['split']('\x0a'), s = ref[0x0], K = parseInt(ref[0x1]);
    console[_0xc41105(0x74)](Array[_0xc41105(0x6f)](s)[_0xc41105(0x6e)]((v, i, arr) => {
        var _0x3ddc9d = _0xc41105;
        var code = v['charCodeAt']();
        if (i === arr[_0x3ddc9d(0x6b)] - 0x1) {
            code += K % 0x1a;
            code -= code > 0x7a ? 0x1a : 0x0;
            return String['fromCharCode'](code);
        } else {
            if (v === 'a')
                return v;
            return 0x7b - code <= K ? (K -= 0x7b - code, 'a') : v;
        }
    })[_0xc41105(0x72)](''));
}
Main(require('fs')[a0_0x53970a(0x76)]('/dev/stdin', a0_0x53970a(0x73)));