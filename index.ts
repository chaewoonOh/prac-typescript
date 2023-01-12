function 함수(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}
