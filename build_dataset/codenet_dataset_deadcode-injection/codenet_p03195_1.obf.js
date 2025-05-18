function a0_0x3f8c(fiZmNu, key) {
    var stringArray = a0_0x36f5();
    a0_0x3f8c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f8c(fiZmNu, key);
}
var a0_0x36b785 = a0_0x3f8c;
function main(input) {
    var _0x437e4c = a0_0x3f8c;
    var line1 = parseInt(input[0x0]);
    var ans = ![];
    for (var i = 0x1; i < input[_0x437e4c(0x0)]; i++) {
        if (_0x437e4c(0x1) !== _0x437e4c(0x1)) {
            var n = parseInt(input[i]);
            if (n % 0x2 === 0x1)
                ans = !![];
            ;
        } else {
            var n = parseInt(input[i]);
            if (n % 0x2 === 0x1)
                ans = !![];
            ;
        }
    }
    console[_0x437e4c(0x2)](ans ? _0x437e4c(0x3) : _0x437e4c(0x4));
}
function parse(line) {
    var _0x4c0b6f = a0_0x3f8c;
    var ret = [];
    var arr = line[_0x4c0b6f(0x5)]('\x20');
    for (var i = 0x0; i < arr[_0x4c0b6f(0x0)]; i++) {
        ret[_0x4c0b6f(0x6)](parseInt(arr[i]));
    }
    return ret;
}
var input = '';
process['stdin'][a0_0x36b785(0x7)]();
process[a0_0x36b785(0x8)][a0_0x36b785(0x9)]('utf8');
function a0_0x36f5() {
    var _0x4ea906 = [
        'length',
        'jdCiX',
        'log',
        'first',
        'second',
        'split',
        'push',
        'resume',
        'stdin',
        'setEncoding',
        'data',
        'end'
    ];
    a0_0x36f5 = function () {
        return _0x4ea906;
    };
    return a0_0x36f5();
}
process[a0_0x36b785(0x8)]['on'](a0_0x36b785(0xa), function (chunk) {
    input += chunk;
});
process[a0_0x36b785(0x8)]['on'](a0_0x36b785(0xb), function () {
    var _0x3fda6a = a0_0x3f8c;
    input = input[_0x3fda6a(0x5)]('\x0a');
    main(input);
});