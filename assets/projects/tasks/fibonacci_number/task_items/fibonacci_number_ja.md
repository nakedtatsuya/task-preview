# いろんな方法でフィボナッチ数を計算しよう

フィボナッチ数列は、次のような整数の数列です。

`0, 1, 1, 2, 3, 5, 8, 13, 21, ...`

数列の各項は、その前の 2 つの項の和によって定義されます。すなわち、`F(2) = 1、F(2) = 2、F(3) = 3、F(n) = F(n-1) + F(n-2) (n > 1)` となります。

0 番目と 1 番目はそれぞれ `F(0) = 0、F(1) = 1` とします。

与えられた整数 n に対して、n 番目のフィボナッチ数を計算するプログラムを作成してください。

## 満たしたい要件

- 与えられた整数 n に対して、n 番目のフィボナッチ数を返す
- フィボナッチ数列を計算する関数を４つの方法で実装する
  - 繰り返し処理
  - 再帰関数
  - メモ化
  - 動的計画法

### 入力:

- n: 求めたいフィボナッチ数の番号 (0 <= n <= 50)

### 出力:

- n 番目のフィボナッチ数

### 例:

- 入力: 6
- 出力: 8

## fibonacci を繰り返し処理で解いてみよう

- 繰り返し処理で実装してみましょう
  - `src/fibonacci_number/loop.ts` に実装してください
- `npm run start:loop` で実装した関数を実行できます
  - 実行後に `n` の値を入力して `Enter` を押してください

## fibonacci を再帰関数を使って解いてみよう

- 再帰関数を使って実装してみましょう
  - `src/fibonacci_number/recursive.ts` に実装してください
- `npm run start:recursive` で実装した関数を実行できます
  - 実行後に `n` の値を入力して `Enter` を押してください

`n` の値をおおよそ 40 以上に増やすと計算が遅くなることを確認してください。

## fibonacci をメモ化を使って解いてみよう

- メモ化を利用した再帰関数で実装してみましょう
  - `src/fibonacci_number/memo.ts` に実装してください
- `npm run start:memo` で実装した関数を実行できます
  - 実行後に `n` の値を入力して `Enter` を押してください

`n` の値が増えても計算できることを確認してください。

## fibonacci を動的計画法を使って解いてみよう

- 動的計画法を使って実装してみましょう
  - `src/fibonacci_number/dynamic_programming.ts` に実装してください
- `npm run start:dynamic_programming` で実装した関数を実行できます
  - 実行後に `n` の値を入力して `Enter` を押してください

それぞれの実装のパフォーマンスを見比べてみましょう。

余裕があれば、速度だけでなくメモリ使用量も比較してみましょう。
