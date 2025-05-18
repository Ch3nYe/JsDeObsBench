
function main(input){
    input = input.split(/\s/);
    let h = parseInt(input[0]);
    let w = parseInt(input[1]);
    let mp = [];
    for(let i = 2; i < 2 + h; i++) mp.push(input[i]);

    function check(x, y){
	let res = 0;
	for(let i = 0;i < h;i++)
	    if(mp[i][x] == '#') {
		res++;
		break;
	    }

	for(let j = 0;j < w;j++)
	    if(mp[y][j] == '#') {
		res++;
		break;
	    }
	return res == 2;
    }

    for(let i = 0; i < h;i++){
	ans = ''
	for(let j = 0; j < w;j++)
	    if( check(j, i) ) ans = ans + mp[i][j];
	if(ans != '') console.log(ans);
    }
    
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
