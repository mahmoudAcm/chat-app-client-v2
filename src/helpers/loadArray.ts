/**
 * @description splits huge array into intervals
 * @param list the Array wich we work on spliting it
 * @param setArray used to change the state of the given list
 * @param limit the subarray length wich we want to get between intervals
 * @param time the interval time
 * @param filter callback function used for comparison to fillter the array if needed and returns true or false
 * @returns Timeout
 */
export const splitArrayIntoIntervals = (
  list: Array<any>,
  setArray: Function,
  limit: number,
  time: number,
  filter?: (value: any) => boolean,
) => {
  let page = 0;

  const interval = setInterval(() => {
    let start = page++ * limit;
    let end = start + limit;

    setArray((prev: any) => {
      return [
        ...prev,
        ...list.slice(start, end).filter((value) => {
          if (!filter) return true;
          return filter(value);
        }),
      ];
    });

    if (end > list.length) {
      clearInterval(interval);
    }
  }, time);

  return interval;
};
