# 解説

<iframe width="560" height="315" src="https://www.youtube.com/embed/ta7aV5P8vpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 解答例

### fibonacci を繰り返し処理で解いてみよう

```ts
export const fibonacciLoop = (n: number): number => {
  let a = 0;
  let b = 1;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }

  return a;
};
```

### fibonacci を再帰関数を使って解いてみよう

```ts
export const fibonacciRecursive = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
```

### fibonacci をメモ化を使って解いてみよう

```ts
const memo = Array(1000);
export const fibonacciMemo = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  if (memo[n] === undefined) {
    memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  }

  return memo[n];
};
```

### fibonacci を動的計画法を使って解いてみよう

```ts
export const fibonacciDp = (n: number): number => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
};
```
