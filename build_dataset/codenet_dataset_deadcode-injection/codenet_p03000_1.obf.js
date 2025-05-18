function a0_0x752a(vtEsZk, key) {
    var stringArray = a0_0x27cd();
    a0_0x752a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x752a(vtEsZk, key);
}
var a0_0x8a7697 = a0_0x752a;
function Main(input) {
    var _0x3cc295 = a0_0x752a;
    lines = input['split']('\x0a');
    firstLine = lines[0x0][_0x3cc295(0x0)]('\x20');
    N = +firstLine[0x0];
    X = +firstLine[0x1];
    secondLine = lines[0x1][_0x3cc295(0x0)]('\x20');
    distanceTravelled = 0x0;
    numBounces = 0x1;
    for (i = 0x0; i < N; i++) {
        distanceTravelled += +secondLine[i];
        if (distanceTravelled <= X) {
            numBounces += 0x1;
        }
    }
    console[_0x3cc295(0x1)](numBounces);
}
Main(require('fs')[a0_0x8a7697(0x2)](a0_0x8a7697(0x3), a0_0x8a7697(0x4)));
function a0_0x27cd() {
    var _0x2af13b = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x27cd = function () {
        return _0x2af13b;
    };
    return a0_0x27cd();
}