var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().replace(/\n/g, " ").split(" ");
var n = arr.shift() - 0;
var a = [];
for (var i = 0; i < 10000; i++) a[i] = false;
for (var i = 0; i < n; i++) {
    a[arr[i] - 0] = true;
    if (i + 1 < n) a[(arr[i] + arr[i + 1]) - 0] = true;
    if (i + 2 < n) a[(arr[i] + arr[i + 1] + arr[i + 2]) - 0] = true;
    if (i + 3 < n) a[(arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3]) - 0] = true;
}
for (var i = 0; i < 10000; i++) {
    if (a[i] == false) {
        console.log(i);
        break;
    }
}