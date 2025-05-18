function main(input) {
  function dist(a, b) {
		return Math.min(b-a, Math.abs(x-a)+Math.abs(y-b)+1);
	}
	
  const inp = input.split(' ');
	const n = inp[0];
	const x = inp[1];
	const y = inp[2];
  
  for(var i=1;i<n; i++) {
    var cnt = 0;
    
    for(var a=1; a<n; a++)
      for(var b=a+1; b<=n; b++)
        if(dist(a,b) == i)
          cnt++;
    
    console.log(cnt);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));