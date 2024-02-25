# 深さ優先探索を使ってファイルツリーから特定のファイルを見つけよう

あなたは、大規模なファイルシステムを管理しています。ファイルシステムは、ディレクトリとファイルで構成されています。ある日、あなたの上司から特定のファイルを見つけるように求められました。

ファイルシステムが複雑になっているため、深さ優先探索アルゴリズムを使用して効率的にファイルを見つけるプログラムを作成しましょう。

## 満たしたい要件

- 特定のファイル名を持つファイルが存在する場合は true を返す
  - ディレクトリ名がマッチしても true は返さないでください
- 見つからない場合は false を返す
- `src/depth_first_search/index.ts` に実装してください

## 入力例

`src/depth_first_search/index.ts` の `depthFirstSearch` 関数の引数には、ファイル構造を表す `FileSystemNode` と目標のファイル名である `targetFile` が渡されます。

例えば下記のようなファイルシステム構造の root ディレクトリにあたるオブジェクトと目標のファイル名 `blues.mp3` が渡されます。

- FileSystemNode: root
- targetFile: "blues.mp3"

```text
- root
  - documents
    - photos
      - vacation.jpg
    - work
      - report.pdf
  - music
    - rock
      - song.mp3
    - jazz
      - blues.mp3
```

## 出力例

- `root/music/jazz/blues.mp3` に該当のファイルが存在するため、`true` を返します。

## 要件の補足

- 実装した関数は `npm run start:depth_first_search` で実行できます。
  - 入力はスペース区切りの１行です
    - ex `./src index.ts`
  - 最初の値が検索ディレクトリのパス
  - ２つ目は検索するファイル名
  - 入力後に `Enter` を押してください。
- ファイルシステム構造は `FileSystemNode` の型で渡されます
  - name: ファイルまたはディレクトリの名前を表す文字列
  - isDirectory: ノードがディレクトリかどうかを表す真偽値
  - children: ディレクトリ内の子ノードのリスト (ディレクトリでない場合は空リスト)

## （オプション）追加問題

余裕があれば、ファイルが見つかったときの戻り値を、そのファイルへのパスを返すようにしてみましょう。
