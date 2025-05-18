"use strict"

function main(arg) {
    arg = arg.trim().split("\n")
    arg.shift()
    var H = arg.length
    var W = arg[0].length
    var m1 = []
    for (var i = 0; i < arg.length; i++) {
        m1.push(arg[i].split(''))
    }
    var i = 0
    var slist = []
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
        if (m1[y][x] === '#') {
            slist.push([y, x])
        }
    }
    var tmp = []
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
        if (m1[y][x] === '.') {
            var minD = Number.MAX_SAFE_INTEGER
            for (var i = 0; i < slist.length; i++) {
                var _y = slist[i][0]
                var _x = slist[i][1]
                var d = Math.abs(_y - y) + Math.abs(_x - x)
                if (d < minD) {
                    minD = d
                }
            }
            tmp.push(minD)
        }
    }
    console.log(Math.max(...tmp))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));