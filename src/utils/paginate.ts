export function paginate<T>(data: Array<T>, perPage: number): Array<T[]> {
  const result: Array<T[]> = [];
  let page: T[] = [];

  data.forEach((element, index) => {
    page.push(element);

    if (page.length === perPage || index === data.length - 1) {
      result.push(page);
      page = [];
    }
  });

  return result;
}

export function paginateV2<T>(data: Array<T>, perPage: number): Array<T[]> {
  return data.reduce<Array<T[]>>(
    (result, element, index) => {
      const pageIndex = result.length - 1;
      const currentPage = result[pageIndex];
      const hasMoreElements = data[index + 1];

      currentPage.push(element);

      if (
        (currentPage.length === perPage || index === data.length - 1) &&
        hasMoreElements
      ) {
        result[pageIndex + 1] = [];
      }

      return result;
    },
    [[]]
  );
}
