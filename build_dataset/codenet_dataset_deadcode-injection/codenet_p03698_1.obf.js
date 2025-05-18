var a0_0x389a12 = a0_0x3906;
function a0_0x3906(DfHJsw, key) {
    var stringArray = a0_0x4961();
    a0_0x3906 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3906(DfHJsw, key);
}
function main(data) {
    var _0x4c05f6 = a0_0x3906;
    input = data[_0x4c05f6(0x0)]('');
    len = input[_0x4c05f6(0x1)];
    temp = [];
    for (i = 0x0; i < len; i += 0x1) {
        if (temp[_0x4c05f6(0x2)](input[i]) === -0x1) {
            temp[_0x4c05f6(0x3)](input[i]);
        } else {
            console['log']('no');
            return;
        }
    }
    console[_0x4c05f6(0x4)](_0x4c05f6(0x5));
}
function a0_0x4961() {
    var _0x40d5ba = [
        'split',
        'length',
        'indexOf',
        'push',
        'log',
        'yes',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4961 = function () {
        return _0x40d5ba;
    };
    return a0_0x4961();
}
main(require('fs')[a0_0x389a12(0x6)](a0_0x389a12(0x7), 'utf8'));