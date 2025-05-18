var a0_0x1e5320 = a0_0x5068;
function a0_0x4216() {
    var _0x21a32f = [
        'split',
        'pop',
        'length',
        'push',
        'unshift',
        'floor',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x4216 = function () {
        return _0x21a32f;
    };
    return a0_0x4216();
}
function Main(input) {
    var _0x3e8de9 = a0_0x5068;
    input = input[_0x3e8de9(0x0)]('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input[_0x3e8de9(0x1)]();
    }
    const N = input[0x0] - 0x0;
    var colors = [];
    var temp;
    var min, max, mid;
    for (var i = 0x1; i < input[_0x3e8de9(0x2)]; i++) {
        temp = input[i] - 0x0;
        if (colors['length'] === 0x0) {
            colors[_0x3e8de9(0x3)](temp);
            continue;
        }
        if (temp <= colors[0x0]) {
            colors[_0x3e8de9(0x4)](temp);
            continue;
        }
        if (temp > colors[colors['length'] - 0x1]) {
            colors[colors[_0x3e8de9(0x2)] - 0x1] = temp;
            continue;
        }
        min = 0x0;
        max = colors['length'] - 0x1;
        while (max - min > 0x1) {
            mid = Math[_0x3e8de9(0x5)]((max + min) / 0x2);
            if (colors[mid] <= temp) {
                max = mid;
            } else {
                min = mid;
            }
        }
        colors[min] = temp;
    }
    console[_0x3e8de9(0x6)](colors['length']);
}
function a0_0x5068(KuBZiR, key) {
    var stringArray = a0_0x4216();
    a0_0x5068 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5068(KuBZiR, key);
}
Main(require('fs')[a0_0x1e5320(0x7)]('/dev/stdin', a0_0x1e5320(0x8)));