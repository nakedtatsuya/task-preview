//#if SITUATION == FIBONACCHI_NUMBER
export const fibonacciRecursive = (n: number): number => {
  //#if ANSWER == 1
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  //#endif
};
//#endif
