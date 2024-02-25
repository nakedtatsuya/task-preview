# 幅優先探索を使って友達とのつながりの最短距離を計算しよう

あなたは、ソーシャルネットワークの開発者として働いています。ユーザーが特定のユーザーと友達になるか決めるために友達を辿って関係の距離を調べる機能を開発することになりました。

この機能は、与えられたユーザーが自分の友達を辿って繋がりがあるかを判定し、最短で繫がるための距離（必要な移動の数）を計算できる必要があります。

幅優先探索アルゴリズムを使ってこの問題を解いてみましょう。

## 満たしたい要件

- 友達を経由してつながれた場合は最短距離を返す
- 見つからない場合は `-1` を返す
- `src/breadth_first_search/index.ts` に実装してください

## 入力:

- `src/breadth_first_search/index.ts` の `breadthFirstSearch` 関数の引数には、下記の 3 つが渡されます
  - relationships: ユーザー数と友達関係を表す 2 次元配列で、relationships[i]は i 番目のユーザーが友達であるユーザーの配列です。
  - startUser: 出発点となるユーザーのインデックス (0 <= startUser < n)
  - targetUser: 目標となるユーザーのインデックス (0 <= startUser < n)
- ユーザーはゼロから順番にインデックスが振られます
  - ユーザー数が `5` だった場合、それぞれのユーザーは `0, 1, 2, 3, 4` となります。

## 出力:

- 出発点のユーザーから目標のユーザーまでの最短距離を返す。ただし、繋がりがない場合は -1 を返す。
- 距離の例
  - 直接つながっている友達の距離は `1`
  - 友達の友達でつながれる場合の距離は `2`

## 制約:

- ユーザーの数 (2 <= n <= 100)

## 例:

```text
入力例1:

n: 5
relationships: [
[1, 2], // ユーザー0はユーザー1と2と友達
[0, 3], // ユーザー1はユーザー0と3と友達
[0, 4], // ユーザー2はユーザー0と4と友達
[1], // ユーザー3はユーザー1と友達
[2] // ユーザー4はユーザー2と友達
]
startUser: 0
targetUser: 3

出力例1: 2
```

`0 → 2 → 3` でたどり着けるため経由した距離は `2`

```text
入力例2:

n: 6
relationships: [
[1, 4], // ユーザー0はユーザー1と4と友達
[0, 2], // ユーザー1はユーザー0と2と友達
[1, 3], // ユーザー2はユーザー1と3と友達
[2, 4], // ユーザー3はユーザー2と4と友達
[0, 3, 5], // ユーザー4はユーザー0と3と5と友達
[4] // ユーザー5はユーザー4と友達
]
startUser: 0
targetUser: 5

出力例2: 2
```

複数の経路で辿れるが最短は `0 → 4 → 5` でたどり着けるため経由した距離は `2`

```text
入力例3:

n: 4
relationships: [
[1], // ユーザー0はユーザー1と友達
[0, 3], // ユーザー1はユーザー0と3と友達
[4], // ユーザー2はユーザー4と友達
[1] // ユーザー3はユーザー1と友達
[2] // ユーザー4はユーザー2と友達
]
startUser: 0
targetUser: 4

出力例3: -1
```

友達を辿ってもつながれないので `-1`

## 要件の補足

- 実装した関数は `npm run start:breadth_first_search` で実行できます
  - 入力はスペース区切りの複数行です
  - 最初の行は `startUser` と `targetUser`
  - ２行目以降からユーザーごとの友達関係のリスト
  - 入力後に `Ctrl + c` を押してください

入力例 1 の動作確認をしたいときは下記のように入力してください。

```text
0 3
1 2
0 3
0 4
1
2
Ctrl + c
```

- １行目に `startUser: 0` `targetUser: 3` を入力しています
- ２行目にユーザー0 の友達 `1` と `2` を入力しています
- ３行目にユーザー1 の友達 `0` と `3` を入力しています
- ４行目にユーザー2 の友達 `0` と `4` を入力しています
- ５行目にユーザー3 の友達 `1` を入力しています
- ６行目にユーザー4 の友達 `2` を入力しています
- 最後に入力を終える `Ctrl + c` を入力しています（テキストではなくコマンドです）

`src/__tests__/e2e/breadth_first_search/data/` ディレクトリにあるテスト用のデータも活用してください。