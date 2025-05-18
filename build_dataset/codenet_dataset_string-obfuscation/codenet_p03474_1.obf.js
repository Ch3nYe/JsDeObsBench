var a0_0x2dba73 = a0_0x5678;
(function (stringArrayFunction, comparisonValue) {
    var _0x5707f0 = a0_0x5678;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5707f0(0x1cd)) / 0x1 * (-parseInt(_0x5707f0(0x1c9)) / 0x2) + -parseInt(_0x5707f0(0x1ce)) / 0x3 + parseInt(_0x5707f0(0x1d1)) / 0x4 + parseInt(_0x5707f0(0x1c4)) / 0x5 + parseInt(_0x5707f0(0x1d2)) / 0x6 * (parseInt(_0x5707f0(0x1cc)) / 0x7) + -parseInt(_0x5707f0(0x1d0)) / 0x8 * (parseInt(_0x5707f0(0x1c5)) / 0x9) + -parseInt(_0x5707f0(0x1d3)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d7a, 0xed394));
function Main(input) {
    var _0xfa8826 = a0_0x5678;
    input = input['split']('\x0a');
    var a = parseInt(input[0x0]['split']('\x20')[0x0], 0xa);
    var b = parseInt(input[0x0][_0xfa8826(0x1c6)]('\x20')[0x1], 0xa);
    var s = input[0x1];
    var regex = new RegExp(_0xfa8826(0x1ca) + a + _0xfa8826(0x1c3) + b + '}$', 'g');
    var f = s[_0xfa8826(0x1c8)](regex);
    console[_0xfa8826(0x1c7)](f == null ? 'No' : _0xfa8826(0x1cf));
}
function a0_0x5678(FChRcd, key) {
    var stringArray = a0_0x5d7a();
    a0_0x5678 = function (index, key) {
        index = index - 0x1c3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5678(FChRcd, key);
}
function a0_0x5d7a() {
    var _0xdec6f5 = [
        '7159250xYIHeX',
        '18QWunpN',
        'split',
        'log',
        'match',
        '6bctfFC',
        '^[0-9]{',
        'readFileSync',
        '3269TqTogA',
        '237159kMNWpM',
        '2222589IkhSYn',
        'Yes',
        '3005512xGalco',
        '3366760ZFDPao',
        '13698DkCZVG',
        '1643150ipbwyS',
        '}-[0-9]{'
    ];
    a0_0x5d7a = function () {
        return _0xdec6f5;
    };
    return a0_0x5d7a();
}
Main(require('fs')[a0_0x2dba73(0x1cb)]('/dev/stdin', 'utf8'));