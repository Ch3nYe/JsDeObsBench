function Main(input) {
input = input.split("\n");
    var a1 = input[1].split(' ').map(e => { return parseInt(e) })
    var a2 = input[2].split(' ').map(e => { return parseInt(e) })
    var j = a1.length - 1
    var m = 0, n = a1.length - 2
    var r = 0;
    var temp;

    for (var i = j; i >= m; i--) {
        temp = sum(a1.slice(m, i+1)) + sum(a2.slice(i))
        if (r < temp) r = temp
    }

    function sum(arr) {
        var r = 0
        for (var i = 0; i < arr.length; i++) {
            r += arr[i]
        }
        return r
    }

    console.log(r)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));