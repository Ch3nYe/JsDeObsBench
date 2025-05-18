const a0_0x122ddb = a0_0x11dc;
function Main(input) {
    const _0x42ca87 = a0_0x11dc;
    input = input['split']('\x0a');
    if (input[input[_0x42ca87(0x0)] - 0x1] === '') {
        input[_0x42ca87(0x1)]();
    }
    const N = input[0x0][_0x42ca87(0x2)]('\x20')[0x0] - 0x0;
    const Z = input[0x0][_0x42ca87(0x2)]('\x20')[0x1] - 0x0;
    const W = input[0x0]['split']('\x20')[0x2] - 0x0;
    const a = input[0x1][_0x42ca87(0x2)]('\x20')['map'](e => {
        return e - 0x0;
    });
    if (a[_0x42ca87(0x0)] === 0x1) {
        console[_0x42ca87(0x3)](Math[_0x42ca87(0x4)](W - a[0x0]));
        return;
    }
    var x, y;
    x = new Array(N);
    y = new Array(N);
    for (var i = N - 0x1; i >= 0x0; i--) {
        if (i === N - 0x1) {
            y[i] = Math[_0x42ca87(0x4)](a[N - 0x1] - a[N - 0x2]);
            x[i] = Math[_0x42ca87(0x4)](a[N - 0x1] - a[N - 0x2]);
            continue;
        }
        y[i] = Math['min'](...x[_0x42ca87(0x5)](i + 0x1), i !== 0x0 ? Math[_0x42ca87(0x4)](a[i - 0x1] - a[N - 0x1]) : Math[_0x42ca87(0x4)](Z - a[N - 0x1]));
        x[i] = Math['max'](...y[_0x42ca87(0x5)](i + 0x1), i !== 0x0 ? Math['abs'](a[i - 0x1] - a[N - 0x1]) : Math[_0x42ca87(0x4)](W - a[N - 0x1]));
    }
    console[_0x42ca87(0x3)](Math[_0x42ca87(0x6)](...x));
}
function a0_0x11dc(XLIGQP, key) {
    const stringArray = a0_0x559f();
    a0_0x11dc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x11dc(XLIGQP, key);
}
Main(require('fs')[a0_0x122ddb(0x7)]('/dev/stdin', a0_0x122ddb(0x8)));
function a0_0x559f() {
    const _0x4ba641 = [
        'length',
        'pop',
        'split',
        'log',
        'abs',
        'slice',
        'max',
        'readFileSync',
        'utf8'
    ];
    a0_0x559f = function () {
        return _0x4ba641;
    };
    return a0_0x559f();
}