//#if SITUATION == FIBONACCHI_NUMBER
//#if ANSWER == 1
const memo = Array(1000);
//#endif
export const fibonacciMemo = (n: number): number => {
	//#if ANSWER == 1
	if (n <= 1) {
		return n;
	}

	if (memo[n] === undefined) {
		memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
	}

	return memo[n];
	//#endif
};
//#endif
