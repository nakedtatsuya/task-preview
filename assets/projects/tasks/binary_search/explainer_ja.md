# 解説

<iframe width="560" height="315" src="https://www.youtube.com/embed/oeM7PhDyWWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 解答例

```ts
export const binarySearch = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
};
```

### indexOf 関数とパフォーマンスを比較してみよう

binarySearch は `O(log n)`、indexOf 関数が使われている findIndex は `O(n)` であることがわかります。

- `binarySearch`
  - ![二分探索](https://user-images.githubusercontent.com/26600620/229391698-c14fa75f-c510-4de1-b038-87a7151a25ce.png)
- `findIndex`
  - ![findIndex](https://user-images.githubusercontent.com/26600620/229391730-1fae2de2-6c56-450a-83ca-2af85362089b.png)

大体サイズが `4000~5000` になる辺りを起点にパフォーマンスが逆転していることがわかります。

![二分探索 と findIndex](https://user-images.githubusercontent.com/26600620/229391775-db00e536-7ef1-4941-9385-913184631278.png)

### 数字の単位について

今回のように桁が小さかったり、桁が大きかったりする数字は、1000 倍区切りで決まっている[SI 接頭語](https://ja.wikipedia.org/wiki/SI%E6%8E%A5%E9%A0%AD%E8%AA%9E)というのをつけて単位を表現します。

有名なのであれば `1,000m = 1km（キロ メートル）`、 `1,000分の1秒 = 1ms（ミリ セカンド）`、`1,000,000 バイト= 1 MB （メガ バイト）`、などです（わかりやすいように 3 桁ずつカンマをつけてあります）。

特にテラ（10 の 12 乗）～ナノ（10 の-9 乗）あたりはちょくちょく使う機会がある程度あるので覚えておくと良いでしょう。今回のタスクでは分かりやすさのためにミリセカンドの単位で計測しています。

- 大きい方の単位：
  - キロ（`k`）、メガ（`M`）、ギガ（`G`）、テラ（`T`）
- 小さい方の単位：
  - ミリ（`m`）、マイクロ（`μ` もしくは `u`）、ナノ（`n`）
