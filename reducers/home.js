// 初始化状态
let initNavList = {
  display: false
}

export function home(state = initNavList, action) {
  switch (action.type) {
    case 'SHOW_SEARCH_ACTION':
      return {
        ...state, //三个点是展开符
        display: action.payload
      }
    default:
      return state
  }
}
