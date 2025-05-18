var a0_0x5854ca = a0_0x3405;
(function (stringArrayFunction, comparisonValue) {
    var _0x9ff888 = a0_0x3405;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x9ff888(0x1a2)) / 0x1 + -parseInt(_0x9ff888(0x1ae)) / 0x2 * (parseInt(_0x9ff888(0x19c)) / 0x3) + parseInt(_0x9ff888(0x1a4)) / 0x4 * (parseInt(_0x9ff888(0x1ac)) / 0x5) + -parseInt(_0x9ff888(0x19a)) / 0x6 + parseInt(_0x9ff888(0x1a9)) / 0x7 + -parseInt(_0x9ff888(0x198)) / 0x8 * (parseInt(_0x9ff888(0x1a0)) / 0x9) + parseInt(_0x9ff888(0x1a5)) / 0xa * (parseInt(_0x9ff888(0x1ad)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6822, 0x77919));
function a0_0x3405(uHznMI, key) {
    var stringArray = a0_0x6822();
    a0_0x3405 = function (index, key) {
        index = index - 0x195;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3405(uHznMI, key);
}
function a0_0x6822() {
    var _0x5e57dd = [
        'readline',
        'map',
        '10784oMvXav',
        'stdin',
        '946218wiDVmw',
        'push',
        '3MzxKdo',
        'line',
        'utf8',
        'YES',
        '4131TbmxVF',
        'close',
        '899697dQwMDQ',
        'sort',
        '758988ZTHOiP',
        '59560FYvMyP',
        'filter',
        'setEncoding',
        'reduce',
        '5520361yoxNfO',
        'split',
        'stdout',
        '25IcapoA',
        '2310LsGYfe',
        '1644466PBkUed',
        'resume'
    ];
    a0_0x6822 = function () {
        return _0x5e57dd;
    };
    return a0_0x6822();
}
process[a0_0x5854ca(0x199)][a0_0x5854ca(0x195)]();
process[a0_0x5854ca(0x199)][a0_0x5854ca(0x1a7)](a0_0x5854ca(0x19e));
var lines = [];
var reader = require(a0_0x5854ca(0x196))['createInterface']({
    'input': process['stdin'],
    'output': process[a0_0x5854ca(0x1ab)]
});
reader['on'](a0_0x5854ca(0x19d), line => {
    var _0x4a3dff = a0_0x5854ca;
    lines[_0x4a3dff(0x19b)](line);
});
reader['on'](a0_0x5854ca(0x1a1), () => {
    var _0x20d94f = a0_0x5854ca;
    const a = lines[0x1][_0x20d94f(0x1aa)]('\x20')['map'](v => v - 0x0);
    const b = lines[0x1][_0x20d94f(0x1aa)]('\x20')[_0x20d94f(0x197)](v => v - 0x0)[_0x20d94f(0x1a3)]((a, b) => a - b);
    let ans = a[_0x20d94f(0x1a6)]((v, i) => v != b[i])['length'];
    console['log'](ans <= 0x2 ? _0x20d94f(0x19f) : 'NO');
});
min = (...a) => {
    var _0x1e037b = a0_0x5854ca;
    return a[_0x1e037b(0x1a8)]((a, b) => a < b ? a : b, a[0x0]);
};