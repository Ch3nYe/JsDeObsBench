var data = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = data.trim().split("\n");
var line = 0;
while (true) {
    var nm = input[line].split(" ").map(Number);
    line++;
    var n = nm[0];
    var m = nm[1];
    if (n == 0 && m == 0)
        break;
    var infected = [];
    for (var i = 0; i < n; i++)
        infected[i] = true;
    infected[0] = false;
    var tsd = [];
    for (var i = 0; i < m; i++) {
        var packet = input[line].split(" ").map(Number);
        line++;
        tsd.push([packet[0], packet[1] - 1, packet[2] - 1]);
    }
    tsd.sort(function (a, b) {
        return a[0] - b[0];
    });
    tsd.forEach(function (packet) {
        var s = packet[1];
        var d = packet[2];
        if (!infected[s])
            infected[d] = false;
    });
    var answer = 0;
    infected.forEach(function (packet) {
        if (!packet)
            answer++;
    });
    console.log(answer);
}