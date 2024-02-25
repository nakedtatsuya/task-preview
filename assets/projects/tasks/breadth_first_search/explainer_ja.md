# 解説

<iframe width="560" height="315" src="https://www.youtube.com/embed/1J73URbkhQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 解答例

```ts
export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number
): number => {
  const queue = [startUser];
  const visited = new Set<number>();
  let distance = 0;
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const user = queue.shift() as number;
      if (user === targetUser) {
        return distance;
      }
      visited.add(user);
      const friends = relationships[user];
      for (let j = 0; j < friends.length; j++) {
        const friend = friends[j];
        if (!visited.has(friend)) {
          queue.push(friend);
        }
      }
    }
    distance++;
  }
  return -1;
};
```
