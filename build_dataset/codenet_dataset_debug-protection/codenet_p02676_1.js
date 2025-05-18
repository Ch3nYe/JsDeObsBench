const main = arg => {
    arg = arg.trim().split("\n");
    const k = arg[0]
    const s = arg[1]
    if(s.length <= k) console.log(s)
    else console.log(s.slice(0, k) + '...')
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'))