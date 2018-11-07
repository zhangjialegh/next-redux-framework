// action是一个纯对象，不要觉得它是一个函数，要看return回来的其实就是一个object


export const showSearchAction = (payload) => ({
  type: 'SHOW_SEARCH_ACTION',
  payload
})
