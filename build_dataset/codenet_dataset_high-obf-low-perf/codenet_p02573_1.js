const processData = (lines) => {
    const [n, m] = lines[0].split(' ').map( x => +x)
    let friendships = {}
    for (let i=0; i<m; i++) {
        const f = lines[i+1].split(' ').map(x => +x)
        let friendItem = friendships[f[0]] || friendships[f[1]] || {}
        friendships[f[0]] = friendItem
        friendships[f[1]] = friendItem

        friendItem[f[0]] = true
        friendItem[f[1]] = true
    }
    
    let maxCount = 1
    for (let p in friendships) {
        let count = 0
        for (let t2 in friendships[p]) {
            count++
        }
        maxCount = Math.max(maxCount, count)
    }

    console.log(maxCount)
}

let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = i.split(EOL) /*your input text, split by lines*/
    processData(lines)
})
