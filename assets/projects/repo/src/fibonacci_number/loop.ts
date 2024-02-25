//#if SITUATION == FIBONACCHI_NUMBER
export const fibonacciLoop = (n: number): number => {
  //#if ANSWER == 1
  let a = 0;
  let b = 1;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }

  return a;
  //#endif
};
//#endif
