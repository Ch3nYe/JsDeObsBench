var a0_0x5f195c = a0_0x527a;
function main(s) {
    var add = 0x0;
    for (var i = 0x0; i < 0x3; i++) {
        if (s[i] == 'o') {
            add++;
        }
    }
    console['log'](0x2bc + add * 0x64);
}
function a0_0x527a(EjuqVY, key) {
    var stringArray = a0_0x4133();
    a0_0x527a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x527a(EjuqVY, key);
}
function a0_0x4133() {
    var _0x1bba41 = [
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4133 = function () {
        return _0x1bba41;
    };
    return a0_0x4133();
}
main(require('fs')[a0_0x5f195c(0x0)](a0_0x5f195c(0x1), a0_0x5f195c(0x2)));