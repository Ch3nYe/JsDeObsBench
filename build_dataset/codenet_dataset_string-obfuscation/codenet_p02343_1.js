const findSet = p => {
	return x => {
		if (x != p[x]) p[x] = findSet(p)(p[x]);
		return p[x];
	}
}
const link = (p,r) => {
	return (x,y) => {
		if (r[x] > r[y]) p[y] = x;
		else {
			p[x] = y;
			if (r[x] === r[y]) r[y]++;
		}
	}
}
const dsFactory = n => {
	this.p = [];
	this.r = [];
	for (let i = 0; i < n; i++) {
		this.p[i] = i;
		this.r[i] = 0;
	}
	this.findSet = findSet(this.p);
	this.link = link(this.p,this.r);
	return {
		same: (x,y) => this.findSet(x) === this.findSet(y),
		unite: (x,y) => this.link(this.findSet(x),this.findSet(y))
	}
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split("\n");
const [n,q] = lines.shift().split(" ").map(Number);

const ds = dsFactory(n);

lines.forEach(x => {
	const [t,a,b] = x.split(" ").map(Number);
	switch (t) {
		case 0:
			ds.unite(a,b);
			break;
		case 1:
			const ret = ds.same(a,b) ? 1 : 0;
			console.log(ret);
			break;
	}
});
