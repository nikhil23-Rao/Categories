export const getUniqueValuesWithCase = (
  arr: string[],
  caseSensitive: boolean
) => {
  let temp: string[] = [];
  return [
    ...(new Set(
      caseSensitive
        ? arr
        : arr.filter((x) => {
            let _x = typeof x === "string" ? x.toLowerCase() : x;
            if (temp.indexOf(_x) === -1) {
              temp.push(_x);
              return x;
            }
          })
    ) as any),
  ];
};
