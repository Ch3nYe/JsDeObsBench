var data = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var input = data['trim']()['split']('\x0a');
var line = 0x0;
while (!![]) {
    var nm = input[line]['split']('\x20')['map'](Number);
    line++;
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0 && m == 0x0)
        break;
    var infected = [];
    for (var i = 0x0; i < n; i++)
        infected[i] = !![];
    infected[0x0] = ![];
    var tsd = [];
    for (var i = 0x0; i < m; i++) {
        var packet = input[line]['split']('\x20')['map'](Number);
        line++;
        tsd['push']([
            packet[0x0],
            packet[0x1] - 0x1,
            packet[0x2] - 0x1
        ]);
    }
    tsd['sort'](function (_0x66efd, _0x59d221) {
        return _0x66efd[0x0] - _0x59d221[0x0];
    });
    tsd['forEach'](function (_0x2297a4) {
        var _0x1e5cd7 = _0x2297a4[0x1];
        var _0x3a5c99 = _0x2297a4[0x2];
        if (!infected[_0x1e5cd7])
            infected[_0x3a5c99] = ![];
    });
    var answer = 0x0;
    infected['forEach'](function (_0x226a57) {
        if (!_0x226a57)
            answer++;
    });
    console['log'](answer);
}