# 二分探索を使って貴重な宝石を探そう

あなたは、宝石商のアシスタントとして働いています。ある日、宝石商がある特別な宝石を探してほしいと依頼してきました。彼は、昇順に並べられた宝石のリストを持っており、各宝石には一意の ID 番号が割り振られています。あなたの仕事は、指定された ID 番号を持つ宝石がリストに存在するかどうかを調べることです。

二分探索アルゴリズムを用いて、指定された ID 番号の宝石がリストに存在するかどうかを判定する TypeScript プログラムを作成してください。リスト内に指定された ID 番号の宝石が存在すればそのインデックスを、存在しなければ-1 を返すように実装してください。

## 満たしたい要件

- 配列内に目標値が存在すればそのインデックスを返す
- 存在しなければ -1 を返す
- 二分探索のアルゴリズムを使用すること
- `src/binary_search/binary_search.ts` に実装してください

## 制約

- 配列: 整数の配列（昇順に整列されており、要素数は 1 以上 1000000 以下）
- 目標値: 探索対象の整数（-10000000000 以上 10000000000 以下）

## 例:

```text
入力:
配列:[101, 103, 105, 107, 109, 111, 113, 115, 117, 119]
目標値: 111

出力: 5

目標値の111が配列に存在し、インデックスは5なので、出力は5
```

```text
入力:
配列:[200, 202, 204, 206, 208, 210, 212, 214, 216, 218]
目標値: 205

出力: -1

目標値の205は存在しないので、出力は-1
```

### 要件の補足

- 実装した関数は `npm run start:binary_search` で実行できます
  - 入力はスペース区切りの１行です
    - ex `13 2 4 5 6 8 11 13 33`
  - 最初の値が検索したい値
  - ２つ目以降は配列として扱われます
  - 入力後に `Enter` を押してください

## indexOf 関数とパフォーマンスを比較してみよう

findIndex 関数が用意されており、組み込み関数の indexOf を使って実装されています。二分探索の実装とパフォーマンスを比較してタスクノートにまとめましょう。

- 比較するポイント
  - 配列のサイズによって各関数のパフォーマンスがどのように変わっていくか
    - `findIndex` 関数の時間計算量を `O表記法` で表してみましょう
    - `binarySearch` 関数の時間計算量を `O表記法` で表してみましょう
  - 配列がどのくらいのサイズになるとパフォーマンスが逆転するか分岐点を探してみましょう
- 比較方法
  - それぞれの関数にパフォーマンス測定のコマンドが用意されており、配列のサイズを指定して実行できます
    - `npm run start:binary_search_with_measure`
    - `npm run start:find_index_with_measure`
  - 配列のサイズ
    - サイズ `n` を入力すると `2^n` のサイズの配列に対して探索した場合のパフォーマンスを測定します
      - `２^n` のイメージ： `2, 4, 8, 16, 32, 64, 128, 256, 512 ...`
      - 大体 `2^15` まで確認できるとわかりやすいグラフになります
    - 入力を増やしていき結果をスプレッドシートなどにプロットして計算量に応じたグラフになることを確認しましょう
  - 結果の単位
    - 結果は `ms（ミリ セカンド）` で出力されます。
    - ミリ秒は `1ms（ミリ セカンド） = 1,000分の1秒` です

<details><summary>2 ^ 25乗までのリスト</summary>

グラフをプロットするときに使ってください。

```text
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
131072
262144
524288
1048576
2097152
4194304
8388608
16777216
33554432
```

</details>

## （オプション）追加問題

二分探索はどのような問題に二分探索を適用するかが難しいポイントです。いろんな問題を解いてみましょう。

- [すべての荷物を積むために必要な最大積載量の最小値を求める](https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/4/ALDS1_4_D) 問題を解いてみましょう。
