const lcs = (s1, s2, n, m) => {
	if (n === 0 || m === 0) return 0;
	if (s1[n - 1] === s2[m - 1]) return 1 + lcs(s1, s2, n - 1, m - 1);
	else return Math.max(lcs(s1, s2, n, m - 1), lcs(s2, s1, n - 1, m));
};

const s1 = "abaaba";
const s2 = "babbab";
const n = s1.length;
const m = s2.length;

console.log(lcs(s1, s2, n, m));
