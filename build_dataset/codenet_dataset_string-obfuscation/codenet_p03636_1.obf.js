var a0_0x4ed367 = a0_0x47a5;
function a0_0x47a5(Mvxyge, key) {
    var stringArray = a0_0x52e1();
    a0_0x47a5 = function (index, key) {
        index = index - 0x173;
        var value = stringArray[index];
        return value;
    };
    return a0_0x47a5(Mvxyge, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3dc50d = a0_0x47a5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3dc50d(0x178)) / 0x1 * (parseInt(_0x3dc50d(0x17d)) / 0x2) + -parseInt(_0x3dc50d(0x173)) / 0x3 * (parseInt(_0x3dc50d(0x176)) / 0x4) + -parseInt(_0x3dc50d(0x177)) / 0x5 + parseInt(_0x3dc50d(0x174)) / 0x6 + -parseInt(_0x3dc50d(0x179)) / 0x7 + parseInt(_0x3dc50d(0x175)) / 0x8 + parseInt(_0x3dc50d(0x17a)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x52e1, 0x85ad9));
function Main(input) {
    var _0xde8b64 = a0_0x47a5;
    input = String(input);
    var len = input['length'];
    var first = input['substring'](0x0, 0x1);
    if (len < 0x4) {
        var mid = 0x1;
    } else {
        var mid = len - 0x2;
    }
    var last = input[_0xde8b64(0x17f)](len - 0x1, len);
    console[_0xde8b64(0x17e)]('%s', first + String(mid) + last);
}
Main(require('fs')[a0_0x4ed367(0x17b)](a0_0x4ed367(0x17c), 'utf8'));
function a0_0x52e1() {
    var _0xcb4ce7 = [
        'substring',
        '1527maPRER',
        '2326074FPfvkG',
        '4038192JOZLXx',
        '6788unPKlP',
        '3835040kYVTIW',
        '469333PnZWkK',
        '1160005zFPLTO',
        '17288289VYXFaU',
        'readFileSync',
        '/dev/stdin',
        '2McQMJJ',
        'log'
    ];
    a0_0x52e1 = function () {
        return _0xcb4ce7;
    };
    return a0_0x52e1();
}