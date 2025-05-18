var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var nums = line['split']('')['map'](function (n) {
        return +n;
    });
    var n = nums['length'];
    while (n > 0x1) {
        var a = [];
        for (var i = 0x0; i < n - 0x1; i++) {
            a['push']((nums[i] + nums[i + 0x1]) % 0xa);
        }
        n--;
        nums = a;
    }
    console['log'](nums[0x0]);
}