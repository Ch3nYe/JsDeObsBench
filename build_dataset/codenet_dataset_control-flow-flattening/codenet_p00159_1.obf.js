let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
let Arr = input['trim']()['split']('\x0a');
let bmis = new Map();
while (0x1) {
    let n = Arr[0x0];
    if (n == 0x0)
        break;
    Arr['shift']();
    for (var i = 0x0; i < n; ++i) {
        var mNwvTu = '5|4|1|0|3|2'['split']('|');
        var FpXjLh = 0x0;
        while (!![]) {
            switch (mNwvTu[FpXjLh++]) {
            case '0':
                var dif = Math['abs'](0x16 - bmi);
                continue;
            case '1':
                var bmi = nums[0x2] / (m * m);
                continue;
            case '2':
                Arr['shift']();
                continue;
            case '3':
                bmis['set'](nums[0x0]['toString'](), dif);
                continue;
            case '4':
                var m = nums[0x1] / 0x64;
                continue;
            case '5':
                var nums = Arr[0x0]['split']('\x20')['map'](Number);
                continue;
            }
            break;
        }
    }
    let sorted = new Map([...bmis['entries']()]['sort']((a, b) => a[0x1] - b[0x1]));
    console['log'](sorted['keys']()['next']()['value']);
}