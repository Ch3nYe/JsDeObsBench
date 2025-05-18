function Main(input) {
	a=input.split('\n');
	b=a[0].split(' ').map(Number);
	c=a[1].split(' ').map(Number);

	N=b[0], K=b[1], r=0;

	while(c.length>1){
		r++;
		d=[];
		for(i=0;i<K;i++){
			d.push(c[i]);
		}

		for(i=0;i<K;i++){
			if(d.sort()[0]!==c[i]){
				c[i]='';
			}
		}

		c=c.join('').split('').map(Number);
	}

	console.log(r);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));