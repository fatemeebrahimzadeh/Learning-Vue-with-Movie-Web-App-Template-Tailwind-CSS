const Pagination = (itemsCount, perPageCount, pageNumber = 1) => {
  return {
    indexOfFirstItem: (pageNumber - 1) * perPageCount,
    pageNumber: pageNumber,
    pageCounts: Math.ceil(itemsCount / perPageCount)
  }
}

export default Pagination
