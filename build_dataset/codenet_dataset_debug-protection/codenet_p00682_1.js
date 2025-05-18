process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (chunk) {
    var input = chunk.trim().split("\n");
    var order = 1;
    while (true) {
        var n = input.shift();
        if (n == 0)
            break;
        var coordinate = [];
        while (n--)
            coordinate.push(input.shift().split(" ").map(Number));
        coordinate.push(coordinate[0]);
        var area = 0;
        for (var i = 0; i < coordinate.length - 1; i++) {
            area += (coordinate[i][0] * coordinate[i + 1][1]) - (coordinate[i][1] * coordinate[i + 1][0]);
        }
        console.log(order + " " + Math.abs(area / 2).toFixed(1));
        input.shift();
        order++;
    }
});