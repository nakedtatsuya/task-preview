# 解説

<iframe width="560" height="315" src="https://www.youtube.com/embed/nVNskUKGRRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 解答例

```ts
export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string
): boolean => {
  if (root.name === target && !root.isDirectory) {
    return true;
  }

  if (root.isDirectory) {
    for (let i = 0; i < root.children.length; i++) {
      const child = root.children[i];
      if (depthFirstSearch(child, target)) {
        return true;
      }
    }
  }

  return false;
};
```

### ファイルが見つかったときの戻り値を、そのファイルへのパスを返す

```ts
export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string
): string | Error => {
  const stack: FileSystemNode[] = [root];
  const pathStack: string[] = [root.name];

  while (stack.length > 0) {
    const node = stack.pop() as FileSystemNode;
    const path = pathStack.pop() as string;

    if (node.name === target) {
      return path;
    }

    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
      pathStack.push(`${path}/${node.children[i].name}`);
    }
  }

  return new Error("File not found");
};
```
