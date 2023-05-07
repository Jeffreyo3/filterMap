/**
 * Returns the elements of an array in the shape specified specified in the template callback function that meet the condition specified in the filter callback function.
 * @param {Array} array An array of elements to be filterMapped
 * @param {(element: any, index?: number) => any} filter A function that accepts up to two arguments. The mapFilter method calls
 * the filter function one time for each element in the array.
 * @param {(element: any, index?: number) => any} template A function that accepts up to two arguments. The mapFilter method calls the
 * template function one time for each element in the array that has a truthy predicate from the `filter`.
 */
function mapFilter<T, U>(
  array: T[],
  filter: (element: T, index?: number) => boolean,
  template: (element: T, index?: number) => U
): U[] {
  // Base Case
  if (array.length === 0) {
    return [];
  }

  const newArray: U[] = [];
  const runningFilter = (element: T, index?: number): boolean => {
    if (filter.length === 1) {
      return filter(element);
    } else {
      return filter(element, index);
    }
  };

  const runningCallbackfn = (element: T, index?: number): U => {
    if (template.length === 1) {
      return template(element);
    } else {
      return template(element, index);
    }
  };

  for (let index: number = 0; index < array.length; index++) {
    const element: T = array[index];
    if (runningFilter(element, index)) {
      newArray.push(runningCallbackfn(element, index));
    }
  }

  return newArray;
}

export default mapFilter;