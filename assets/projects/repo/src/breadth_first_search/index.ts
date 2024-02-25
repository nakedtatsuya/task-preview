//#if SITUATION == BREADTH_FIRST_SEARCH
export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number
): number => {
  //#if ANSWER == 1
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
  //#endif
};
//#endif
